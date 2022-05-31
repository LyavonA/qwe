import {NgModule} from '@angular/core';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule, Routes} from "@angular/router";

import {PeopleComponent} from './people.component';
import * as fromPeople from './store/reducers/people.reducer';
import {PeopleEffects} from './store/effects/people.effects';
import {CommonUiModule} from "../../common-ui/common-ui.module";


const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  },
];

@NgModule({
  declarations: [
    PeopleComponent,
  ],
  imports: [
    CommonModule,
    CommonUiModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PeopleEffects])
  ]
})
export class PeopleModule {
}
