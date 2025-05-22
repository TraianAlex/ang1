import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'sort',
    pure: false,
    standalone: false
})
export class SortPipe implements PipeTransform {
  transform(value: any, propName: string): any {
    return value.sort((a: any, b: any) => {
      if (a[propName] > b[propName]) {
        return 1;
      } else {
        return -1;
      }
    });
  }
}

/*
transform(value: any, sortString: string, asc: boolean): any {
    if (asc) {
      return value.sort((a, b) => (a[sortString] < b[sortString]) ? -1 : 1);
    }
    return value.sort((a, b) => (a[sortString] < b[sortString]) ? 1 : -1);
  }

  *ngFor="let server of servers | filter:filteredStatus:'status' | sort:'name':true"
*/
