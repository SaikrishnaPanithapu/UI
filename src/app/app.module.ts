import { BrowserModule  } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {SchoolDetailsService} from './services/school-details.service'
import { HttpClientModule} from '@angular/common/http';
import { SearchItemPipe } from './pipes/search-item.pipe';
import { SearchRegionPipe } from './pipes/search-region.pipe';
import { DepartmentListDirective } from './department-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    SearchItemPipe,
    SearchRegionPipe,
    DepartmentListDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SchoolDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
