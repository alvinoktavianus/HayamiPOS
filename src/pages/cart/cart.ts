import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, CUSTOMERS, DISCOUNTS, REQUEST_HEADERS} from "../../constant/api";

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

  transHd = {};
  transDt = [];

  headers;
  totalPriceWithDiscount = 0;
  discountCustomer = 0;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchData();
  }

  fetchData() {
    let tempTransHd = JSON.parse(localStorage.getItem('trHdTemp'));
    let tempTransDt = JSON.parse(localStorage.getItem('trDtTemp'));
    this.transHd = tempTransHd;
    this.transDt = tempTransDt;

    // console.log(this.transHd);
    // console.log(this.transDt);

    if (this.transHd && this.transHd['CustomerID']) {
      this.http
        .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
        .map(res => res.json())
        .subscribe(
          data => {
            data.forEach(customer => {
              if (customer.CustomerID === this.transHd['CustomerID']) {
                this.headers = customer.CustName;
              }
            });
          }
        );

      this.http
        .get(DISCOUNTS, {headers: REQUEST_HEADERS()})
        .map(res => res.json())
        .subscribe(
          data => {
            data.forEach(discount => {
              if (discount.CustomerID === this.transHd['CustomerID']) {
                this.discountCustomer = discount.DiscDivide;
              }
            })
          }
        );

    }

    if (this.transHd && this.transHd['CounterID']) {
      this.http
        .get(COUNTERS, {headers: REQUEST_HEADERS()})
        .map(res => res.json())
        .subscribe(
          data => {
            data.forEach(counter => {
              if (counter.CounterID === this.transHd['CounterID']) {
                this.headers = counter.CounterName;
              }
            });
          }
        );
    }

    if (this.transDt) {
      this.transDt.forEach(dt => {
        this.totalPriceWithDiscount += dt.TotalPrice ? parseInt(dt.TotalPrice) : 0;
      });
    }

    if (!this.discountCustomer) {
      this.totalPriceWithDiscount -= this.discountCustomer;
    }

    console.log(tempTransDt);

  }

  doRefresh(refresher) {
    this.fetchData();
    refresher.complete();
  }

}
