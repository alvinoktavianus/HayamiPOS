import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnOutstandingDetailModalPage } from './return-outstanding-detail-modal';

@NgModule({
  declarations: [
    ReturnOutstandingDetailModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnOutstandingDetailModalPage),
  ],
})
export class ReturnOutstandingDetailModalPageModule {}
