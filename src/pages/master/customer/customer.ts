import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, REQUEST_HEADERS} from "../../../constant/api";

import 'rxjs/add/operator/map';
import {AddCustomerPage} from "./add-customer/add-customer";

/**
 * Generated class for the CustomerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {

  public customers: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.customers = data;
          console.log(this.customers);
        }
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPage');
  }

  addCustomer() {
    this.navCtrl.push(AddCustomerPage);
  }

}
