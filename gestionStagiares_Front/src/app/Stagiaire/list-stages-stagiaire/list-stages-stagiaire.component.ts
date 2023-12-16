import { Component } from '@angular/core';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-list-stages-stagiaire',
  templateUrl: './list-stages-stagiaire.component.html',
  styleUrls: ['./list-stages-stagiaire.component.css']
})
export class ListStagesStagiaireComponent {
  stages: Stage[] = [];
  stage: Stage = new Stage();

  constructor() {
    // Initialize the default values here
    this.stage.sujet = "nom";
    this.stage.description = "description";
    this.stage.skills = "skills";

    // Add the stage to the stages array
    this.stages.push(this.stage);
  }

}
