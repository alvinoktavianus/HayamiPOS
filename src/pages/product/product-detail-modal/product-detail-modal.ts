import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {REQUEST_HEADERS, TYPES, MODELS} from "../../../constant/api";
import {Http} from "@angular/http";
import {map} from "rxjs/operator/map";

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
  types: object = {};
  models: object = {};
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.product = {...navParams.data};
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach((typ) => {
            this.types[typ.TypeId] = typ;
          });
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
        .subscribe(
          data => {
            data.forEach((mod) => {
              this.models[mod.ModelId] = mod;
            });
          }
        );
      }

  doRefresh(refresher) {
    this.fetchData();
    refresher.complete();
  }
}
