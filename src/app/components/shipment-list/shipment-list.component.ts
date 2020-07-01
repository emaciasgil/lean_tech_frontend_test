import { Component, OnInit, Inject, Optional, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import * as moment from 'moment';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { ViewModalComponent } from './view-modal/view-modal.component';
import { ShipmentsService } from 'src/app/services/shipment-list/shipments.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styleUrls: ['./shipment-list.component.scss']
})
export class ShipmentListComponent implements OnInit {
  carrierRate: number;
  //Total Shipments
  shipmentTotal: any = [];
  totalCarrier: number;
  totalCustomer: number;
  customerRate: number;
  carrierRateTotal: number;
  customerRateTotal: number;
  shipments: any = {}
  load: boolean = false;
  fecha: any = {}
  pageActual: number = 1
  filterShipment: string;
  term: string;
  id: string;
  public query: string;
  public form: FormGroup;
  

  customerStatusList=["Extract Error","In Distribution","Ready For Audit","In Transit", "Pending",]

  carrierStatusList=["Ready","Error","Pending"]

  statusList=["In Transit", "Delivered"]

  optionReset=["Clear FIlter"]

  customerStatus:string;
  carrierStatus:string;
  statusFilter:string;

  chargeTotal: any = {}
  
  @Input() control:FormControl;
  readonly ROOT_URL = 'https://square.lean-tech.io/jsonmock/api/orders/'
  constructor(public shipmentService: ShipmentsService, private http: HttpClient, @Optional() public dialog: MatDialog, @Optional() @Inject(MAT_DIALOG_DATA) public data, private _routing: Router) {


  }

  ngOnInit() {
    this.shipmentService.getShipmentsCharge().subscribe(result => {
    
      this.shipmentTotal = result
    })
    console.log(this.shipmentService.formatedShipments)
  }

  ArrayOne(progress) {
    return Array(progress)
  }

  restart(){
    this.shipmentService.getShipmentsCharge().subscribe(result => {
    
      this.shipmentTotal = result
    })
  }

  public resetSearch() {
    this.query = '';
    this.form.patchValue({ search: '' });
    this.restart()
  }


  //Create Mat Dialog for Shipment View
  onCreate(shipment) {
    const dialogRef = this.dialog.open(ViewModalComponent, {
      height: '95%',
      width: '100%',
      data: shipment

    })

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
