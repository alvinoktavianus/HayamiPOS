import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionShipmentPage } from './transaction-shipment';

@NgModule({
  declarations: [
    TransactionShipmentPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionShipmentPage),
  ],
})
export class TransactionShipmentPageModule {}
