import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {MatDialog} from "@angular/material/dialog";

import {SearchParamsComponent} from "./search-params/search-params.component";
import * as PeopleSelectors from "./store/selectors/people.selectors";
import * as PeopleActions from "./store/actions/people.actions";
import {PeopleState} from "./store/reducers/people.reducer";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  user$ = this.store.select(PeopleSelectors.selectUser)
  displayPeoples$ = this.store.select(PeopleSelectors.selectDisplayPeople);
  $lastSearchPeople = this.store.select(PeopleSelectors.lastSearchPeople);

  data: any;

  constructor(private store: Store<PeopleState>, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.openParamsDialog();
  }

  public openParamsDialog(): void {
    this.dialog.open(SearchParamsComponent);
  }

  public skip(ev: any): void {
    this.store.dispatch(PeopleActions.dislikePeople(ev))
    this.store.dispatch(PeopleActions.nextPeople())
  }

  public like(ev: any): void {
    this.store.dispatch(PeopleActions.likePeople(ev))
    this.store.dispatch(PeopleActions.nextPeople())
  }
}
