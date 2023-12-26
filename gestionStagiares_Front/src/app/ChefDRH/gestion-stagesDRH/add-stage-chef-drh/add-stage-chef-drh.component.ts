import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from 'src/app/Model/stage';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';

@Component({
  selector: 'app-add-stage-chef-drh',
  templateUrl: './add-stage-chef-drh.component.html',
  styleUrls: ['./add-stage-chef-drh.component.css']
})
export class AddStageChefDRHComponent implements OnInit{
  stage: Stage = new Stage();
  constructor(private chefDrhService :ChefDrhService, private router: Router) {}
  ngOnInit(): void {}
  
  onSubmit() {
    this.saveStage();
  }

  saveStage() {
    this.chefDrhService.createStage(this.stage).subscribe(
      (data) => {
        console.log(data);
        this.goToStageList();
      },
      (error: any) => {
        console.log("Error: ", error);
      }
    );
  }

  goToStageList() {
    this.router.navigate(['/chefDrh/listStages']);
  }
}




