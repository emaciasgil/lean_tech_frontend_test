import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  //  This "tube" allows filtering by state
  transform(value: any, arg: any): any {
    if(arg=== '' || arg.length<1) return value;
    const resultShipments=[]
    for(const shipment of value){
      if(shipment.customerStatus.toLowerCase().indexOf(arg.toLowerCase())>-1 ){
        resultShipments.push(shipment)
      }

    }
    return resultShipments
  }

}
