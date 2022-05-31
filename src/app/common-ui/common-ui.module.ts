import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PeopleCardComponent} from './people-card/people-card.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSliderModule} from "@angular/material/slider";
import {PeopleInfoComponent} from './people-info/people-info.component';

@NgModule({
  declarations: [
    PeopleCardComponent,
    PeopleInfoComponent
  ],
  exports: [
    PeopleCardComponent,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule,
    PeopleInfoComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CommonUiModule {
}
