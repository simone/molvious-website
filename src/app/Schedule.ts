import { Match } from "./Match";
import { PANZAI, MERELLERS, BEVERLY, CHELTRONES, ESQUILINO, REAL, MAE, OLD, TEAM9, Team } from './Team';
import { PRIMA, SECONDA, TERZA, QUARTA,
  QUINTA, SESTA, SETTIMA, OTTAVA,
  SEMIFINALISTA1, SEMIFINALISTA2,
  SEMIFINALISTA3, SEMIFINALISTA4,
  FINALISTA1, FINALISTA2,
  TERZISTA3, TERZISTA4 } from './Finals'

import { Field } from './Field.enum';
import { findLast } from "@angular/compiler/src/directive_resolver";


export class Schedule {
  constructor(
    public name : string,
    public date : Date,
    public matches : Match[],
    public final : boolean = false){}
}


export const SCHEDULE = [
  new Schedule('Molvious 1° giornata', new Date('11/25/2018'), [
    new Match(REAL, ESQUILINO, Field.A, {hours:14, minutes: 0}, 38, 43),
    new Match(BEVERLY, OLD, Field.A, {hours:16, minutes: 0}, 58, 65),
    new Match(PANZAI, CHELTRONES, Field.B, {hours:16, minutes: 0}, 68, 31),
    new Match(MERELLERS, TEAM9, Field.B, {hours:14, minutes: 0}, 57, 53),
    new Match(MAE)
  ]),
  new Schedule('Molvious 2° giornata', new Date('12/16/2018'), [
    new Match(TEAM9, OLD, Field.A, {hours:14, minutes: 0}, 50, 64),
    new Match(MAE, CHELTRONES, Field.A, {hours:16, minutes: 0}, 39, 52),
    new Match(REAL, PANZAI, Field.B, {hours:16, minutes: 0}, 41, 47),
    new Match(MERELLERS, ESQUILINO, Field.B, {hours:14, minutes: 0}, 45, 39),
    new Match(BEVERLY),
  ]),
  new Schedule('Molvious 3° giornata', new Date('01/13/2019'), [
    new Match(BEVERLY, MERELLERS, Field.A, {hours:14, minutes: 0}, 43, 31),
    new Match(OLD, MAE, Field.A, {hours:16, minutes: 0}, 51, 37),
    new Match(REAL, CHELTRONES, Field.B, {hours:16, minutes: 0}, 55, 57),
    new Match(ESQUILINO, TEAM9, Field.B, {hours:14, minutes: 0}, 59, 41),
    new Match(PANZAI),
  ]),
  new Schedule('Molvious 4° giornata', new Date('01/27/2019'), [
    new Match(MERELLERS, PANZAI, Field.A, {hours:14, minutes: 0}, 36, 46),
    new Match(TEAM9, BEVERLY, Field.A, {hours:16, minutes: 0}, 53, 69),
    new Match(MAE, ESQUILINO, Field.B, {hours:16, minutes: 0}, 59, 54),
    new Match(CHELTRONES, OLD, Field.B, {hours:14, minutes: 0}, 64, 67),
    new Match(REAL),
  ]),
  new Schedule('Molvious 5° giornata', new Date('02/10/2019'), [
    new Match(REAL, OLD, Field.A, {hours:14, minutes: 0}, 52, 57),
    new Match(BEVERLY, MAE, Field.A, {hours:16, minutes: 0}, 63, 41),
    new Match(ESQUILINO, CHELTRONES, Field.B, {hours:14, minutes: 0}, 45, 51),
    new Match(PANZAI, TEAM9, Field.B, {hours:16, minutes: 0}, 57, 71),
    new Match(MERELLERS),
  ]),
  new Schedule('Molvious 6° giornata', new Date('02/24/2019'), [
    new Match(MAE, PANZAI, Field.A, {hours:16, minutes: 0}, 62, 56),
    new Match(CHELTRONES, BEVERLY, Field.A, {hours:14, minutes: 0}, 36, 58),
    new Match(REAL, MERELLERS, Field.B, {hours:14, minutes: 0}, 56, 50),
    new Match(OLD, ESQUILINO, Field.B, {hours:16, minutes: 0}, 71, 49),
    new Match(TEAM9),
  ]),
  new Schedule('Giornata rimandata A FINE TORNEO', new Date('03/10/2019'), [
  ]),
  new Schedule('Molvious 7° giornata', new Date('03/24/2019'), [
    new Match(OLD, MERELLERS, Field.A),
    new Match(BEVERLY, PANZAI, Field.A),
    new Match(REAL, MAE),
    new Match(CHELTRONES, TEAM9),
    new Match(ESQUILINO)
  ]),
  new Schedule('Molvious 8° giornata', new Date('04/07/2019'), [
    new Match(MAE, MERELLERS, Field.A),
    new Match(OLD, PANZAI, Field.A),
    new Match(ESQUILINO, BEVERLY),
    new Match(REAL, TEAM9),
    new Match(CHELTRONES)
  ]),
  new Schedule('Molvious 9° giornata', new Date('04/14/2019'), [
    new Match(REAL, BEVERLY, Field.A),
    new Match(PANZAI, ESQUILINO, Field.A),
    new Match(MERELLERS, CHELTRONES),
    new Match(TEAM9, MAE),
    new Match(OLD),
  ]),
  new Schedule('Molvious Quarti di finale', new Date('05/05/2019'), [
    new Match(PRIMA, OTTAVA, Field.A),
    new Match(SECONDA, SETTIMA, Field.A),
    new Match(TERZA, SESTA),
    new Match(QUARTA, QUINTA),
  ], true),
  new Schedule('Molvious Semifinali', new Date('05/19/2019'), [
    new Match(SEMIFINALISTA1, SEMIFINALISTA4, Field.A),
    new Match(SEMIFINALISTA2, SEMIFINALISTA3, Field.B),
  ], true),
  new Schedule('Molvious Finali', new Date('05/26/2019'), [
    new Match(FINALISTA1, FINALISTA2, Field.A),
    new Match(TERZISTA3, TERZISTA4, Field.B),
  ], true),
]
