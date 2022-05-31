import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {of} from 'rxjs';
import {Store} from "@ngrx/store";

import * as PeopleActions from '../actions/people.actions';
import {PeopleState} from "../reducers/people.reducer";
import * as PeopleSelectors from "../selectors/people.selectors";
import {PeopleService} from "../../services/people.service";

@Injectable()
export class PeopleEffects {

  constructor(private actions: Actions, private store: Store<PeopleState>, public peopleService: PeopleService) {
  }

  loadPeoples$ = createEffect(() => {
    return this.actions.pipe(
      ofType(PeopleActions.loadPeoples),
      withLatestFrom(this.store.select(PeopleSelectors.selectSearchParams)),
      switchMap(([action, params]) => {
        return  this.peopleService.getPeoplesByParams(params).pipe(
          map(data => PeopleActions.loadPeoplesSuccess({data})),
          catchError(error => of(PeopleActions.loadPeoplesFailure({error}))));
      })
    )
  })
}
