import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorterList',
  pure: false
})
export class SorterListPipe implements PipeTransform {
  propName = 'name';
  transform(value: any, propName: string, desc: boolean): any {
    if (value.length === 0 || propName === '') {
      return value;
    }
    this.propName = propName;
    value.sort(
      (a: any, b: any) => {
        const descOrder = desc ? -1 : 1;
        if (a[this.propName] > b[this.propName]) {
          return 1 * descOrder;
        }
        return -1 * descOrder;
    });
    return value;
  }

}
