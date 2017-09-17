import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';

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
  transactionDt: any = {
    Qty: 0,
    AddDiscountValue: 0,
    AddDiscountType: 'P',
  };
  stock: any = {};
  totalDiscount = 0;
  itemPrice;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
    this.product = {...navParams.data.product};
    this.types = {...navParams.data.type};
    this.models = {...navParams.data.model};
    this.customers = [...navParams.data.customers];
    this.counters = [...navParams.data.counters];

    // this code will calculate stock based on the product size
    this.product['ProductDts'].forEach(pd => {
      this.stock[pd.ProductSize] = pd.ProductQty;
    });

    this.itemPrice = this.types[this.product['TypeID']].TypePrice;

  }

  onClickAddToCard() {
    return;
  }

  addQty(event) {
    if (this.transactionDt.ProductSize) {
      if (this.transactionDt.Qty <= this.stock[this.transactionDt.ProductSize]) {
        this.transactionDt.Qty++;
      } else {
        event.preventDefault();
      }
    } else {
      this.showSelectTypeNotif();
    }
  }

  decreaseQty(event) {
    if (this.transactionDt.ProductSize) {
      if (this.transactionDt.Qty > 0) {
        this.transactionDt.Qty--;
      } else {
        event.preventDefault();
      }
    } else {
      this.showSelectTypeNotif();
    }
  }

  showSelectTypeNotif() {
    let alert = this.alertCtrl.create({
      message: "Please select type first",
      buttons: ['OK'],
    });
    alert.present();
  }

  validateDiscount(e) {
    let discountValue = parseInt(e);
    if (isNaN(discountValue)) {
      return false;
    } else {
      switch (this.transactionDt.AddDiscountType) {
        case 'P':
          if (discountValue < 0 || discountValue > 100)
            return false;
          this.totalDiscount = (discountValue / 100) * this.itemPrice;
          break;
        case 'N':
          if (discountValue < 0)
            return false;
          this.totalDiscount = discountValue;
          break;
      }
    }
  }

}
