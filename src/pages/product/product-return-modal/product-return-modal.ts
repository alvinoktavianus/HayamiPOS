import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {NEW_RETURN, REQUEST_HEADERS} from "../../../constant/api";

/**
 * Generated class for the ProductReturnModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-return-modal',
  templateUrl: 'product-return-modal.html',
})
export class ProductReturnModalPage {

  product: object = {};
  types: any = [];
  models: object = {};
  TransRetur: any = [{}];
  loadingAlert;
  successAlert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController) {
    this.product = {...navParams.data.product};
    this.types = {...navParams.data.type};
    this.models = {...navParams.data.model};
  }

  addRow() {
    this.TransRetur.push({});
  }

  removeRow(index) {
    this.TransRetur.splice(index, 1);
  }

  submitReturn() {
    this.showLoadingAlert();
    const returnDetail = [...this.TransRetur];
    returnDetail.forEach((dtl, idx) => {
      returnDetail[idx]['ProductHdID'] = this.product['ProductHdID'];
    });
    let returnHeader = {
      ReturDesc: returnDetail[0].ReturRemarks,
      TransactionReturDts: returnDetail,
    };
    console.log(returnHeader);
    this.http
      .post(NEW_RETURN, returnHeader, {headers: REQUEST_HEADERS()})
      .subscribe(
        () => {
          this.loadingAlert.dismiss();
          this.showSuccessAlert();
        }
      );
  }

  showLoadingAlert() {
    this.loadingAlert = this.loadingCtrl.create({
      content: "Loading..."
    });
    this.loadingAlert.present();
  }

  showSuccessAlert() {
    this.successAlert = this.alertCtrl.create({
      message: 'Successfully create a new return',
      title: 'Success',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.navParams.data.DetailModal.dismiss();
          }
        }
      ]
    });
    this.successAlert.present();
  }
}
