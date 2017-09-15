import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {PRODUCTS, REQUEST_HEADERS} from "../../constant/api";
import 'rxjs/add/operator/map';
import {ProductDetailModalPage} from "./product-detail-modal/product-detail-modal";

/**
 * Generated class for the ProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  products: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http,
              public modalCtrl: ModalController) {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(PRODUCTS, {
        headers: REQUEST_HEADERS()
      })
      .map(res => res.json())
      .subscribe(
        data => {
          this.products = data;
        }
      )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

  openModal = (products) => {
    const params = {...products};
    let modal = this.modalCtrl.create(ProductDetailModalPage, params);
    modal.present();
  }

}
