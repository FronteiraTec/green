import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuPage } from './ru.page';

const routes: Routes = [
  {
    path: '',
    component: RuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuPageRoutingModule {}
