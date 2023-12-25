import { Component } from '@angular/core';
import { Stage } from 'src/app/Model/stage';
import { AdminService } from '../../AdminService/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stages-list',
  templateUrl: './stages-list.component.html',
  styleUrls: ['./stages-list.component.css']
})
export class StagesListComponent {
  stages: Stage[] = [];
 
  constructor(private adminService: AdminService, private router: Router) {
    
    
  }
  ngOnInit() : void {
    this.getStages();

  }
  getStages(): void {
    this.adminService.getAllstages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
      },
      (error) => {
        console.error('Error fetching stages:', error);
      }
    );
  }



}

function ngOnInit() {
  throw new Error('Function not implemented.');
}
