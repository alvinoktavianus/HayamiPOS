import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {AddProductPage} from "./add-product/add-product";
import {MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../../constant/api";

/**
 * Generated class for the MasterProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-product',
  templateUrl: 'master-product.html',
})
export class MasterProductPage {

  types: any = {};
  models: any = {};
  products: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterProductPage');
  }

  addProducts() {
    this.navCtrl.push(AddProductPage);
  }

  fetchAllData() {
    this.http
      .get(PRODUCTS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.products = data;
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach((model) => {
            this.models[model.ModelID] = model;
          });
        }
      );

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach((type) => {
            this.types[type.TypeID] = type;
          });
        }
      );
  }

  editSingleProduct() {
    console.log("edit clicked");
  }

  transferSingleProduct() {
    console.log("transfer clicked");
  }

  clearSingleProduct() {
    console.log("clear clicked");
  }

  doRefresh(refresher) {
    this.fetchAllData();
    refresher.complete();
  }

}
