import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterProductPage } from './master-product';

@NgModule({
  declarations: [
    MasterProductPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterProductPage),
  ],
})
export class MasterProductPageModule {}
