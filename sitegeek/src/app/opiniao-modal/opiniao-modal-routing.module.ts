import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpiniaoModalPage } from './opiniao-modal.page';

const routes: Routes = [
  {
    path: '',
    component: OpiniaoModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpiniaoModalPageRoutingModule {}
