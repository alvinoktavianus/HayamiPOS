import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, NEW_CUSTOMERS, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddCustomerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-customer',
  templateUrl: 'add-customer.html',
})
export class AddCustomerPage {

  counters: any = [];
  newCustomers: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {

    this.http
      .get(COUNTERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.counters = data;
        }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCustomerPage');
  }

  addNewCustomers() {
    this.http
      .post(NEW_CUSTOMERS, this.newCustomers, {headers: REQUEST_HEADERS()})
      .subscribe(
        res => {
          this.showSuccessAlert();
        }
      );
  }

  showSuccessAlert() {
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Successfully add a new counter',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }

  handleNumberChange(e, value) {
    if (isNaN(value)) {
      e.preventDefault();
    }
  }

}
