import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrafeCssPuroComponent } from './pages/brafe-css-puro/brafe-css-puro.component';
import { BrafeCssGridComponent } from './pages/brafe-css-grid/brafe-css-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    BrafeCssPuroComponent,
    BrafeCssGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
