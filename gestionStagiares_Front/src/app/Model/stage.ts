// stage.model.ts

import { Absence } from "./absence";
import { Encadrant } from "./encadrant";
import { Stagiaire } from "./stagiaire";



export class Stage {
  stageId!: number;
  sujet!: string;
  description!: string;
  startDate!: Date;
  endDate!: Date;
  division!: string;
  type!: string;
  status!: string;
  encadrant!: Encadrant; // Make sure you have the Encadrant model defined

  // Assuming your backend returns the list of stagiaires and absences, you can include them here
  stagiaires?: Stagiaire[];
  absences?: Absence[];
}

