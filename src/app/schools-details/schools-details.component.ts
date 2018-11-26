import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { SchoolDetailsService } from '../services/school-details.service';

@Component({
  selector: 'app-schools-details',
  templateUrl: './schools-details.component.html',
  styleUrls: ['./schools-details.component.css']
})
export class SchoolsDetailsComponent implements OnInit {
  zoneList: String[] = ['Visakhapatnam', 'Srikakulam', 'Vizayanagaram', 'Godavari Districts', 'Kakinada', 'Rajamandri', 'Vijayawaza', 'Guntur', 'Prakasam', 'Nellore', 'Chitoor', 'Kadapa', 'Ananthapur', 'Hyderabad', 'Telangana', 'Warangal', 'Amalapuram', 'West Godavari']
  totalZones: number;
  totalScools: number;
  breadCrumbValues: String[];
  schoolsColumns: any = ["School Name", "Area", "Principal", "Incharge"]
  schoolsData: any = [];
  rowValue: any;
  //we have to send empty 1st object from backend
  rowsPerPageStart: any = 1;
  rowsPerPageEnd: any = 9;
  paginationListItems: any = [];

  previousClass: any = [];
  pagesClass: any = [];
  nextClass: any = [];
  selectedPageNumber: any = 1;
  constructor(private schoolService: SchoolDetailsService) {}


  @ViewChild('mainRow') el: ElementRef;
  @ViewChild('pageItem') pageItem: ElementRef;
  @ViewChild('previous') previous: ElementRef;
  @ViewChild('next') next: ElementRef;
  @ViewChild('breadCrumb') breadCrumb: ElementRef;

  ngOnInit() {
    this.schoolService.getSchoolsBasedOnLocation().subscribe(data => {
      this.schoolsData = data;
      this.totalScools = this.schoolsData.length;
      this.loadPaginationPages();
      this.totalZones = this.zoneList.length;
      this.previousClass = ['page-item', 'disabled']
      this.pagesClass = ['page-item'];
      this.nextClass = ['page-item'];
      this.breadCrumbValues = [this.zoneList[0]];
    });

  }
  ngAfterViewChecked() {
    //alert("view called")
    if (this.pageItem != undefined) {
      this.pageItem.nativeElement.parentElement.getElementsByClassName('page-item')[this.selectedPageNumber].classList.add('active');
    }

  }
  loadPaginationPages() {
    if (this.totalScools != null || this.totalScools != undefined) {
      let lengthOfPagination = Math.ceil(this.totalScools / this.rowsPerPageEnd);
      let count = 1;
      while (lengthOfPagination > 0) {
        this.paginationListItems.push(count);
        count++;
        lengthOfPagination--;
      }
    }

  }
  clickRow(row) {
    alert(row.srcElement["innerHTML"]);
  }
  mainTableRowClicked(row) {
    //const rowValues = [this.el.nativeElement.children["0"].innerHTML, this.el.nativeElement.children["1"].innerHTML, this.el.nativeElement.children["2"].innerHTML]
    alert(row.currentTarget.cells["0"].innerHTML);
    this.breadCrumbValues.push(row.currentTarget.cells["0"].innerHTML);
    this.breadCrumb.nativeElement.parentElement.getElementsByClassName("breadcrumb-item")[1].classList.remove("active");
  }
  onPagination(value) {

    if (+value.srcElement.innerHTML == 1) {
      this.previous.nativeElement.parentElement.getElementsByClassName("page-item")[0].classList.add("disabled");
    } else {
      this.previous.nativeElement.parentElement.getElementsByClassName("page-item")[0].classList.remove("disabled");
    }
    if (+value.srcElement.innerHTML == +this.paginationListItems.length) {
      this.next.nativeElement.parentElement.getElementsByClassName("page-item")[this.paginationListItems.length + 1].classList.add("disabled");
    } else {
      this.next.nativeElement.parentElement.getElementsByClassName("page-item")[this.paginationListItems.length + 1].classList.remove("disabled");
    }
    this.pageItem.nativeElement.parentElement.getElementsByClassName('page-item')[this.selectedPageNumber].classList.remove('active');
    this.selectedPageNumber = +value.srcElement.innerHTML;
    this.pageItem.nativeElement.parentElement.getElementsByClassName('page-item')[this.selectedPageNumber].classList.add('active');

    this.rowsPerPageEnd = this.selectedPageNumber * 9;
    this.rowsPerPageStart = this.rowsPerPageEnd - 8;
    if (this.rowsPerPageEnd > this.totalScools) {
      this.rowsPerPageEnd = this.totalScools;
    }
  }
  onPaginationPrevious(value) {

    let valueToPagination = {
      srcElement: { innerHTML: this.selectedPageNumber - 1 }
    }
    this.onPagination(valueToPagination);
  }
  onPaginationNext(value) {
    let valueToPagination = {
      srcElement: { innerHTML: this.selectedPageNumber + 1 }
    }
    this.onPagination(valueToPagination);
  }

}
