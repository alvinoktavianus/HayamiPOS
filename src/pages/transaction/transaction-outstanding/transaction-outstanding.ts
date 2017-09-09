import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, REQUEST_HEADERS, TRANSACTIONS} from "../../../constant/api";

/**
 * Generated class for the TransactionOutstandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-outstanding',
  templateUrl: 'transaction-outstanding.html',
})
export class TransactionOutstandingPage {

  transactions: any = [];
  customers: object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionOutstandingPage');
  }

  fetchAllData() {
    this.http
      .get(TRANSACTIONS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(tr => {
            if (tr.FgStatus == 'O') this.transactions.push(tr);
          });
        }
      );

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(customer => {
            this.customers[customer.CustomerID] = customer;
          })
        }
      );
  }

}
