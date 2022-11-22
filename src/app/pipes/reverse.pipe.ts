import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: any): any {
    return value.split('').reverse().join('');
  }
}

/*
transform(value: string): string {
    let reversedValue = '';
    for (let i=value.length - 1; i >= 0; i--) {
      reversedValue += value[i];
    }
    return reversedValue;
  }

transform(value: any): any {
    const parts = value.split("");
    const newparts:string[] = [];
    for (let s of parts) {
      newparts.unshift(s);
    }
    value = newparts.join("");
    return value;
  }
*/
