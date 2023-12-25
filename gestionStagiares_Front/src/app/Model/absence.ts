// absence.model.ts

import { Stage } from "./stage";
import { Stagiaire } from "./stagiaire";

export class Absence {
  id!: number;
  dateAbsence!: Date;
  stagiaire!: Stagiaire;
  stage!: Stage;

  constructor(dateAbsence: Date, stagiaire: Stagiaire) {
    this.dateAbsence = dateAbsence;
    this.stagiaire = stagiaire;
  }
}
