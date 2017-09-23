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

  dtlReceivedData: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.dtlReceivedData = [...navParams.data.TrDts];
  }

  validateQty(e, dtl) {
    let receivedQty = parseInt(e);
    let idx = this.dtlReceivedData.indexOf(dtl);
    let qty = this.dtlReceivedData[idx].Qty;
    if (isNaN(receivedQty)) {
      return false;
    } else {
      this.dtlReceivedData[idx].ReceivedQty = receivedQty < 0 || receivedQty > qty ? 0 : receivedQty;
    }
  }

  confirm() {
    console.log(this.dtlReceivedData);
  }

}
