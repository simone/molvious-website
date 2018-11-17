import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  rules = false

  constructor() { }

  ngOnInit() {
  }

  open(){
    this.rules = true
  }

  close(){
    this.rules = false
  }
}
