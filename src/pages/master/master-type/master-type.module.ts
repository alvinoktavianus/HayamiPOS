import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterTypePage } from './master-type';

@NgModule({
  declarations: [
    MasterTypePage,
  ],
  imports: [
    IonicPageModule.forChild(MasterTypePage),
  ],
})
export class MasterTypePageModule {}
