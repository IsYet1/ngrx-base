import { createAction, props } from '@ngrx/store';

export const updateFilterText = createAction(
  '[Filter] Update Filter Text',
  props<{ filterText: string;  }>()
);
