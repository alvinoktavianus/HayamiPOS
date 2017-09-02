import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {NEW_COUNTERS, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddCounterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-counter',
  templateUrl: 'add-counter.html',
})
export class AddCounterPage {

  counter: object = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddCounterPage');
  }

  createNewCounter() {
    this.http
      .post(NEW_COUNTERS, this.counter, {headers: REQUEST_HEADERS()})
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
