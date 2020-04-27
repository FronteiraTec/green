import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoUffsPageRoutingModule } from './info-uffs-routing.module';

import { InfoUffsPage } from './info-uffs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoUffsPageRoutingModule
  ],
  declarations: [InfoUffsPage]
})
export class InfoUffsPageModule {}
