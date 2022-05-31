import {createReducer, on} from '@ngrx/store';

import * as PeopleActions from '../actions/people.actions';

export const peopleFeatureKey = 'people';

export interface PeopleState {
  user: any;
  peoples: any[];
  displayPeople: any;
  displayCount: number;
  searchParams: any;
  loading: boolean;
  error: string | null;
  isLast: boolean;
}

export const initialState: PeopleState = {
  user: {
    full_name: {
      firstname: "Ilon",
      lastname: "Mask"
    },
    img_url: "ilon.jpg"
  },
  peoples: [],
  displayPeople: null,
  displayCount: 0,
  searchParams: null,
  loading: false,
  error: null,
  isLast: false
}

export const reducer = createReducer(
  initialState,
  on(PeopleActions.setSearchParams, (state, action) => {
    return {
      ...state, searchParams: action.params
    }
  }),
  on(PeopleActions.loadPeoples, state => state),
  on(PeopleActions.loadPeoplesSuccess, (state, action) => {
    return {
      ...state, isLast: false, displayCount: 0, peoples: action.data, displayPeople: action.data[state.displayCount]
    }
  }),
  on(PeopleActions.loadPeoplesFailure, (state, action) => state),
  on(PeopleActions.nextPeople, (state, action) => {
    let count, last, newState = state;
    if (state.displayCount <= state.peoples.length - 1) {
      count = state.displayCount;
      ++count;
      last = count === state.peoples.length - 1;
      if (last) {
        alert('По выбраным вами параметрам закончились люди, обновите параметры, удачи ')
      }
      newState = {
        ...state, isLast: last, displayCount: count, displayPeople: state.peoples[count]
      }
    }
    return newState;
  }),
);
