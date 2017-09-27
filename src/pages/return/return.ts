import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ReturnOutstandingPage} from "./return-outstanding/return-outstanding";
import {ReturnCompletedPage} from "./return-completed/return-completed";

/**
 * Generated class for the ReturnPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return',
  templateUrl: 'return.html',
})
export class ReturnPage {

  tabsReturnOutstanding: any = ReturnOutstandingPage;
  tabsReturnCompleted: any = ReturnCompletedPage;

}
