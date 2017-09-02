import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {NEW_MODELS, REQUEST_HEADERS} from "../../../../constant/api";

/**
 * Generated class for the AddModelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-model',
  templateUrl: 'add-model.html',
})
export class AddModelPage {

  newModel: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddModelPage');
  }

  addNewModel() {
    this.http
      .post(NEW_MODELS, this.newModel, {headers: REQUEST_HEADERS()})
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
