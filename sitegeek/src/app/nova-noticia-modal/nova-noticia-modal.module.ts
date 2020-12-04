import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovaNoticiaModalPageRoutingModule } from './nova-noticia-modal-routing.module';

import { NovaNoticiaModalPage } from './nova-noticia-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovaNoticiaModalPageRoutingModule
  ],
  declarations: [NovaNoticiaModalPage]
})
export class NovaNoticiaModalPageModule {}
