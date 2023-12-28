import { Component } from '@angular/core';
import { AdminDrhService } from '../AdminDRHService/admin-drh.service';

@Component({
  selector: 'app-statistiques-admin-drh',
  templateUrl: './statistiques-admin-drh.component.html',
  styleUrls: ['./statistiques-admin-drh.component.css']
})
export class StatistiquesAdminDRHComponent {
  numberOfChefDrh=100;
  numberOfAdminDrh=100;
  numberOfStages=100;
  numberOfStagiaires=100;
  numberOfEncadrants=100;
 
  constructor(private adminService: AdminDrhService) {}

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