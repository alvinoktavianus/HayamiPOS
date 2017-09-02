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

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
