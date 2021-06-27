import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/index';
import * as appActions from 'src/app/appState/app.actions';

@Component({
  selector: 'app-enter-filter-text',
  templateUrl: './enter-filter-text.component.html',
  styleUrls: ['./enter-filter-text.component.scss']
})
export class EnterFilterTextComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(appActions.updateFilterText({filterText: 'Set manually'}));
  }

}
