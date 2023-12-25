import { Component } from '@angular/core';
import { Stage } from 'src/app/Model/stage';


@Component({
  selector: 'app-stages-chef-drh-list',
  templateUrl: './stages-chef-drh-list.component.html',
  styleUrls: ['./stages-chef-drh-list.component.css']
})
export class StagesChefDRHListComponent {
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
