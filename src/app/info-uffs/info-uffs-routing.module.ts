import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoUffsPage } from './info-uffs.page';

const routes: Routes = [
  {
    path: '',
    component: InfoUffsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoUffsPageRoutingModule {}
