import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterStoragePage } from './master-storage';

@NgModule({
  declarations: [
    MasterStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(MasterStoragePage),
  ],
})
export class MasterStoragePageModule {}
