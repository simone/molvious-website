import { Team, TEAMS } from './Team';
import { SCHEDULE } from './Schedule';

export class Rank {
  constructor(public team : Team,
    public points : number,
    public played : number,
    public wins : number,
    public score : number,
    public against : number,
    public loosers : Team[]){
  }
}


export const RANKINGS = TEAMS.map(
  team => {
    let wins = 0;
    let played = 0;
    let score = 0;
    let against = 0;
    let loosers = [];

    SCHEDULE.forEach(schedule => {
      schedule.matches
        .filter(match => match.score1 > 0 || match.score2 > 0)
        .forEach(match => {

        if (match.team1 == team){
          played++;
          score += match.score1;
          against += match.score2;
          if (match.score1 > match.score2){
            wins++;
            loosers.push(match.team2);
          }
        }

        if (match.team2 == team){
          played++;
          score += match.score2;
          against += match.score1;
          if (match.score2 > match.score1){
            wins++;
            loosers.push(match.team1);
          }
        }
      })
    })

    return new Rank(team, wins * 3, played, wins, score, against, loosers)

  }).sort((r1, r2) => {
    // punteggio
    if (r1.points < r2.points){
      return +1
    }
    if (r1.points > r2.points){
      return -1
    }
    // scontro diretto
    if (r1.loosers.find(team => team === r2.team)) {
      return -1
    }
    if (r2.loosers.find(team => team === r1.team)) {
      return +1
    }
    // differenza canestri diretta
    // non serve in un torneo di sola andata...

    // differenza canestri globale
    return r1.score - r1.against < r2.score - r2.against ? +1 : -1
  })
