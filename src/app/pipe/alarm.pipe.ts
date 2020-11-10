import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alarm'
})
export class AlarmPipe implements PipeTransform {

  transform(value: any, keyWords: any): any {
    let res: string;
    console.log('value, keyWords', value, keyWords);
    return res;
  }

}
