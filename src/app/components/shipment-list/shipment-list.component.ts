import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import * as moment from 'moment';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog'
import { ViewModalComponent } from './view-modal/view-modal.component';
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
  readonly ROOT_URL='https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(private http: HttpClient, private dialog:MatDialog) { 
    
    this.http.get(this.ROOT_URL).subscribe(data=>{
      this.load=true;
      this.shipments=data  
      this.fecha
    })
  }
  
  ngOnInit() {
  }

  formatDate(date) {
    return moment(date).utc().format('YYYY-MM-DD');
  }

  onCreate(){
    const dialogRef = this.dialog.open(ViewModalComponent,{
      height: '95%',
     })
   dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
  }
}
