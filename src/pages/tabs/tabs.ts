import {Component} from '@angular/core';

import {ProductPage} from '../product/product';
import {CartPage} from '../cart/cart';
import {TransactionPage} from '../transaction/transaction';
import {ReturnPage} from '../return/return';
import {AccountPage} from '../account/account';
import {MasterMenuPage} from "../master-menu/master-menu";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabProductRoot = ProductPage;
  tabCartRoot = CartPage;
  tabTransactionRoot = TransactionPage;
  tabReturnRoot = ReturnPage;
  tabAccountRoot = AccountPage;
  tabMasterMenuRoot = MasterMenuPage;

  constructor() {

  }
}
