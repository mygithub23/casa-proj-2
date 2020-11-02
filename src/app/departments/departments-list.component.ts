import { Component, OnInit } from '@angular/core';

import { IDepartment } from './departments';
import { DepartmentsService } from './departments.service';


@Component({
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent implements OnInit {
  pageTitle = 'Department List';
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredDepartments = this.listFilter ? this.performFilter(this.listFilter) : this.departments;
  }

  filteredDepartments: IDepartment[] = [];
  departments: IDepartment[] = [];

  constructor(private departmentsService: DepartmentsService) { }

  ngOnInit(): void {
    this.departmentsService.getDepartments().subscribe({
      next: departments => {
        this.departments = departments;
        this.filteredDepartments = this.performFilter(this.listFilter);
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(filterBy: string): IDepartment[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.departments.filter((department: IDepartment) =>
      department.departmentName.toLocaleLowerCase().indexOf(filterBy) !== -1)
  }


}
