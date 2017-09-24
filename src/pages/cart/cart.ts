import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, CUSTOMERS, DISCOUNTS, NEW_TRANSACTIONS, REQUEST_HEADERS} from "../../constant/api";

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

  loadingPopup;
  successMessage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
    this.fetchData();
  }

  fetchData() {
    let tempTransHd = JSON.parse(localStorage.getItem('trHdTemp'));
    let tempTransDt = JSON.parse(localStorage.getItem('trDtTemp'));
    this.transHd = tempTransHd;
    this.transDt = tempTransDt;

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
      // Reset the total price first to zero, then calculate new price
      this.totalPriceWithDiscount = 0;

      this.transDt.forEach(dt => {
        this.totalPriceWithDiscount += dt.TotalPrice ? parseInt(dt.TotalPrice) : 0;
      });
    }

    if (!this.discountCustomer) {
      this.totalPriceWithDiscount -= this.discountCustomer;
    }

  }

  doRefresh(refresher) {
    this.fetchData();
    refresher.complete();
  }

  removeProduct(data) {
    let index = this.transDt.indexOf(data);
    this.transDt.splice(index, 1);

    // After removing the data, set the data back to the local storage for the further request
    localStorage.setItem('trDtTemp', JSON.stringify(this.transDt));

    // Refresh the data
    this.fetchData();
  }

  doCreateNewTransaction() {
    this.loadingAlert();

    const newTransaction = this.transHd;
    newTransaction['TotalPrice'] = this.totalPriceWithDiscount + this.discountCustomer;
    newTransaction['TotalDiscount'] = this.discountCustomer;
    newTransaction['TransactionDts'] = this.transDt;

    this.http
      .post(NEW_TRANSACTIONS, newTransaction, {headers: REQUEST_HEADERS()})
      .subscribe(
        data => {
          console.log(data);
          this.loadingPopup.dismiss();
          this.successAlert();
        }
      );
  }

  loadingAlert() {
    this.loadingPopup = this.alertCtrl.create({
      message: 'Loading...',
    });
    this.loadingPopup.present();
  }

  successAlert() {
    this.successMessage = this.alertCtrl.create({
      message: 'Successfully create a new transaction',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            let tokenTemp = localStorage.getItem('TOKEN');
            // We need to clear localStorage for further request
            localStorage.clear();
            // But we also not to clear TOKEN
            localStorage.setItem('TOKEN', tokenTemp);
            // After clearing the localStorage, don't forget to fetch the data back,
            // so that it will make the cart empty;
            this.fetchData();
          }
        }
      ]
    });
    this.successMessage.present();
  }

}
