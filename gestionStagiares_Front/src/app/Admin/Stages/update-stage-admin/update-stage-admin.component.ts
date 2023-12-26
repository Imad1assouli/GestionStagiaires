import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/Model/stage';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-stage-admin',
  templateUrl: './update-stage-admin.component.html',
  styleUrls: ['./update-stage-admin.component.css']
})
export class UpdateStageAdminComponent implements OnInit {
  stage: Stage = new Stage(); 
  id!: number;

  constructor(private adminService: AdminService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminService.getStageByID(this.id).subscribe({
      next: (data: Stage) => {
        console.log(data);
        this.stage = data;
      },
      error: (error) => console.log(error)
    });
  }

  onSubmit() {
    console.log(this.stage);
    this.updateStage();
  }

  updateStage() {
    this.adminService.updateStage(this.id, this.stage).subscribe(
      (data) => {
        console.log(data);
        this.goToStagesList();
      },
      (error: any) => {
        console.log('Error', error);
      }
    );
  }

  goToStagesList() {
    this.router.navigate(['/admin/listStages']);
  }
}
