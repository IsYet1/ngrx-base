import { Action, createReducer, on } from '@ngrx/store';

import * as appActions from './app.actions';

export interface AppState {
  filterText: string;
}

export const initialState: AppState = {
  filterText: '',
};

const scoreboardReducer = createReducer(
  initialState,
  on(appActions.updateFilterText, (state, { filterText }) => ({ ...state, filterText  })),
);

export function reducer(state: AppState | undefined, action: Action) {
  return scoreboardReducer(state, action);
}

