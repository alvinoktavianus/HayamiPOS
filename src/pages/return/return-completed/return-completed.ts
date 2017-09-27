import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {REQUEST_HEADERS, RETURN} from "../../../constant/api";
import {Http} from "@angular/http";

/**
 * Generated class for the ReturnCompletedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-completed',
  templateUrl: 'return-completed.html',
})
export class ReturnCompletedPage {

  returnCompleted;

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
          this.returnCompleted = [];
          data.forEach(retur => {
            if (retur.ReturStatus === 'C') {
              this.returnCompleted.push(retur);
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
