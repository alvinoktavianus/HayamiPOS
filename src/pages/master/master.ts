import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {CounterPage} from "./counter/counter";
import {CustomerPage} from "./customer/customer";
import {MasterProductPage} from "./master-product/master-product";
import {MasterTypePage} from "./master-type/master-type";
import {MasterModelPage} from "./master-model/master-model";
import {MasterDiscountPage} from "./master-discount/master-discount";
import {MasterStoragePage} from "./master-storage/master-storage";

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
  tabTypeRoot = MasterTypePage;
  tabModelRoot = MasterModelPage;
  tabDiscountRoot = MasterDiscountPage;
  tabStorageRoot = MasterStoragePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterPage');
  }

}
