import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrafeCssPuroComponent } from './pages/brafe-css-puro/brafe-css-puro.component';

const routes: Routes = [
  {
    path: "",
    component: BrafeCssPuroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
