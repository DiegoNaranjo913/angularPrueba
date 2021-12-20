import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'credito',
    loadChildren: () => import('./credito/credito.module').then(m => m.CreditoModule)
  },
  {
    path: 'lista_creditos',
    loadChildren: () => import('./lista-credito/lista-credito.module').then(m => m.ListaCreditoModule)
  },
  {
    path: '**',
    redirectTo: 'credito'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
