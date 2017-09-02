import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {NEW_TYPES, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-type',
  templateUrl: 'add-type.html',
})
export class AddTypePage {

  newType: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTypePage');
  }

  addNewType() {
    const sendData = {...this.newType, TypePrice: parseFloat(this.newType.TypePrice)};
    console.log(sendData);

    this.http
      .post(NEW_TYPES, sendData, {headers: REQUEST_HEADERS()})
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
