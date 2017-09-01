import {Component, ViewChild} from '@angular/core';
import {IonicPage, Nav, NavController, NavParams} from 'ionic-angular';
import {CounterPage} from "../counter/counter";
import {CustomerPage} from "../customer/customer";

/**
 * Generated class for the MasterMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-menu',
  templateUrl: 'master-menu.html',
})
export class MasterMenuPage {

  rootPage = CounterPage;

  @ViewChild(Nav) nav: Nav;
  pages: Array<{ title: string, component: any }>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.pages = [
      {title: 'Counter', component: CounterPage},
      {title: 'Customer', component: CustomerPage}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterMenuPage');
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
