import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // to read the link parameter we make use of activatedRoute service
@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  departmentId;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.departmentId = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
  }

}
