import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionOustandingModalPage } from './transaction-oustanding-modal';

@NgModule({
  declarations: [
    TransactionOustandingModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionOustandingModalPage),
  ],
})
export class TransactionOustandingModalPageModule {}
