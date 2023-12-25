import { Absence } from "./absence";
import { Stage } from "./stage";

export class Stagiaire {
    stagiaireId!: number;
    nom!: string;
    prenom!: string;
    cin!: string;
    etablissement!: string;
    filiere!: string;
    adresse!: string;
    email!: string;
    telephone!: string;
    dateNaissance!: Date;
    sujetDemande!: string;
    dateDemande!: Date;

    absences!: Absence[]; // Assuming 'absences' is an array of any type, update it based on the actual structure
    stage!: Stage;
}
