import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): any {
    const letters = value.split('');
    const result = letters.reverse().join('');
    return result;
  }

}
