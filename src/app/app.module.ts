import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './appState';
import { AgGridModule } from 'ag-grid-angular';

import { AppEffects } from './appState/app.effects';
import { EnterFilterTextComponent } from './enter-filter-text/enter-filter-text.component';
import { ReadFilterTextComponent } from './read-filter-text/read-filter-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFilterTextComponent,
    ReadFilterTextComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatListModule,
    StoreModule.forRoot({ appState: reducer }),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
