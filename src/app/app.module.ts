

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule } from '@angular/router';

/*
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

*/


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DepartmentData } from './departments/departments-data';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found.component';

/* Feature Modules */
import { DepartmentsModule } from './departments/departments.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DepartmentData, { delay: 1000 }),
    DepartmentsModule,

    //BrowserAnimationsModule,
    AppRoutingModule
  ],

  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



/*
import { UserModule } from './user/user.module';
import { MessageModule } from './messages/message.module'; */
/*
// Department components
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsDetailComponent } from './departments/departments-detail.component';
import { DepartmentsListComponent } from './departments/departments-list.component';

// Teams components
import { TeamsComponent } from './teams/teams.component';
import { TeamsListComponent } from './teams/teams-list.component';
import { TeamsDetailComponent } from './teams/teams-detail.component';

// Projects components
import { ProjectsComponent } from './projects/projects.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { ProjectsDetailComponent } from './projects/projects-detail.component';
*/
