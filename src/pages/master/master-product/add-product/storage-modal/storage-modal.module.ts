import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StorageModalPage } from './storage-modal';

@NgModule({
  declarations: [
    StorageModalPage,
  ],
  imports: [
    IonicPageModule.forChild(StorageModalPage),
  ],
})
export class StorageModalPageModule {}
