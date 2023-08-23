import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrafeCssPuroComponent } from './pages/brafe-css-puro/brafe-css-puro.component';
import { BrafeCssGridComponent } from './pages/brafe-css-grid/brafe-css-grid.component';
import { BrafeCssFlexComponent } from './pages/brafe-css-flex/brafe-css-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    BrafeCssPuroComponent,
    BrafeCssGridComponent,
    BrafeCssFlexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
