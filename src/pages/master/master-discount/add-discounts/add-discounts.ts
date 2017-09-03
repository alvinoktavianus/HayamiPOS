import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, NEW_DISCOUNTS, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddDiscountsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-discounts',
  templateUrl: 'add-discounts.html',
})
export class AddDiscountsPage {

  customers: any = [];
  newDiscount: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDiscountsPage');
  }

  fetchAllData() {
    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.customers = data;
        }
      );
  }

  addNewDiscount() {
    const sendData = {...this.newDiscount, DiscDivide: parseFloat(this.newDiscount.DiscDivide)}

    this.http
      .post(NEW_DISCOUNTS, sendData, {headers: REQUEST_HEADERS()})
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

}
