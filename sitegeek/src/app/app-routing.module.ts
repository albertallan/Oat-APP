import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'nova-noticia-modal',
    loadChildren: () => import('./nova-noticia-modal/nova-noticia-modal.module').then( m => m.NovaNoticiaModalPageModule)
  },
  {
    path: 'opiniao-modal',
    loadChildren: () => import('./opiniao-modal/opiniao-modal.module').then( m => m.OpiniaoModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
