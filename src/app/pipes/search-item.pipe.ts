import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchItem'
})
export class SearchItemPipe implements PipeTransform {

  transform(schoolsData: any[], schoolName: string, area: string, searchText: any): any {
    if (!schoolsData) {
      return [];
    }
    if (!schoolName || !searchText || !area) {
      return schoolsData;
    }
    return schoolsData.filter(
      singleItem => singleItem[area].toLowerCase().includes(searchText.toLowerCase())
    );
  }

}
