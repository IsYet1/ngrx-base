import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/index';
import * as appActions from 'src/app/appState/app.actions';
import { of } from 'rxjs';

@Component({
  selector: 'app-enter-filter-text',
  templateUrl: './enter-filter-text.component.html',
  styleUrls: ['./enter-filter-text.component.scss']
})
export class EnterFilterTextComponent implements OnInit {
  filterText = '';

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(appActions.updateFilterText({filterText: 'Set manually in the ngOnInit'}));
  }

  inputChanged = (event: any) => {
    console.log('Input Changed:', event)
    of(event).pipe().subscribe(filterText =>
      this.store.dispatch(appActions.updateFilterText({ filterText }))
    )
  }

}
