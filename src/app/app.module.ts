import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
