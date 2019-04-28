import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRegion'
})
export class SearchRegionPipe implements PipeTransform {

  transform(zoneList: any[], searchRegionText: string): any {
    if (!zoneList) {
      return [];
    }
    if (!searchRegionText) {
      return zoneList;
    }
    return zoneList.filter(
      singleItem => singleItem.toLowerCase().includes(searchRegionText.toLowerCase())
    );
  }

}
