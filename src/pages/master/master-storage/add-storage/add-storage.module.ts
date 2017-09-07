import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddStoragePage } from './add-storage';

@NgModule({
  declarations: [
    AddStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(AddStoragePage),
  ],
})
export class AddStoragePageModule {}
