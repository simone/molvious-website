import { Component, OnInit } from '@angular/core';
import { SCHEDULE } from '../../Schedule';

@Component({
  selector: 'app-last-match',
  templateUrl: './last-match.component.html',
  styleUrls: ['./last-match.component.css']
})
export class LastMatchComponent implements OnInit {

  last = undefined

  constructor() { }

  ngOnInit() {
    const lasts = SCHEDULE.filter(schedule => schedule.date <= new Date()).sort(
      (s1, s2) => s2.date < s1.date ? -1 : +1
    )
    if (lasts.length > 0){
      this.last = lasts[0]
    }
  }

}
