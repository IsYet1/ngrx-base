import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from './appState';
import { AppEffects } from './appState/app.effects';
import { EnterFilterTextComponent } from './enter-filter-text/enter-filter-text.component';

@NgModule({
  declarations: [
    AppComponent,
    EnterFilterTextComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ appState: reducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
