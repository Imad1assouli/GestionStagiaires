import { Stage } from "./stage";

export class Stagiaire {
    id!: number;
    nom!: string;
    prenom!: string;
    username!: string;
    stage!: Stage;
    cin!: string;
    etablissement!: string;
    filiere!: string;
    adresse!: string;
    telephone!: string;
    dateNaissance!: Date;     
}
