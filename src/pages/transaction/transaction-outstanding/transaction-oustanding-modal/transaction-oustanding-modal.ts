import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TransactionOustandingModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-oustanding-modal',
  templateUrl: 'transaction-oustanding-modal.html',
})
export class TransactionOustandingModalPage {

  transactionDetails: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.transactionDetails = [...navParams.data.TrDts];
  }

}
