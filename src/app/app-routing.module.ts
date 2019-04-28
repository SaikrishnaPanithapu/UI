import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent} from './dash-board/dash-board.component';
import { SchoolsDetailsComponent } from './schools-details/schools-details.component';
import {AboutComponent} from './about/about.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"",redirectTo:"/about",pathMatch:"full"},
  {path:"about",component:AboutComponent},
  {path:"infrastructure",component:SchoolsDetailsComponent},
  {path:"dash",component:DashBoardComponent},
  {path:"**",component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashBoardComponent,SchoolsDetailsComponent,AboutComponent,PageNotFoundComponent]
