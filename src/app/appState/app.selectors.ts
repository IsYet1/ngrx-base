import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppState } from './index';

export const getAppState = createFeatureSelector<AppState>('appState');

export const getFilterText = createSelector(
  getAppState,
  state => state.filterText
);


