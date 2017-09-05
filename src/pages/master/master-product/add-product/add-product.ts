import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {MODELS, REQUEST_HEADERS, TYPES} from "../../../../constant/api";

/**
 * Generated class for the AddProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-product',
  templateUrl: 'add-product.html',
})
export class AddProductPage {

  newProduct: any = {};
  models: any = [];
  types: any = [];
  hashesTypes: any = {};

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }

  fetchAllData() {
    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.models = data;
        });

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.types = data;
          data.forEach(type => {
            this.hashesTypes[type.TypeID] = type;
          })
        }
      );
  }

  addNewProduct() {
    console.log(this.newProduct);
  }

  onChangeType() {
    this.types.forEach(type => {
      if (type.TypeID == this.newProduct.TypeID) {
        this.newProduct.TypePrice = type.TypePrice;
      }
    });
  }

  addStorage() {
    let modal = this.modalCtrl.create("dad");
    modal.present();
    console.log("clicked");
  }

}
