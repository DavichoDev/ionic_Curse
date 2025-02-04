import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoagingPageRoutingModule } from './loaging-routing.module';

import { LoagingPage } from './loaging.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoagingPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LoagingPage]
})
export class LoagingPageModule {}
