import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
// import { DepartmentListDirective } from '../department-list.directive';
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  constructor(private router: Router) { }
  departments = [
    { "id": 1, "name": "Angular" },
    { "id": 2, "name": "Node" },
    { "id": 3, "name": "MongoDB" },
    { "id": 4, "name": "Ruby" },
    { "id": 5, "name": "Bootstrap" }
  ]
  ngOnInit() {

  }
  onClickName(department) {
    this.router.navigate(['/departments',department.id]); //argument to this method is a "link parameters array"
    //this is the information needed by angular to construct the url 
  }

}
