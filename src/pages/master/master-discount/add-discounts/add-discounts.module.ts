import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDiscountsPage } from './add-discounts';

@NgModule({
  declarations: [
    AddDiscountsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDiscountsPage),
  ],
})
export class AddDiscountsPageModule {}
