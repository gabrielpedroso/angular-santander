import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { rootEffects, rootReducers } from './store/index';

import { AppComponent } from './app.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { CustomRescueComponent } from './components/custom-rescue/custom-rescue.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentListComponent,
    CustomRescueComponent,
    HeaderContentComponent,
    SuccessModalComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(rootEffects),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessModalComponent,
    ErrorModalComponent,
  ]
})
export class AppModule { }
