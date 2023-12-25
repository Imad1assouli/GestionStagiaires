// encadrant.model.ts

import { Stage } from "./stage";


export class Encadrant {
  encadrantId!: number;
  nom!: string;
  prenom!: string;
  email!: string;
  telephone!: string;
  encadrantType!: string;

  stagesEncadres?: Stage[];
}

