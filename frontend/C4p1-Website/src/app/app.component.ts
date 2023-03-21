import { Component, ElementRef } from '@angular/core';
import { SidebarService } from './_services/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:click)': 'onClick($event)'
  }
})
export class AppComponent {
  title = 'C4p1-Website';

  constructor(
    private eref: ElementRef,
    private sidebarService: SidebarService
  ) {

  }

  // Method that enables closing the sidebar with a click anywhere, that isnt the sidebar
  onClick(event: Event) {
    if(this.sidebarService.sidebarShow == true) {
      if (!this.eref.nativeElement.contains(event.target)) {
        this.sidebarService.sidebarShow = !this.sidebarService.sidebarShow;
      }
    }
  }

}