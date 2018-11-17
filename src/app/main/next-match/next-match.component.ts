import { Component, OnInit } from '@angular/core';
import { SCHEDULE } from '../../Schedule';

@Component({
  selector: 'app-next-match',
  templateUrl: './next-match.component.html',
  styleUrls: ['./next-match.component.css']
})
export class NextMatchComponent implements OnInit {

  next = undefined
  matches = []

  constructor() { }

  ngOnInit() {
    const nexts = SCHEDULE
    .filter(schedule => schedule.date > new Date())
    .sort(
      (s1, s2) => s2.date > s1.date ? -1 : +1
    )
    if (nexts.length > 0){
      this.next = nexts[0]
      this.matches = this.next.matches.filter(match => match.team2 != undefined)
    }
  }

}
