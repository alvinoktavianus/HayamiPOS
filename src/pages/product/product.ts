import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {PRODUCTS, REQUEST_HEADERS} from "../../constant/api";
import 'rxjs/add/operator/map';

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
              public http: Http) {

    this.http
      .get(PRODUCTS, {
        headers: REQUEST_HEADERS()
      })
      .map(res => res.json())
      .subscribe(
        data => {
          console.log(data);
          this.products = data;
        }
      )

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
  }

}
