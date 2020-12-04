import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpiniaoModalPageRoutingModule } from './opiniao-modal-routing.module';

import { OpiniaoModalPage } from './opiniao-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpiniaoModalPageRoutingModule
  ],
  declarations: [OpiniaoModalPage]
})
export class OpiniaoModalPageModule {}
