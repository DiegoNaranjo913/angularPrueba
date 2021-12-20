import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditoRoutingModule } from './credito-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CreditoComponent } from './pages/credito/credito.component';
import { MontoComponent } from './components/monto/monto.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaMontosComponent } from './components/lista-montos/lista-montos.component';


@NgModule({
  declarations: [
    CreditoComponent,
    FormularioComponent,
    MontoComponent,
    ListaMontosComponent
  ],
  imports: [
    CommonModule,
    CreditoRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CreditoModule { }
