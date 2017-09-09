import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionCompletedPage } from './transaction-completed';

@NgModule({
  declarations: [
    TransactionCompletedPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionCompletedPage),
  ],
})
export class TransactionCompletedPageModule {}
