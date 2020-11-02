import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { DepartmentsDetailComponent } from './departments-detail.component';
import { DepartmentsListComponent } from './departments-list.component';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: 'departments', component: DepartmentsListComponent },
      { path: 'departments/:id', component: DepartmentsDetailComponent}
    ])

  ],
  declarations: [
    DepartmentsListComponent,
    DepartmentsDetailComponent

  ]
})
export class DepartmentsModule { }
