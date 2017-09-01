import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {ProductPage} from '../product/product';
import {CartPage} from '../cart/cart';
import {TransactionPage} from '../transaction/transaction';
import {ReturnPage} from '../return/return';
import {AccountPage} from '../account/account';
import {MasterPage} from '../master/master';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabProductRoot = ProductPage;
  tabCartRoot = CartPage;
  tabTransactionRoot = TransactionPage;
  tabReturnRoot = ReturnPage;
  tabMasterRoot = MasterPage;
  tabAccountRoot = AccountPage;
  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
