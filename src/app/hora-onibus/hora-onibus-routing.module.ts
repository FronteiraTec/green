import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoraOnibusPage } from './hora-onibus.page';

const routes: Routes = [
  {
    path: '',
    component: HoraOnibusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoraOnibusPageRoutingModule {}
