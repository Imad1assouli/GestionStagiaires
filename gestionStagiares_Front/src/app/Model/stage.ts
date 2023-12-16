import { Encadrant } from "./encadrant";
export class Stage {
  id: number = 0;
  sujet: string = "";
  description: string = "";
  skills: string = "";
  encadrant!: Encadrant ;
  dateDebut!: Date;
  dateFin!: Date;
  division: string = "";
  type!: StageType; // Enum for Affecté, Non Affecté
  status!: StageStatus;
  // Additional properties based on your Stage entity

  constructor() {
    // You can initialize default values or handle other logic here
  }
}
  // Enum for StageType
  export enum StageType {
    AFFECTE = 'Affecté',
    NON_AFFECTE = 'Non Affecté',
  }
  
  // Enum for StageStatus
  export enum StageStatus {
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed',
    // Add more status options as needed
  }
  
    // Empty constructor
   
  