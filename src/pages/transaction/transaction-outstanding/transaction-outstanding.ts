import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {CUSTOMERS, PRODUCTS, REQUEST_HEADERS, TRANSACTIONS, TYPES} from "../../../constant/api";
import {TransactionOustandingModalPage} from "./transaction-oustanding-modal/transaction-oustanding-modal";

/**
 * Generated class for the TransactionOutstandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction-outstanding',
  templateUrl: 'transaction-outstanding.html',
})
export class TransactionOutstandingPage {

  transactions: any;
  customers: object;
  types: object;
  products: object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchAllData();
  }

  fetchAllData() {
    this.http
      .get(TRANSACTIONS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.transactions = [];
          data.forEach(tr => {
            if (tr.FgStatus == 'O') this.transactions.push(tr);
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

  openDetailModal(transaction) {
    let index = this.transactions.indexOf(transaction);
    const singleTr = this.transactions[index].TransactionDts;
    const status = this.transactions[index].FgStatus;

    singleTr.forEach((tr, index) => {
      singleTr[index]['ProductCode'] = this.products[tr.ProductHdID].ProductCode;
      singleTr[index]['ProductDesc'] = this.products[tr.ProductHdID].ProductDesc;
      singleTr[index]['Price'] = this.types[this.products[tr.ProductHdID].TypeID].TypePrice;
      singleTr[index]['Status'] = status;
    });

    let modal = this.modalCtrl.create(TransactionOustandingModalPage, {TrDts: singleTr});
    modal.present();

  }

}
