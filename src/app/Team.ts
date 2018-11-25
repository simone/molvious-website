export class Team {
  constructor(public name : string, public image : string){}
}

export const MERELLERS = new Team("Merellers", "assets/molvious/logos/merellers.png")
export const PANZAI = new Team("Atletico Panzai", "assets/molvious/logos/panzai.png")
export const MAE = new Team("Mai dire MAE", "assets/molvious/logos/mae.png")
export const BEVERLY = new Team("Beverly INPS", "assets/molvious/logos/beverly.png")
export const CHELTRONES = new Team("Cheltrones", "assets/molvious/logos/cheltrones.png")
export const REAL = new Team("Real Tor Pigna", "assets/molvious/logos/real.png")
export const ESQUILINO = new Team("Esquilino", "assets/molvious/logos/esquilino.jpg")
export const OLD = new Team("Old School", "assets/molvious/logos/oldschool.png")
export const TEAM9 = new Team("Angels", "assets/molvious/logos/angels.png")

export const TEAMS = [
  MERELLERS, PANZAI, MAE,
  BEVERLY, CHELTRONES, REAL,
  ESQUILINO, OLD, TEAM9
]

