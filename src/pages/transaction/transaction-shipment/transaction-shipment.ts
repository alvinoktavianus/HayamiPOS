import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, REQUEST_HEADERS, TRANSACTIONS} from "../../../constant/api";

/**
 * Generated class for the TransactionShipmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-shipment',
  templateUrl: 'transaction-shipment.html',
})
export class TransactionShipmentPage {

  transactions: any = [];
  customers: object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionShipmentPage');
  }

  fetchData() {
    this.http
      .get(TRANSACTIONS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(data => {
            if (data.FgStatus == 'S') this.transactions.push(data);
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

  onClickReceived() {
    console.log("clicked");
  }

}
