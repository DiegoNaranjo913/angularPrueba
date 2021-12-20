import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditosComponent } from './pages/creditos/creditos.component';

const routes: Routes = [

  {
    path: '',
    component: CreditosComponent,
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaCreditoRoutingModule { }
