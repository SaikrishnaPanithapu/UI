import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SchoolDetailsService {

  constructor(private http:HttpClient) { }
  getSchoolsBasedOnLocation(){
    return this.http.get("/assets/tableData.json");
  }
}
