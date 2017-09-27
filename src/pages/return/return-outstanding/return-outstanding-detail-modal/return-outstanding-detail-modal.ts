import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ReturnOutstandingDetailModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-return-outstanding-detail-modal',
  templateUrl: 'return-outstanding-detail-modal.html',
})
export class ReturnOutstandingDetailModalPage {

  detailRetur;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.detailRetur = {...navParams.data.DetailRetur};
  }

}
