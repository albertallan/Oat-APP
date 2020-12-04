import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovaNoticiaModalPage } from './nova-noticia-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NovaNoticiaModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovaNoticiaModalPageRoutingModule {}
