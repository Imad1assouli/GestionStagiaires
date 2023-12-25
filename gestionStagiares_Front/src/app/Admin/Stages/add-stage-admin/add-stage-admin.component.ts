import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Stage } from 'src/app/Model/stage';
import { AdminService } from '../../AdminService/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-stage-admin',
  templateUrl: './add-stage-admin.component.html',
  styleUrls: ['./add-stage-admin.component.css']
})
export class AddStageAdminComponent implements OnInit {
  stage: Stage = new Stage();

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.saveStage();
  }

  saveStage() {
    this.adminService.createStage(this.stage).subscribe(
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
    this.router.navigate(['/admin/listStages']);
  }
}


