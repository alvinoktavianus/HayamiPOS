import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

// Import all of the page here
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from '../pages/login/login';
import {ProductPage} from '../pages/product/product'
import {CartPage} from '../pages/cart/cart';
import {TransactionPage} from '../pages/transaction/transaction';
import {ReturnPage} from '../pages/return/return';
import {AccountPage} from '../pages/account/account';
import {MasterPage} from '../pages/master/master';
import {CounterPage} from "../pages/master/counter/counter";
import {CustomerPage} from "../pages/master/customer/customer";
import {MasterProductPage} from "../pages/master/master-product/master-product";
import {MasterTypePage} from "../pages/master/master-type/master-type";
import {MasterModelPage} from "../pages/master/master-model/master-model";
import {MasterDiscountPage} from "../pages/master/master-discount/master-discount";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AddCustomerPage} from "../pages/master/customer/add-customer/add-customer";
import {AddCounterPage} from "../pages/master/counter/add-counter/add-counter";
import {AddModelPage} from "../pages/master/master-model/add-model/add-model";
import {AddTypePage} from "../pages/master/master-type/add-type/add-type";
import {AddDiscountsPage} from "../pages/master/master-discount/add-discounts/add-discounts";
import {AddProductPage} from "../pages/master/master-product/add-product/add-product";
import {StorageModalPage} from "../pages/master/master-product/add-product/storage-modal/storage-modal";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    ProductPage,
    CartPage,
    TransactionPage,
    ReturnPage,
    AccountPage,
    MasterPage,
    CounterPage,
    CustomerPage,
    MasterProductPage,
    MasterTypePage,
    MasterModelPage,
    MasterDiscountPage,
    AddCustomerPage,
    AddCounterPage,
    AddModelPage,
    AddTypePage,
    AddDiscountsPage,
    AddProductPage,
    StorageModalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ProductPage,
    CartPage,
    TransactionPage,
    ReturnPage,
    AccountPage,
    MasterPage,
    CounterPage,
    CustomerPage,
    MasterProductPage,
    MasterTypePage,
    MasterModelPage,
    MasterDiscountPage,
    AddCustomerPage,
    AddCounterPage,
    AddModelPage,
    AddTypePage,
    AddDiscountsPage,
    AddProductPage,
    StorageModalPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
