import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/appState/index';
import * as appSelectors from 'src/app/appState/app.selectors';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

columnDefs = [
  { field: 'make' },
  { field: 'model' },
  { field: 'price'}
];

filterText = '';

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

private gridApi: any;
// doesExternalFilterPass: boolean = false;
// isExternalFilterPresent: boolean = false;

constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
    // this.gridColumnApi = params.columnApi;

    this.store.pipe(select(appSelectors.getFilterText)).subscribe(
      filterText => {
        this.filterText = filterText;
        this.gridApi.onFilterChanged();
      }
    )

  }

  isExternalFilterPresent = (): boolean =>
    this.filterText.length > 0

  doesExternalFilterPass = (node: any): boolean =>
    (node.data['make'] as string).includes(this.filterText)

}
