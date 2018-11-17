import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  closed = true;

  constructor() { }

  ngOnInit() {
  }

  menu(){
    this.closed = ! this.closed;
  }

  isClosed(){
    return this.closed;
  }
}
