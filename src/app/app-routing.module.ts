import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent} from './dash-board/dash-board.component';
import { SchoolsDetailsComponent } from './schools-details/schools-details.component';

const routes: Routes = [
  {path:"infrastructure",component:SchoolsDetailsComponent},
  {path:"dash",component:DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[DashBoardComponent,SchoolsDetailsComponent]
