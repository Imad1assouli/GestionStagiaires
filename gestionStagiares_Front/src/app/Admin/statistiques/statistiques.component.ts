// statistiques.component.ts
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../AdminService/admin.service';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.css']
})
export class StatistiquesComponent implements OnInit {
  numberOfChefDrh=100;
  numberOfAdminDrh=100;
  numberOfStages=100;
  numberOfStagiaires=100;
  numberOfEncadrants=100;
 
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getStatistics().subscribe(
      (data: any) => {
        this.numberOfEncadrants = data.numberOfEncadrants;
        this.numberOfStagiaires = data.numberOfStagiaires;
        this.numberOfStages = data.numberOfStages;
        this.numberOfAdminDrh = data.numberOfAdminDrh;
        this.numberOfChefDrh = data.numberOfChefDrh;
      },
      (error) => {
        console.error('Error fetching statistics:', error);
      }
    );
  }
}
