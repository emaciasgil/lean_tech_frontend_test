import { Component, OnInit, ViewChild, Inject } from '@angular/core';

// Service
import { ShipmentsService } from 'src/app/services/shipment-list/shipments.service';

// Material
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

// Firebase 
import { AngularFireDatabase } from '@angular/fire/database'

// RXJS
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  // Variables 
  companyName = '';
  address = '';
  address2 = '';
  zipCode = '';
  city = '';
  state = '';
  country = '';
  contact = ''
  phone = ''
  fax = '';
  email = '';
  location = '';
  comments = '';
  items: Observable<any[]>
  tags: Observable<any[]>
  addTags: ''
  listTags: any
  shipmentData: any;
  dataTable: any;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  totalCarrier:number;
  totalCustomer:number;
  

  // Comma separated tags
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  shipments = [
    { name: 'Customer' },
    { name: 'Carrier' },
    { name: 'Status' },
  ];

  //Add Tags 
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.shipments.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  //Cleareable tags
  onClearable() {
    this.db.list('tags').push({ tag: this.addTags })
    this.addTags = ''
  }

  // Remove Tags
  remove(shipmentTag): void {
    const index = this.shipments.indexOf(shipmentTag);

    if (index >= 0) {
      this.shipments.splice(index, 1);
    }
  }

  constructor(public shipmentService: ShipmentsService, public dialogRef: MatDialogRef<ViewModalComponent>, public db: AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data: ViewModalComponent) {
    this.items = db.list('items').valueChanges();

  }


  // Close Modal
  public onNoClickClose(): void {
    this.dialogRef.close();
  }

  // Submit firebase form
  public onSubmit() {
    this.db.list('items').push({
      company: this.companyName,
      address: this.address,
      address2: this.address2,
      zipcode: this.zipCode,
      city: this.city,
      state: this.state,
      country: this.country,
      contact: this.contact,
      phone: this.phone,
      fax: this.fax,
      email: this.email,
      location: this.location,
      comments: this.comments
    })

    //Clear Inputs
    this.companyName = '';
    this.address = '';
    this.address2 = '';
    this.zipCode = '';
    this.city = '';
    this.state = '';
    this.country = '';
    this.contact = ''
    this.phone = ''
    this.fax = ''
    this.email = ''
    this.location = ''
    this.comments = ''

  }

  // Table columns
  displayedColumns: any[] = ['position', 'carrier', 'servicetype', 'scac', 'serviceDays', 'carrierRate', 'carrierRateTotal', 'carrierQuote', 'actions'];
  dataSource = new MatTableDataSource(this.shipmentData);

  // Table pagination
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.shipmentData = this.data;
    let datos = new MatTableDataSource<any>(this.shipmentData);
    this.dataTable = [datos.data];


    this.totalCarrier= this.dataTable.reduce((
      acc,
      obj,
    ) => (parseFloat(obj.carrierRate[0].charge) + parseFloat(obj.carrierRate[1].charge)),
    0);


    this.totalCustomer= this.dataTable.reduce((
      acc,
      obj,
    ) => (parseFloat(obj.customerRate[0].charge) + parseFloat(obj.customerRate[1].charge)),
    0);
    
  }
}





