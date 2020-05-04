import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CodigobarraPageRoutingModule } from './codigobarra-routing.module';

import { CodigobarraPage } from './codigobarra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CodigobarraPageRoutingModule
  ],
  declarations: [CodigobarraPage]
})
export class CodigobarraPageModule {}
