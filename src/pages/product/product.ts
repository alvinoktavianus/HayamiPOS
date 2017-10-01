import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, CUSTOMERS, MODELS, PRODUCTS, REQUEST_HEADERS, TYPES} from "../../constant/api";
import 'rxjs/add/operator/map';
import {ProductDetailModalPage} from "./product-detail-modal/product-detail-modal";
import {ProductReturnModalPage} from "./product-return-modal/product-return-modal";

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
  allProducts: any;
  types: any = {};
  models: any = {};
  customers: any;
  counters: any;
  filterByProduct;
  filterByKey = 'ProductCode';
  productDetailModal;

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
          this.allProducts = data;
        }
      );

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(type => {
            this.types[type.TypeID] = type;
          });
        }
      );

    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          data.forEach(model => {
            this.models[model.ModelID] = model;
          });
        }
      );

    this.http
      .get(CUSTOMERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.customers = data;
        }
      );

    this.http
      .get(COUNTERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.counters = data;
        }
      );
  }

  openModal = (products, target) => {
    const fullParams = {
      product: {...products},
      model: this.models,
      type: this.types,
      customers: this.customers,
      counters: this.counters,
      DetailModal: this.productDetailModal
    };

    switch (target) {
      case 'detail':
        this.productDetailModal = this.modalCtrl.create(ProductDetailModalPage, fullParams);
        this.productDetailModal.present();
        break;
      case 'return':
        this.productDetailModal = this.modalCtrl.create(ProductReturnModalPage, fullParams);
        this.productDetailModal.present();
        break;
    }

  };

  onModelChange(e) {
    if (e && e !== "") {
      let filteredProduct = [];
      const tempProducts = [...this.allProducts];
      switch (this.filterByKey) {
        case 'Model':
          tempProducts.forEach(product => {
            let modelName = this.models[product.ModelID].ModelName;
            if (modelName.includes(e)) {
              filteredProduct.push(product);
            }
          });
          this.products = filteredProduct;
          break;
        case 'Type':
          tempProducts.forEach(product => {
            let typeName = this.types[product.TypeID].TypeName;
            if (typeName.includes(e)) {
              filteredProduct.push(product);
            }
          });
          this.products = filteredProduct;
          break;
      }
    } else {
      this.products = [...this.allProducts];
    }
  }

}
