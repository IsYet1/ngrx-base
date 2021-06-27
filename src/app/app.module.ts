import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms';
// import { moduleOrComponent } from '@mat`';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './appState';
import { AppEffects } from './appState/app.effects';
import { EnterFilterTextComponent } from './enter-filter-text/enter-filter-text.component';
import { ReadFilterTextComponent } from './read-filter-text/read-filter-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EnterFilterTextComponent,
    ReadFilterTextComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ appState: reducer }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
