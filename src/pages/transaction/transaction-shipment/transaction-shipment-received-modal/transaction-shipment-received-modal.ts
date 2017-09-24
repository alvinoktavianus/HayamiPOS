import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {FINISHED_TRANSACTIONS, REQUEST_HEADERS} from "../../../../constant/api";

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
  trHdID;
  loadingAlert;
  successAlert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
    this.dtlReceivedData = [...navParams.data.TrDts];
    this.trHdID = navParams.data.TrHdID;
    console.log(navParams);
  }

  validateQty(e, dtl) {
    let receivedQty = parseInt(e);
    let idx = this.dtlReceivedData.indexOf(dtl);
    let qty = this.dtlReceivedData[idx].Qty;
    if (isNaN(receivedQty)) {
      return false;
    } else {
      this.dtlReceivedData[idx].ReceiveQty = receivedQty < 0 || receivedQty > qty ? 0 : receivedQty;
    }
  }

  confirm() {
    this.showLoadingAlert();
    console.log(this.dtlReceivedData);

    let dtlTrans = [];
    this.dtlReceivedData.forEach(detail => {
      let tempDetail = {
        ReceiveQty: detail.ReceiveQty
      };
      dtlTrans.push(tempDetail);
    });

    let finishedTrans = {
      TransHdID: this.trHdID,
      TransactionDts: dtlTrans,
    };

    console.log(finishedTrans);
    console.log(`${FINISHED_TRANSACTIONS}/${this.trHdID}`);
    this.loadingAlert.dismiss();
    this.showSuccessAlert();
    // this.http
    //   .put(FINISHED_TRANSACTIONS, finishedTrans, {headers: REQUEST_HEADERS()})
    //   .subscribe(data => {
    //
    //   });
  }

  showLoadingAlert() {
    this.loadingAlert = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loadingAlert.present();
  }

  showSuccessAlert() {
    this.successAlert = this.alertCtrl.create({
      title: 'Success',
      message: "Successfully update this transaction"
    });
    this.successAlert.present();
  }

}
