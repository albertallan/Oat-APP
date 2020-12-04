import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: IncioPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncioPageRoutingModule {}
