import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/_services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar-button',
  templateUrl: './sidebar-button.component.html',
  styleUrls: ['./sidebar-button.component.scss']
})
export class SidebarButtonComponent implements OnInit {

  constructor(
    public sidebarService: SidebarService,
  ) { }

  ngOnInit(): void {
  }

}
