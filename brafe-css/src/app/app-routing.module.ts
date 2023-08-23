import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrafeCssGridComponent } from './pages/brafe-css-grid/brafe-css-grid.component';
import { BrafeCssPuroComponent } from './pages/brafe-css-puro/brafe-css-puro.component';
import { BrafeCssFlexComponent } from './pages/brafe-css-flex/brafe-css-flex.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BrafeCssPuroComponent,
  },
  {
    path: 'grid',
    component: BrafeCssGridComponent,
  },
  {
    path: 'flex',
    component: BrafeCssFlexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
