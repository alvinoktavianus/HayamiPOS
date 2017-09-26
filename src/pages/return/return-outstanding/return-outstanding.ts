import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {REQUEST_HEADERS, RETURN} from "../../../constant/api";

/**
 * Generated class for the ReturnOutstandingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-outstanding',
  templateUrl: 'return-outstanding.html',
})
export class ReturnOutstandingPage {

  returnOutstanding;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(RETURN, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.returnOutstanding = [];
          data.forEach(retur => {
            if (retur.ReturStatus === 'O') {
              this.returnOutstanding.push(retur);
            }
          })
        }
      );
  }

  doRefresh(refresher) {
    this.fetchData();
    refresher.complete();
  }

}
