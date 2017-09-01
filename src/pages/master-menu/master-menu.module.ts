import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasterMenuPage } from './master-menu';

@NgModule({
  declarations: [
    MasterMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(MasterMenuPage),
  ],
})
export class MasterMenuPageModule {}
