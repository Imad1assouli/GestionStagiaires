import { Component, OnInit } from '@angular/core';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-update-stage',
  templateUrl: './update-stage.component.html',
  styleUrls: ['./update-stage.component.css']
})
export class UpdateStageComponent implements OnInit{
  stage: Stage = new Stage(); 
  id!: number;

  constructor(private adminDrhService: AdminDrhService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.adminDrhService.getStageByID(this.id).subscribe({
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
    this.adminDrhService.updateStage(this.id, this.stage).subscribe(
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
    this.router.navigate(['/adminDrh/listStages']);
  }
}
