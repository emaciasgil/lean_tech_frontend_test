import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ShipmentListComponent } from './components/shipment-list/shipment-list.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  {path:'', component:ShipmentListComponent},
  {path:'shipment', component: ShipmentListComponent,  pathMatch: 'full'},
  
  // Routes not needed at the moment
  // {path:'dashboard', component: DashboardComponent},
  // {path:'quotes', component: QuotesComponent},
  // {path:'invoice', component: InvoiceComponent},
  // {path:'settings', component: SettingsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
