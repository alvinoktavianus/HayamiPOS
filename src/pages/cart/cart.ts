import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, CUSTOMERS, DISCOUNTS, MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  customers: any = [];
  counters: any = [];
  products: any = [];
  types: any = [];
  models: any = [];
  discounts: any = {};

  transactionData: object = {
    target: null,
    TotalDiscount: 0,
    TransactionDt: [{}]
  };

  transHd = {};
  transDt = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchLocalStorageData();

    this.fetchData();
  }

  fetchLocalStorageData() {
    let tempTransHd = JSON.parse(localStorage.getItem('trHdTemp'));
    let tempTransDt = JSON.parse(localStorage.getItem('trDtTemp'));
    this.transHd = tempTransHd;
    this.transDt = tempTransDt;
  }

  fetchData() {
    this.http
      .get(DISCOUNTS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(discount => {
            this.discounts[discount.DiscountID] = discount;
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

    this.http
      .get(PRODUCTS, {headers: REQUEST_HEADERS()})
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
          this.types = data;
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.models = data;
        }
      );
  }

  createTransaction() {
    console.log("Created");
  }

  addRow() {
    this.transactionData['TransactionDt'].push({})
  }

  doRefresh(refresher) {
    this.fetchLocalStorageData();
    refresher.complete();
  }

}
