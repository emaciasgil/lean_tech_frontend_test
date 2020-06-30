import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShipmentInterface } from 'src/app/interfaces/shipments.interface';
import { Observable } from 'rxjs';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class ShipmentsService {
  //Array to save the shipment
  shipments = [];
  //Formated Data Shipment
  formatedShipments;
  //Load Data
  load = false;


  //Api Json Mock
  readonly ROOT_URL = 'https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(private http: HttpClient) {
    this.getShipments();
    
  }


  //Get Shipments 
  getShipments() {
    this.http.get(this.ROOT_URL).subscribe((data: []) => {
      this.load = true
      //Assign data to variable
      this.shipments = data;
      //Load Method formatIncomingData
      this.formatIncomingData();
    })
  }


  //Function to manipulate service
  formatIncomingData() {
    //Moment Format Create Date
    this.formatedShipments = this.shipments.map((shipment: any) => ({
      ...shipment,
      createdDate: moment(shipment.createdDate, "DD/MM/YYYY").format("DD/MM/YYYY"),

      //Date format
      createDateMenu: moment(shipment.createdDate, "DD/MM/YYYY").format("MMM Do"),      
      //calculate end date
      finalDate: moment(shipment.createdDate, "DD/MM/YYYY").add(shipment.serviceDays, 'days').format("DD/MM/YYYY"),
      // Parse carrier y datos del cliente and Sum
      sumCustomerRate: shipment.customerRate.map(item=>parseFloat(item.charge)).reduce((acc,curr)=>acc + curr,0),
      sumCarrierRate: shipment.carrierRate.map(item=>parseFloat(item.charge)).reduce((acc,curr)=>acc + curr,0),
       invoice: shipment.references.map(item=>parseInt(item.value)),
       progressBarState:shipment.trackingDetails[0].status==="Delivered"? 4:3,
       referenceTransform:shipment.references.map(item=>{
        return { "name":item.name.slice(0,2).toUpperCase(),
         "value":item.value}
       }).sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
       }));


  }

  //Get Charge
  getShipmentsCharge() {
    return this.http.get<ShipmentInterface[]>(this.ROOT_URL)
  }

}
