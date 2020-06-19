import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

import { CalendarioPage } from './calendario.page';
import { CalendarModule  } from 'ion2-calendar';
import {  LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localept from '@angular/common/locales/pt'



registerLocaleData(localept, 'pt');

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    CalendarModule,
    
    
  ],
  declarations: [CalendarioPage],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }]
  // providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }]
})
export class CalendarioPageModule {}
