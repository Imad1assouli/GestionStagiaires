import { Component, OnInit } from '@angular/core';
import { AdminDrhService } from 'src/app/AdminDRH/AdminDRHService/admin-drh.service';
import { ChefDrhService } from '../ChefDRHService/chef-drh.service';

@Component({
  selector: 'app-statistiques-chef-drh',
  templateUrl: './statistiques-chef-drh.component.html',
  styleUrls: ['./statistiques-chef-drh.component.css']
})
export class StatistiquesChefDRHComponent implements OnInit {
  numberOfChefDrh=100;
  numberOfAdminDrh=100;
  numberOfStages=100;
  numberOfStagiaires=100;
  numberOfEncadrants=100;
 
  constructor(private chefDrhService: ChefDrhService) {}

  ngOnInit(): void {
    this.chefDrhService.getStatistics().subscribe(
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

