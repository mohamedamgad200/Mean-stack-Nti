import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'nospace',
})
export class NoSpace implements PipeTransform {
  transform(value: any) {
    return value.replace(/\s+/g, '');
  }
}
