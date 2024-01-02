import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/Model/stage';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stages-chef-drh-list',
  templateUrl: './stages-chef-drh-list.component.html',
  styleUrls: ['./stages-chef-drh-list.component.css']
})
export class StagesChefDRHListComponent implements OnInit {
  stages: Stage[] = [];
 

  constructor(private chefDRHService:ChefDrhService,private router :Router) {
    
  }
  ngOnInit(): void {
    this.getAllstages();
  }
  
  getAllstages(){
    this.chefDRHService.getAllstages().subscribe(
      (data: Stage[])=>{
        this.stages=data;
      },
      (error)=>{
        console.error('Error fetching stages');
      }
      );

    
  }
  updateStage(id:number){
    this.router.navigate(['/chefDrh/updateStage', id]);
  }
  deleteStage(id: number): void {
    this.chefDRHService.deleteStage(id).subscribe(() => {
      // Reload the list after successful deletion
      this.getAllstages();
    });
  }
  affecterStage(id: number) {
    this.router.navigate(['/chefDrh/affecterStage', id]);
  }


}
