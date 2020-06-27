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
  shipments:any={}
  load:boolean=false;
  fecha:any={}
  pageActual:number=1
  filterShipment:string;
  term: string;
  id:string;
  readonly ROOT_URL='https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(public shipmentService: ShipmentsService,private http: HttpClient, @Optional()  public dialog:MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data,  private _routing: Router) { 
    
    // this.http.get(this.ROOT_URL).subscribe(data=>{
    //   this.load=true;
    //   this.shipments=data  
    //   this.fecha
    // }
  }
  
  ngOnInit() {
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
