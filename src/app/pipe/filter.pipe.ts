import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus'
})
export class FilterPipe implements PipeTransform {
  
  //  This "tube" allows filtering by state
  transform(value: any, arg: any): any {
    console.log(arg)
    if(arg=== '' || arg==null) return value;
    return value.filter(item=> item.customerStatus===arg)
  }

}
