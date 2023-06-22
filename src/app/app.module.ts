import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { rootEffects, rootReducers } from './store/index';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CustomRescueComponent } from './pages/custom-rescue/custom-rescue.component';

import { InformationCardComponent } from './features/information-card/information-card.component';

import { AppTitleComponent } from './shared/app-title/app-title.component';
import { AppButtonComponent } from './shared/app-button/app-button.component';
import { AppFlatButtonComponent } from './shared/app-button/app-flat-button/app-flat-button.component';

import { SuccessModalComponent } from './components/success-modal/success-modal.component';
import { ErrorModalComponent } from './components/error-modal/error-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CustomRescueComponent,

    InformationCardComponent,

    AppTitleComponent,
    AppButtonComponent,
    AppFlatButtonComponent,

    SuccessModalComponent,
    ErrorModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    StoreModule.forRoot(rootReducers),
    EffectsModule.forRoot(rootEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessModalComponent,
    ErrorModalComponent,
  ]
})
export class AppModule { }
