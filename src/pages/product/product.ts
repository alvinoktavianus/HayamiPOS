import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";
import 'rxjs/add/operator/map';
import {ProductDetailModalPage} from "./product-detail-modal/product-detail-modal";

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: any;
  types: any = {};
  models: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(PRODUCTS, {
        headers: REQUEST_HEADERS()
      })
      .map(res => res.json())
      .subscribe(
        data => {
          this.products = data;
        }
      );

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(type => {
            this.types[type.TypeID] = type;
          })
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(model => {
            this.models[model.ModelID] = model;
          });
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  openModal = (products) => {
    const fullParams = {
      product: {...products},
      model: this.models,
      type: this.types,
    };
    let modal = this.modalCtrl.create(ProductDetailModalPage, fullParams);
    modal.present();
  }

}
