import { Component, OnInit, Input } from '@angular/core';
import {NavService} from '../../services/navservice/nav.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  constructor(public navService: NavService) { }

  ngOnInit() {
  }

}