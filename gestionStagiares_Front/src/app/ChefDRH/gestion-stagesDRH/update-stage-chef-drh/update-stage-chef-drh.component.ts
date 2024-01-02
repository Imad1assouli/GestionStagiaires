import { Component, OnInit } from '@angular/core';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-update-stage-chef-drh',
  templateUrl: './update-stage-chef-drh.component.html',
  styleUrls: ['./update-stage-chef-drh.component.css']
})
export class UpdateStageChefDRHComponent implements OnInit {
  stage: Stage = new Stage(); 
  id!: number;

  constructor(private chefDrhService: ChefDrhService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.chefDrhService.getStageByID(this.id).subscribe({
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
    this.chefDrhService.updateStage(this.id, this.stage).subscribe(
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
    this.router.navigate(['/chefDrh/listStages']);
  }
}
