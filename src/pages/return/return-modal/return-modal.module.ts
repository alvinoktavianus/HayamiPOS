import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReturnModalPage } from './return-modal';

@NgModule({
  declarations: [
    ReturnModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ReturnModalPage),
  ],
})
export class ReturnModalPageModule {}
