import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {REQUEST_HEADERS, TRANSACTIONS} from "../../../constant/api";

/**
 * Generated class for the TransactionCompletedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-completed',
  templateUrl: 'transaction-completed.html',
})
export class TransactionCompletedPage {

  transactions: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionCompletedPage');
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
  }

}
