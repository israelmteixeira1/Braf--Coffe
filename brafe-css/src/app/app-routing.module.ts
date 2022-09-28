import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrafeCssGridComponent } from './pages/brafe-css-grid/brafe-css-grid.component';
import { BrafeCssPuroComponent } from './pages/brafe-css-puro/brafe-css-puro.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "brafeCssPuro",
    pathMatch: 'full'
  },
  {
    path: "brafeCssPuro" ,
    component: BrafeCssPuroComponent
  },
  {
    path: "brafeCssGrid" ,
    component: BrafeCssGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
