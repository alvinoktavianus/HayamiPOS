import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterModelPage } from './master-model';

@NgModule({
  declarations: [
    MasterModelPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterModelPage),
  ],
})
export class MasterModelPageModule {}
