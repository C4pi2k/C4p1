import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  
  public sidebarShow: boolean = false;
  
  constructor() { 
  }
}
