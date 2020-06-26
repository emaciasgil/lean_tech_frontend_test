import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipmentInterface } from 'src/app/interfaces/shipments.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  shipments:any={};
  load=false;
  readonly ROOT_URL='https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(private http: HttpClient) {
    this.getShipments();
  }

   getShipments(){
      this.http.get(this.ROOT_URL).subscribe((data)=>{
      this.load=true
      this.shipments=data;
      console.log(data);
    })
   }
  
}
