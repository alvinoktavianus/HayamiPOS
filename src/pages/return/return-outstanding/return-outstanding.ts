import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {MODELS, PRODUCTS, REQUEST_HEADERS, RETURN, TYPES} from "../../../constant/api";
import {ReturnOutstandingDetailModalPage} from "./return-outstanding-detail-modal/return-outstanding-detail-modal";

/**
 * Generated class for the ReturnOutstandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-outstanding',
  templateUrl: 'return-outstanding.html',
})
export class ReturnOutstandingPage {

  returnOutstanding;
  products;
  types;
  models;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(RETURN, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.returnOutstanding = [];
          data.forEach(retur => {
            if (retur.ReturStatus === 'O') {
              this.returnOutstanding.push(retur);
            }
          })
        }
      );

    this.http
      .get(PRODUCTS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        products => {
          this.products = {};
          products.forEach(product => {
            this.products[product.ProductHdID] = product;
          });
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        models => {
          this.models = {};
          models.forEach(model => {
            this.models[model.ModelID] = model;
          });
        }
      );

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        types => {
          this.types = {};
          types.forEach(type => {
            this.types[type.TypeID] = type;
          });
        }
      );
  }

  doRefresh(refresher) {
    this.fetchData();
    refresher.complete();
  }

  openModal(retur) {
    let productId = retur.TransactionReturDts[0].ProductHdID;
    let typeId = this.products[productId].TypeID;
    let modelId = this.products[productId].ModelID;
    let dtl = {
      ProductCode: this.products[productId].ProductCode,
      ProductDesc: this.products[productId].ProductDesc,
      ProductType: this.types[typeId].TypeName,
      Model: this.models[modelId].ModelName,
      Price: this.types[typeId].TypePrice,
      DetailRetur: retur.TransactionReturDts,
      Status: retur.ReturStatus,
    };
    let dtlModal = this.modalCtrl.create(ReturnOutstandingDetailModalPage, {DetailRetur: dtl});
    dtlModal.present();
  }

}
