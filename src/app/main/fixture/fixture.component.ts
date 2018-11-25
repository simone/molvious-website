import { Match } from './../../Match';
import { SCHEDULE } from './../../Schedule';
import { Component, OnInit } from '@angular/core';

class Fixture {
  constructor(
    public name : string,
    public date : Date,
    public match : Match){}

    played(){
      return this.match.score1 > 0 || this.match.score2 > 0
    }

    winByHome(){
      return this.match.score1 > this.match.score2
    }
    winByGuest(){
      return this.match.score1 < this.match.score2
    }

}

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {

  all : Fixture[] = []
  fixtures : Fixture[] = []
  idx : number;

  constructor() { }

  ngOnInit() {
    this.all = [].concat(...SCHEDULE.map(schedule => {
      return schedule.matches.filter(match => match.team2 != undefined).map(match => new Fixture(schedule.name, schedule.date, match))
    }))

    this.idx = this.all.findIndex(fixture => fixture.date > new Date())
    this.fixtures = this.all.slice(this.idx, this.idx+3)
  }

  prev(){
    this.idx = Math.max(0, this.idx - 1)
    this.fixtures = this.all.slice(this.idx, this.idx+3)
  }

  next(){
    this.idx = Math.min(this.all.length - 1, this.idx+1)
    this.fixtures = this.all.slice(this.idx, this.idx+3)
  }


}
