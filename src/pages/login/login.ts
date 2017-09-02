import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController} from 'ionic-angular';
import {Http} from '@angular/http';

import {TabsPage} from '../tabs/tabs'
import {LOGIN} from "../../constant/api";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

  doLogin() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    if (this.email == null || this.password == null) {
      this.presentAlert();
    } else {
      let credentials = {
        UserEmail: this.email,
        UserPassword: this.password
      };

      loading.present();
      this.http
        .post(LOGIN, credentials, {})
        .subscribe(
          data => {
            const response = JSON.parse(data['_body']);
            localStorage.setItem("TOKEN", response.UserToken);
            this.navCtrl.setRoot(TabsPage);
          },
          err => this.presentAlert()
        );

      loading.dismiss();
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please recheck your credentials!',
      buttons: ['OK']
    });
    alert.present();
  }

  showSuccess() {
    let alert = this.alertCtrl.create({
      title: 'Saved',
      subTitle: 'Successfully saved configuration!',
      buttons: ['OK']
    });
    alert.present();
  }

  presentNotConfigured() {
    let notConfigured = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please configure backend first!',
      buttons: ['OK']
    });
    notConfigured.present();
  }

}
