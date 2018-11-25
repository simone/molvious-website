import { Team, PANZAI, MERELLERS, REAL, ESQUILINO, CHELTRONES, BEVERLY, OLD, MAE } from "./Team";
import { Field } from "./Field.enum";
import { Time } from "@angular/common";

export class Match {
  constructor(
    public team1 : Team,
    public team2 : Team = undefined,
    public field : Field = Field.B,
    public time? : Time,
    public score1 = 0,
    public score2 = 0){}

    played(){
      return this.score1 > 0 || this.score2 > 0
    }

    winByHome(){
      return this.score1 > this.score2
    }
    winByGuest(){
      return this.score1 < this.score2
    }

}
