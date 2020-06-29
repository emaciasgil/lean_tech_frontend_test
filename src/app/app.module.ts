import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppComponent } from "./app.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavService } from "./nav.service";
import { TopNavComponent } from "./top-nav/top-nav.component";
import { ShipmentListComponent } from './components/shipment-list/shipment-list.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NofoundpageComponent } from './components/nofoundpage/nofoundpage.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDialogModule} from '@angular/material/dialog';
import { ViewModalComponent } from './components/shipment-list/view-modal/view-modal.component';
// import { FilterPipe } from './pipe/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ShipmentsService } from './services/shipment-list/shipments.service';
import {AngularFireDatabaseModule, AngularFireDatabase} from '@angular/fire/database'
import {environment} from '../enviroments/environment'
import { AngularFireModule } from '@angular/fire';
import { TagService } from './services/tags/tag.service';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatSelectModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxSpinnerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    InfiniteScrollModule,
    MatDialogModule,
    AngularFireDatabaseModule,
    MatChipsModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  declarations: [
    AppComponent,
    MenuListItemComponent,
    TopNavComponent,
    ShipmentListComponent,
    QuotesComponent,
    DashboardComponent,
    InvoiceComponent,
    SettingsComponent,
    NofoundpageComponent,
    ViewModalComponent,
 
   
  ],
  bootstrap: [AppComponent],
  providers: [NavService, ShipmentsService,TagService,AngularFireDatabase],
  entryComponents:[
    ViewModalComponent,
    MatDialogModule
    
  ]
})
export class AppModule {}
