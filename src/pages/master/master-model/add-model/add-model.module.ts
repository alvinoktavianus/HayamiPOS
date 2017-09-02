import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddModelPage } from './add-model';

@NgModule({
  declarations: [
    AddModelPage,
  ],
  imports: [
    IonicPageModule.forChild(AddModelPage),
  ],
})
export class AddModelPageModule {}
