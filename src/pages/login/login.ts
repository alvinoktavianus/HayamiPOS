import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

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

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public http: Http,
              public alertCtrl: AlertController) {
    // localStorage.clear();
  }

  doLogin() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    if (this.username == null || this.password == null) {
      this.presentAlert();
    } else {
      let credentials = {
        UserName: this.username,
        UserPassword: this.password
      };

      loading.present();
      this.http
        .post(LOGIN, credentials, {})
        .map(res => res.json())
        .subscribe(
          data => {
            localStorage.setItem("TOKEN", data.UserToken);
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

}
