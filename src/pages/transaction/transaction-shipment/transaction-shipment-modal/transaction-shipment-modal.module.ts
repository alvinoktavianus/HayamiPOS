import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionShipmentModalPage } from './transaction-shipment-modal';

@NgModule({
  declarations: [
    TransactionShipmentModalPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionShipmentModalPage),
  ],
})
export class TransactionShipmentModalPageModule {}
