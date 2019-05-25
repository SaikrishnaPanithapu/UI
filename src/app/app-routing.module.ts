import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SchoolsDetailsComponent } from './schools-details/schools-details.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

//routes is of type Routes from router package
//we define all possible routes for our application
//Each route is an object. It cotains path which is reflected iin the url.
//and the component which it is going to render
const routes: Routes = [
  { path: "", redirectTo: "/about", pathMatch: "full" }, //This property basically
  // tells the router, how to match the url segments with the configured route. prefix -->it's a kind of empty 
  //string prefix to a string value.  full --> redirect only if the full url is empty 
  { path: "about", component: AboutComponent },
  { path: "infrastructure", component: SchoolsDetailsComponent },
  { path: "dash", component: DashBoardComponent },
  { path: "departments", component: DepartmentListComponent },
  { path: "departments/:id", component: DepartmentDetailComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }
  //we have to specify where these components have to be displayed 
  //by using router-outlet directive
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DashBoardComponent, SchoolsDetailsComponent, AboutComponent, PageNotFoundComponent, DepartmentListComponent
  , EmployeeListComponent, DepartmentDetailComponent]
