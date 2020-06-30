import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carrier'
})
export class CarrierPipe implements PipeTransform {

  transform(value: any, arg): unknown {
    console.log(arg)
    if(arg=== '' || arg==null) return value;
    return value.filter(item=> item.customerStatus===arg)
  }

}
