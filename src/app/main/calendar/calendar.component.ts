import { Component, OnInit } from '@angular/core';
import { Match } from './../../Match';
import { SCHEDULE } from './../../Schedule';
import { Schedule } from '../../Schedule';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  all: Schedule[];

  constructor() { }

  ngOnInit() {
    this.all = SCHEDULE
  }

}
