import { Component, OnInit, Inject, Optional } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as moment from 'moment';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ViewModalComponent } from './view-modal/view-modal.component';
import { ShipmentsService } from 'src/app/services/shipment-list/shipments.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  carrierRate:number;
  shipmentTotal:any=[];
  totalCarrier:number;
  totalCustomer:number;
  customerRate:number;
  carrierRateTotal:number;
  customerRateTotal:number;
  shipments:any={}
  load:boolean=false;
  fecha:any={}
  pageActual:number=1
  filterShipment:string;
  term: string;
  id:string;

  chargeTotal:any={}
  readonly ROOT_URL='https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(public shipmentService: ShipmentsService,private http: HttpClient, @Optional()  public dialog:MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data,  private _routing: Router) { 
 
  this.totalCarrier= this.shipmentTotal.reduce((
    acc,
    obj,
  ) => (parseFloat(obj.carrierRate[0].charge) + parseFloat(obj.carrierRate[1].charge)),
  0);


  this.totalCustomer= this.shipmentTotal.reduce((
    acc,
    obj,
  ) => (parseFloat(obj.customerRate[0].charge) + parseFloat(obj.customerRate[1].charge)),
  0);
  
  

  }
  
  ngOnInit() {
   this.shipmentService.getShipmentsCharge().subscribe(result=>(this.shipmentTotal=result))
  }



  formatDate(date) {
    return moment(date).utc().format('YYYY-MM-DD');
  }

  onCreate(shipment){
    console.log("que llega", shipment)
    const dialogRef = this.dialog.open(ViewModalComponent,{
      height: '95%',
      width:'100%',
      data:shipment 

     },)
    
   dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
}
