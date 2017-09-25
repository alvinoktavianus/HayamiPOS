import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductReturnModalPage } from './product-return-modal';

@NgModule({
  declarations: [
    ProductReturnModalPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductReturnModalPage),
  ],
})
export class ProductReturnModalPageModule {}
