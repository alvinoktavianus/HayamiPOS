import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
import {REQUEST_HEADERS, TYPES} from "../../../constant/api";
import 'rxjs/add/operator/map';
import {AddTypePage} from "./add-type/add-type";

/**
 * Generated class for the MasterTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-master-type',
  templateUrl: 'master-type.html',
})
export class MasterTypePage {

  types: any = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {

    this.http
      .get(TYPES, {headers: REQUEST_HEADERS()})
      .map(res => res.json())
      .subscribe(
        data => {
          this.types = data;
        }
      );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterTypePage');
  }

  addTypes() {
    this.navCtrl.push(AddTypePage);
  }

}
