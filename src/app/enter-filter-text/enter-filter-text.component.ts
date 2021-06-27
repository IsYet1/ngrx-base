import { Component, OnInit } from '@angular/core';
import { of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appState/index';
import * as appActions from 'src/app/appState/app.actions';

@Component({
  selector: 'app-enter-filter-text',
  templateUrl: './enter-filter-text.component.html',
  styleUrls: ['./enter-filter-text.component.scss']
})
export class EnterFilterTextComponent implements OnInit {
  filterText = '';
  inputText$ = new Subject<string>();

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    // this.store.dispatch(appActions.updateFilterText({filterText: 'Set manually in the ngOnInit'}));
  }

  inputChanged = (event: any) => {
    console.log('Input Changed:', event)
    this.inputText$.next(event);
    this.inputText$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      filter((inputText: string) => inputText.length > 3 || inputText.length === 0),
    ).subscribe(filterText =>
      this.store.dispatch(appActions.updateFilterText({ filterText }))
    )
  }

}
