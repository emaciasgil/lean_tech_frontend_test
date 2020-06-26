import { Component, OnInit ,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-modal',
  templateUrl: './view-modal.component.html',
  styleUrls: ['./view-modal.component.scss']
})
export class ViewModalComponent implements OnInit {
  data = 'Clear me';
  constructor(public dialogRef: MatDialogRef<ViewModalComponent>) { }


  public onNoClickClose(): void {
    this.dialogRef.close();
  }

  displayedColumns: any[] = ['position', 'name', 'weight', 'symbol', 'serviceDays', 'carrierRate','carrierRateTotal', 'carrierQuote','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  serviceDays:number;
  carrierRate:number;
  carrierRateTotal?:number;
  carrierQuote:any;
  actions:boolean;
 
 
}



const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', serviceDays:2,
  carrierRate:2,carrierRateTotal:3,carrierQuote:"imagen",actions:false},
 
];


