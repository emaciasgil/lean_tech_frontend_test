import { Component, OnInit ,ViewChild, Inject} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';
import { ShipmentsService } from 'src/app/services/shipment-list/shipments.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AngularFireDatabase} from '@angular/fire/database'
import { Observable } from 'rxjs';
import {TagService} from '../../../services/tags/tag.service'
import Swal  from 'sweetalert2'
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';


@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  // data = 'Clear me';
  companyName='';
  address='';
  address2='';
  zipCode='';
  city='';
  state='';
  country='';
  contact=''
  phone=''
  fax='';
  email='';
  location='';
  comments='';
  items:Observable<any[]>
  tags:Observable<any[]>
  addTags:''
  listTags:any
  shipmentData:any;
  dataTable:any;


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits= [
    {name: 'Customer'},
    {name: 'Carrier'},
    {name: 'Status'},
  ];
 

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }
  
  constructor(public shipmentService:ShipmentsService,public dialogRef: MatDialogRef<ViewModalComponent>,public db:AngularFireDatabase,
    @Inject(MAT_DIALOG_DATA) public data: ViewModalComponent) {
    this.items=db.list('items').valueChanges();
    
   }



  public onNoClickClose(): void {
    this.dialogRef.close();
  }

  public onSubmit(){
    this.db.list('items').push({
      company:this.companyName,
      address:this.address,
      address2:this.address2,
      zipcode:this.zipCode,
      city:this.city,
      state:this.state,
      country:this.country,
      contact:this.contact,
      phone:this.phone,
      fax:this.fax,
      email:this.email,
      location:this.location,
      comments:this.comments    
    })
    this.companyName='';
    this.address='';
    this.address2='';
    this.zipCode='';
    this.city='';
    this.state='';
    this.country='';
    this.contact=''
    this.phone=''
    this.fax=''
    this.email=''
    this.location=''
    this.comments=''
    
    
  }

  onClearable(){
    this.db.list('tags').push({tag:this.addTags})
    this.addTags=''
  }

  displayedColumns: any[] = ['position', 'carrier', 'servicetype', 'scac', 'serviceDays', 'carrierRate','carrierRateTotal', 'carrierQuote','actions'];
  dataSource = new MatTableDataSource(this.shipmentData);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.shipmentData=this.data;
    let datos=new MatTableDataSource<any>(this.shipmentData);
    
    this.dataTable=[datos.data]

    // this.tagService.getTags()
    // .snapshotChanges()
    // .subscribe(item=>{
    //   this.listTags=[];
    //   item.forEach(element=>{
    //    let x =element.payload.toJSON();
    //    x["$key"]=element.key;
    //    this.listTags.push(x)
    //   })
    // })
    
    
    console.log("que hay",this.shipmentData)
     console.log("data table",this.dataTable)
  }
}

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   serviceDays:number;
//   carrierRate:number;
//   carrierRateTotal?:number;
//   carrierQuote:any;
//   actions:boolean;


// }




