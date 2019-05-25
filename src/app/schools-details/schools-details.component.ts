import { Component, OnInit, ViewChild } from '@angular/core';
import { ElementRef, Renderer2 } from '@angular/core';
import { SchoolDetailsService } from '../services/school-details.service';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-schools-details',
  templateUrl: './schools-details.component.html',
  styleUrls: ['./schools-details.component.css']
})
@Injectable({
  providedIn: 'root'
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
  rowsPerPageEnd: any = 50;
  paginationListItems: any = [];

  previousClass: any = [];
  pagesClass: any = [];
  nextClass: any = [];
  selectedPageNumber: any = 1;
  searchText: any = "";
  searchRegionText: any = "";
  numberOfItemsPerPage: boolean = false;
  //based on number of entries in this.totalScools we can show or hide anchor tags
  fiftyPerPage: boolean = false;
  hundredPerPage: boolean = false;
  FivehundredPerPage: boolean = false;
  AllEntriesPerPage: boolean = false;
  rowNumber: number = 0;
  searchedZone: any = [];
  exampleData:any;

  constructor(private schoolService: SchoolDetailsService,private http:HttpClient) { }


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

   
    this.http.get("/assets/zoneWiseData.json").subscribe(data=>{
      this.exampleData = data[0];
    });

  }
  showData(){
    alert("got data")
  }
  ngAfterViewChecked() {
    //alert("view called")
    if (this.pageItem != undefined) {
      this.pageItem.nativeElement.parentElement.getElementsByClassName('page-item')[this.selectedPageNumber].classList.add('active');
    }
    // if (this.breadCrumb != undefined) {
    //   this.breadCrumb.nativeElement.parentElement.getElementsByTagName("a")[0].removeAttribute("href"); // remove('href');
    // }

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
    if (this.totalScools >= 1 && this.totalScools <= 100) {
      this.fiftyPerPage = false;
      this.hundredPerPage = true;
      this.FivehundredPerPage = true;
    } else if (this.totalScools >= 100 && this.totalScools <= 500) {
      this.fiftyPerPage = false;
      this.hundredPerPage = false;
      this.FivehundredPerPage = true;
    } else if (this.totalScools >= 500) {
      this.fiftyPerPage = false;
      this.hundredPerPage = false;
      this.FivehundredPerPage = false;
    }

  }
  updateZoneObject(value) {
    if (value == "") {
      
      //this.zoneList = this.searchedZone[0];
      this.searchedZone = [];
      this.zoneList = ['Visakhapatnam', 'Srikakulam', 'Vizayanagaram', 'Godavari Districts', 'Kakinada', 'Rajamandri', 'Vijayawaza', 'Guntur', 'Prakasam', 'Nellore', 'Chitoor', 'Kadapa', 'Ananthapur', 'Hyderabad', 'Telangana', 'Warangal', 'Amalapuram', 'West Godavari'];
      this.rowNumber = 0;
    } else {
      this.rowNumber = NaN;
      if(this.searchedZone.length == 0){
        this.searchedZone.push(this.zoneList.filter(
          singleItem => singleItem.toLowerCase().includes(value.toLowerCase())
        ));
      }else{
        this.searchedZone = [];
        this.searchedZone.push(this.zoneList.filter(
          singleItem => singleItem.toLowerCase().includes(value.toLowerCase())
        ));
      }
      //this.zoneList = this.searchedZone[0];
    }

  }
  clickRow(row) {
    if (this.searchedZone[0] != undefined) {
      
      //this.zoneList = this.searchedZone[0];
      this.rowNumber = +this.searchedZone[0].indexOf(row.srcElement.innerText);
    }else{
      this.rowNumber = +this.zoneList.indexOf(row.srcElement.innerText);
      // this.zoneList = this.zoneList;
    }
    // alert(row.srcElement["innerHTML"]);
  }
  mainTableRowClicked(row) {
    this.breadCrumb.nativeElement.parentElement.getElementsByTagName("a")[0].href = 'javascript:void(0);';
    this.breadCrumbValues.push(row.currentTarget.cells["0"].innerHTML);
    //this.breadCrumb.nativeElement.parentElement.getElementsByTagName("a")[this.breadCrumbValues.length - 1].href = 'javascript:void(0);';
    this.breadCrumb.nativeElement.parentElement.getElementsByTagName("li")[this.breadCrumbValues.length - 1].removeAttribute('href');
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

    this.rowsPerPageEnd = this.selectedPageNumber * 21;
    this.rowsPerPageStart = this.rowsPerPageEnd - 20;
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
  showFifty(value) {
    this.rowsPerPageStart = 1;
    this.rowsPerPageEnd = 50;
  }
  showHundred(value) {
    // this.rowsPerPageStart = 51;
    this.rowsPerPageStart = 1;
    this.rowsPerPageEnd = 100;
  }
  showFiveHundred(value) {
    // this.rowsPerPageStart = 101;
    this.rowsPerPageStart = 1;
    this.rowsPerPageEnd = 500;
  }
  showAll(value) {
    this.rowsPerPageStart = 1;
    this.rowsPerPageEnd = this.totalScools;
  }

}