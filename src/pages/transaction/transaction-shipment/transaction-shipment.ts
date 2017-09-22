import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, PRODUCTS, REQUEST_HEADERS, TRANSACTIONS, TYPES} from "../../../constant/api";
import {TransactionShipmentModalPage} from "./transaction-shipment-modal/transaction-shipment-modal";

/**
 * Generated class for the TransactionShipmentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-shipment',
  templateUrl: 'transaction-shipment.html',
})
export class TransactionShipmentPage {

  transactions: any;
  customers: object;
  types: object;
  products: object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionShipmentPage');
  }

  fetchData() {
    this.http
      .get(TRANSACTIONS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.transactions = [];
          data.forEach(data => {
            if (data.FgStatus == 'S') this.transactions.push(data);
          });
        }
      );

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.customers = {};
          data.forEach(customer => {
            this.customers[customer.CustomerID] = customer;
          })
        }
      );

    this.http
      .get(PRODUCTS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.products = {};
          data.forEach(product => {
            this.products[product.ProductHdID] = product;
          })
        }
      );

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.types = {};
          data.forEach(type => {
            this.types[type.TypeID] = type;
          });
        }
      );
  }

  onClickReceived() {
    console.log("clicked");
  }

  openDetailModal(transaction) {
    let idx = this.transactions.indexOf(transaction);
    const singleTr = this.transactions[idx].TransactionDts;

    singleTr.forEach((tr, index) => {
      singleTr[index]['ProductCode'] = this.products[tr.ProductHdID].ProductCode;
      singleTr[index]['ProductDesc'] = this.products[tr.ProductHdID].ProductDesc;
      singleTr[index]['Price'] = this.types[this.products[tr.ProductHdID].TypeID].TypePrice;
    });

    const modal = this.modalCtrl.create(TransactionShipmentModalPage, {TrDts: singleTr});
    modal.present();
  }

}
