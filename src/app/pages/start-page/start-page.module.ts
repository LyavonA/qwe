import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {StartPageComponent} from './start-page.component';

const routes: Routes = [
  {
    path: '',
    component: StartPageComponent
  },
];

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StartPageModule { }
