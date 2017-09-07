import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddStoragePage');
  }

}
