import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {MODELS, REQUEST_HEADERS} from "../../../constant/api";
import 'rxjs/add/operator/map';
import {AddModelPage} from "./add-model/add-model";

/**
 * Generated class for the MasterModelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-model',
  templateUrl: 'master-model.html',
})
export class MasterModelPage {

  models: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {

    this.fetchAllData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterModelPage');
  }

  addModel() {
    this.navCtrl.push(AddModelPage);
  }

  doRefresh(refresher) {
    this.fetchAllData();
    refresher.complete();
  }

  private fetchAllData() {
    this.http
      .get(MODELS, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
        this.models = data;
      });
  }
}
