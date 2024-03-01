import { Component, OnInit } from '@angular/core';
import { Encadrant } from 'src/app/Model/encadrant';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encadrants-list',
  templateUrl: './encadrants-list.component.html',
  styleUrls: ['./encadrants-list.component.css']
})
export class EncadrantsListComponent implements OnInit {
  encadrants: Encadrant[] = [];
  idStage!: number;
  encadreurActuel: Encadrant | undefined;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idStage = this.route.snapshot.params['id'];
    this.getAllEncadrants();
    this.getEncadrantOfStage();
  }

  getAllEncadrants() {
    this.adminService.getAllEncadrants().subscribe(
      (data: Encadrant[]) => {
        this.encadrants = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  affecter(idEncadrant: number) {
    this.adminService.affecterEncadrant(this.idStage, idEncadrant).subscribe(
      (data) => {
        this.goToStageList();
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  goToStageList() {
    this.router.navigate(["admin/listStages"]);
  }
  
  getEncadrantOfStage() {
    this.adminService.getEncadrantOfStage(this.idStage).subscribe(
      (data: Encadrant) => {
        this.encadreurActuel = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
