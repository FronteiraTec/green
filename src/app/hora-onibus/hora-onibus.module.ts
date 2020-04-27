import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HoraOnibusPageRoutingModule } from './hora-onibus-routing.module';

import { HoraOnibusPage } from './hora-onibus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HoraOnibusPageRoutingModule
  ],
  declarations: [HoraOnibusPage]
})
export class HoraOnibusPageModule {}
