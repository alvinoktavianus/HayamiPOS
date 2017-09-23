import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TransactionShipmentReceivedModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-shipment-received-modal',
  templateUrl: 'transaction-shipment-received-modal.html',
})
export class TransactionShipmentReceivedModalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionShipmentReceivedModalPage');
  }

}
