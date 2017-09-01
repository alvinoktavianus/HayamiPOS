import {Component} from '@angular/core';
import {IonicPage, NavController, LoadingController, AlertController} from 'ionic-angular';
import {Http} from '@angular/http';

import {TabsPage} from '../tabs/tabs'

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
    const hostUrl = localStorage.getItem('hostUrl');

    if (!hostUrl) {
      this.presentNotConfigured();
    } else if (this.email == null || this.password == null) {
      this.presentAlert();
    } else {
      let credentials = {
        UserEmail: this.email,
        UserPassword: this.password
      };

      const apiLocation = `${hostUrl}/api/users/login`;

      loading.present();
      this.http
        .post(apiLocation, credentials, {})
        .subscribe(
          data => {
            console.log(data);
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

  askConfirmation() {
    let confirm = this.alertCtrl.create({
      title: 'Configure backend?',
      message: 'Are you sure you want to configure backend? This action cannot be undone.',
      buttons: [
        {
          text: 'No'
        },
        {
          text: 'Yes',
          handler: () => {
            this.showConfigurationSettings();
          }
        }
      ]
    });
    confirm.present();
  }

  showConfigurationSettings() {
    let confirm = this.alertCtrl.create({
      title: 'Configure backend',
      message: 'Enter backend host and port',
      inputs: [
        {
          name: 'hostUrl',
          placeholder: 'Backend host and port'
        }
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            localStorage.setItem('hostUrl', data.hostUrl);
            this.showSuccess();
          }
        }
      ]
    });
    confirm.present();
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
