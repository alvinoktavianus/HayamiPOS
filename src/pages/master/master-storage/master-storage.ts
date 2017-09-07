import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStoragePage} from "./add-storage/add-storage";
import {Http} from "@angular/http";
import {REQUEST_HEADERS, STORAGES} from "../../../constant/api";

/**
 * Generated class for the MasterStoragePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-storage',
  templateUrl: 'master-storage.html',
})
export class MasterStoragePage {

  storages: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {
    this.fetchAllData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterStoragePage');
  }

  addNewStorage() {
    this.navCtrl.push(AddStoragePage);
  }

  fetchAllData() {
    this.http.get(STORAGES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.storages = data;
        }
      );
  }

  doRefresh(refresher) {
    this.fetchAllData();
    refresher.complete();
  }

}
