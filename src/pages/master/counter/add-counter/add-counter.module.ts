import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCounterPage } from './add-counter';

@NgModule({
  declarations: [
    AddCounterPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCounterPage),
  ],
})
export class AddCounterPageModule {}
