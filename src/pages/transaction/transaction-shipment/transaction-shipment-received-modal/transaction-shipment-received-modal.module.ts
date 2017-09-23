import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionShipmentReceivedModalPage } from './transaction-shipment-received-modal';

@NgModule({
  declarations: [
    TransactionShipmentReceivedModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionShipmentReceivedModalPage),
  ],
})
export class TransactionShipmentReceivedModalPageModule {}
