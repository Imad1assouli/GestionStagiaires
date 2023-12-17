import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-add-stage-chef-drh',
  templateUrl: './add-stage-chef-drh.component.html',
  styleUrls: ['./add-stage-chef-drh.component.css']
})
export class AddStageChefDRHComponent implements OnInit{
  stage: Stage = new Stage();
  constructor( private router: Router) {}
  ngOnInit(): void {}
  
  onSubmit() {
    console.log(this.stage);
    //this.saveEmployee();
  }

/*  saveEmployee() {
    this.userService.createEmployee(this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }
*/
  goToStageList() {
    this.router.navigate(['/adminDRH/stagesList']);
  }
}




