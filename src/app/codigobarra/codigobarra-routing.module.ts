import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodigobarraPage } from './codigobarra.page';

const routes: Routes = [
  {
    path: '',
    component: CodigobarraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodigobarraPageRoutingModule {}
