import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Store} from "@ngrx/store";
import {take, tap} from "rxjs";
import {MatDialogRef} from "@angular/material/dialog";

import {PeopleState} from "../store/reducers/people.reducer";
import * as PeopleActions from "../store/actions/people.actions";
import * as PeopleSelectors from "../store/selectors/people.selectors";

@Component({
  selector: 'app-search-params',
  templateUrl: './search-params.component.html',
  styleUrls: ['./search-params.component.scss']
})
export class SearchParamsComponent implements OnInit {

  $searchParams = this.store.select(PeopleSelectors.selectSearchParams)

  reportParams: FormGroup = new FormGroup({});

  constructor(private store: Store<PeopleState>, public dialogRef: MatDialogRef<SearchParamsComponent>) {
  }

  ngOnInit(): void {
    this.initForm();
    this.patchValue();
  }

  public report(): void {
    this.store.dispatch(PeopleActions.setSearchParams({
      params: {
        gender: this.reportParams.controls['gender'].value,
        age: this.reportParams.controls['age'].value,
        distance: this.reportParams.controls['distance'].value,
      }
    }));
    this.store.dispatch(PeopleActions.loadPeoples());
    this.onCancel();
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  private initForm(): void {
    this.reportParams = new FormGroup({
      gender: new FormControl(1),
      age: new FormControl(50),
      distance: new FormControl(150),
    })
  }

  private patchValue(): void {
    this.$searchParams.pipe(
      take(1),
      tap((params => {
        if (params) {
          this.reportParams.patchValue({
            gender: params.gender,
            age: params.age,
            distance: params.distance
          })
        }
      }))
    ).subscribe()
  }
}
