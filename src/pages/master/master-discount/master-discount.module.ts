import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterDiscountPage } from './master-discount';

@NgModule({
  declarations: [
    MasterDiscountPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterDiscountPage),
  ],
})
export class MasterDiscountPageModule {}
