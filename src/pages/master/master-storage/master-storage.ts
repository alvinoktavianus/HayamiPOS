import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AddStoragePage} from "./add-storage/add-storage";

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasterStoragePage');
  }

  addNewStorage() {
    this.navCtrl.push(AddStoragePage);
  }

}
