import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';

export const selectPeopleState = createFeatureSelector<fromPeople.PeopleState>(
  fromPeople.peopleFeatureKey
);

export const selectPeoples = createSelector(
  selectPeopleState,
  (state: any) => state.peoples
)

export const selectDisplayPeople = createSelector(
  selectPeopleState,
  (state: any) => state.displayPeople
)

export const selectSearchParams = createSelector(
  selectPeopleState,
  (state: any) => state.searchParams
)

export const lastSearchPeople = createSelector(
  selectPeopleState,
  (state: any) => state.isLast
)

export const selectUser = createSelector(
  selectPeopleState,
  (state: any) => state.user
)
