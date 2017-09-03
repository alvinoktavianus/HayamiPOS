import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, DISCOUNTS, REQUEST_HEADERS} from "../../../constant/api";
import 'rxjs/add/operator/map';
import {AddDiscountsPage} from "./add-discounts/add-discounts";

/**
 * Generated class for the MasterDiscountPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-discount',
  templateUrl: 'master-discount.html',
})
export class MasterDiscountPage {

  discounts: any = [];
  customers: object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterDiscountPage');
  }

  fetchAllData() {

    this.http
      .get(DISCOUNTS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.discounts = data;
        }
      );

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach((cstmr) => {
            this.customers[cstmr.CustomerID] = cstmr;
          });
        }
      );

  }

  doRefresh(refresher) {
    this.fetchAllData();
    refresher.complete();
  }

  addNewDiscount() {
    this.navCtrl.push(AddDiscountsPage);
  }

}
