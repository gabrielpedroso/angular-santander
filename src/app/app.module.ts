import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { appReducer } from './store/app.reducer';
import { AppEffects } from './store/app.effects';

import { AppComponent } from './app.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { CustomRescueComponent } from './components/custom-rescue/custom-rescue.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';


@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    CustomRescueComponent,
    HeaderContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
