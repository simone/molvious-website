import { Component, OnInit } from '@angular/core';
import { RANKINGS } from '../../Rank';

class Team {
  constructor(public name : string, public wins : number, public points : number){}
}


@Component({
  selector: 'app-team-ranking',
  templateUrl: './team-ranking.component.html',
  styleUrls: ['./team-ranking.component.css']
})
export class TeamRankingComponent implements OnInit {

  rankings = RANKINGS

  constructor() { }

  ngOnInit() {
  }

}
