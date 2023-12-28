import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-add-stage-admindrh',
  templateUrl: './add-stage-admindrh.component.html',
  styleUrls: ['./add-stage-admindrh.component.css']
})
export class AddStageAdmindrhComponent implements OnInit{
  stage: Stage = new Stage();

  constructor(private adminDrhService: AdminDrhService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.saveStage();
  }

  saveStage() {
    this.adminDrhService.createStage(this.stage).subscribe(
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
    this.router.navigate(['/adminDrh/listStages']);
  }
}
