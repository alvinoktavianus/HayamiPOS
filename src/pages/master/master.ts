import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CounterPage} from "./counter/counter";
import {CustomerPage} from "./customer/customer";
import {MasterProductPage} from "./master-product/master-product";

/**
 * Generated class for the MasterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master',
  templateUrl: 'master.html',
})
export class MasterPage {

  tabCounterRoot = CounterPage;
  tabCustomerRoot = CustomerPage;
  tabProductRoot = MasterProductPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterPage');
  }

}
