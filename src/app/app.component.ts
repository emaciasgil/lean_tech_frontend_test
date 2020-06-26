import {Component, ViewChild, ElementRef, ViewEncapsulation, AfterViewInit, OnInit} from '@angular/core';
import {VERSION} from '@angular/material/core';
import {NavItem} from './nav-item';
import {NavService} from './nav.service';
import {NgxSpinnerService} from 'ngx-spinner'

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit   {
  @ViewChild('appDrawer') appDrawer: ElementRef;
  public hide
  version = VERSION;
  navItems: NavItem[] = [
    {
      displayName: 'Dashboard',
      iconName: 'dashboard',
      route: 'dashboard'
    },
    {
      displayName: 'Shipment List',
      iconName: 'assignment',
      route: 'shipment',
    },
    {
      displayName: 'Quotes',
      iconName: 'videocam',
      route: 'quotes',
    },
    {
      displayName: 'Invoice',
      iconName: 'assignment',
      route: 'invoice',
    },
    {
      displayName: 'Settings',
      iconName: 'settings',
      route: 'settings',
    }
  ];

  constructor(private navService: NavService, private spinnerService: NgxSpinnerService) {
  }

  ngOnInit(){
    this.spinner()
  }

  ngAfterViewInit() {
    this.navService.appDrawer = this.appDrawer;
  }

  spinner():void{
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 1000);
  }
}
