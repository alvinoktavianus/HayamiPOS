import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionOutstandingPage } from './transaction-outstanding';

@NgModule({
  declarations: [
    TransactionOutstandingPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionOutstandingPage),
  ],
})
export class TransactionOutstandingPageModule {}
