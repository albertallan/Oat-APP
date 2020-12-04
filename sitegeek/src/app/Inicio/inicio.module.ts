import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncioPage } from './inicio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { IncioPageRoutingModule } from './inicio-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IncioPageRoutingModule
  ],
  declarations: [IncioPage]
})
export class InicioPageModule {}
