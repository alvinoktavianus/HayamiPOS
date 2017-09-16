import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ProductDetailModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail-modal',
  templateUrl: 'product-detail-modal.html',
})
export class ProductDetailModalPage {

  product: object = {};
  types: any = [];
  models: object = {};
  customers: any = [];
  counters: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    console.log(this.navParams);
    this.product = {...navParams.data.product};
    this.types = [...navParams.data.type];
    this.models = {...navParams.data.model};
    this.customers = [...navParams.data.customers];
    this.customers = [...navParams.data.counters];
  }

}
