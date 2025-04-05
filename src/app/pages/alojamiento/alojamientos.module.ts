import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlojamientoPageRoutingModule } from './alojamientos-routing.module';

import { AlojamientoPage } from './alojamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlojamientoPageRoutingModule
  ],
  declarations: [AlojamientoPage]
})
export class AlojamientoPageModule {}
