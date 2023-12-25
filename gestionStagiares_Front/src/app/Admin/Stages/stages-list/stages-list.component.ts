import { Component } from '@angular/core';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-stages-list',
  templateUrl: './stages-list.component.html',
  styleUrls: ['./stages-list.component.css']
})
export class StagesListComponent {
  stages: Stage[] = [];
  stage: Stage = new Stage();

  constructor() {
    // Initialize the default values here
    this.stage.sujet = "nom";
    this.stage.description = "description";
  

    // Add the stage to the stages array
    this.stages.push(this.stage);
  }
}