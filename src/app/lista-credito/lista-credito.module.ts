import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaCreditoRoutingModule } from './lista-credito-routing.module';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { MaterialModule } from '../material/material.module';
import { TablaComponent } from './components/tabla/tabla.component';


@NgModule({
  declarations: [
    CreditosComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    ListaCreditoRoutingModule,
    MaterialModule
  ]
})
export class ListaCreditoModule { }
