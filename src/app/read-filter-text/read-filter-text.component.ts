import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/appState/index';
import * as appSelectors from 'src/app/appState/app.selectors';

@Component({
  selector: 'app-read-filter-text',
  templateUrl: './read-filter-text.component.html',
  styleUrls: ['./read-filter-text.component.scss']
})
export class ReadFilterTextComponent implements OnInit {

  filterText = '';

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.pipe(select(appSelectors.getFilterText)).subscribe(
      filterText => this.filterText = filterText
    )
  }

}
