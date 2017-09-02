import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {COUNTERS, REQUEST_HEADERS} from "../../../constant/api";
import 'rxjs/add/operator/map';
import {AddCounterPage} from "./add-counter/add-counter";

/**
 * Generated class for the CounterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-counter',
  templateUrl: 'counter.html',
})
export class CounterPage {

  counters: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {

    this.getCountersData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CounterPage');
  }

  addNewCounter() {
    this.navCtrl.push(AddCounterPage);
  }

  doRefresh(refresher) {
    this.getCountersData();
    refresher.complete();
  }

  getCountersData() {
    this.http
      .get(COUNTERS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.counters = data;
        }
      );
  }

}
