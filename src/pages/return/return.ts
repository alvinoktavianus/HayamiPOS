import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, CUSTOMERS, MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";
import {ReturnModalPage} from "./return-modal/return-modal";

/**
 * Generated class for the ReturnPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return',
  templateUrl: 'return.html',
})
export class ReturnPage {

  products: any;
  types: any = {};
  models: any = {};
  customers: any;
  counters: any;

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
            // console.log(type);
            this.types[type.TypeID] = type;
          });
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

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.customers = data;
        }
      );

    this.http
      .get(COUNTERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.counters = data;
        }
      );
  }

  openModal = (products) => {
    const fullParams = {
      product: {...products},
      model: this.models,
      type: this.types,
      customers: this.customers,
      counters: this.counters,
    };
    let modal = this.modalCtrl.create(ReturnModalPage, fullParams);
    modal.present();
  }


}
