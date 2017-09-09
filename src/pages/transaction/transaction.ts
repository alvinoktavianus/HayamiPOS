import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {TransactionOutstandingPage} from "./transaction-outstanding/transaction-outstanding";
import {TransactionShipmentPage} from "./transaction-shipment/transaction-shipment";
import {TransactionCompletedPage} from "./transaction-completed/transaction-completed";

/**
 * Generated class for the TransactionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {

  tabOutstandingRoot = TransactionOutstandingPage;
  tabShipmentRoot = TransactionShipmentPage;
  tabCompletedRoot = TransactionCompletedPage;

}
