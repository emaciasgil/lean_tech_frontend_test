import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status'
})
export class StatusPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    console.log(arg)
    if(arg=== '' || arg==null) return value;
    return value.filter(item=> item.trackingDetails[0].status==arg)
  }


}
