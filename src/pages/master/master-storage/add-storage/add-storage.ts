import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {NEW_STORAGES, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddStoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-storage',
  templateUrl: 'add-storage.html',
})
export class AddStoragePage {

  newStorage: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStoragePage');
  }

  createNewStorage() {
    const sendData = {...this.newStorage, StoragePrior: null};
    this.http.post(NEW_STORAGES, sendData, {headers: REQUEST_HEADERS()})
      .subscribe(
        data => {
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
