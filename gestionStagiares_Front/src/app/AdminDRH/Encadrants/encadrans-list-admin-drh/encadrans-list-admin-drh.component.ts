import { Component,OnInit } from '@angular/core';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadrant } from 'src/app/Model/encadrant';

@Component({
  selector: 'app-encadrans-list-admin-drh',
  templateUrl: './encadrans-list-admin-drh.component.html',
  styleUrls: ['./encadrans-list-admin-drh.component.css']
})
export class EncadransListAdminDrhComponent implements OnInit {
  encadrants: Encadrant[] = [];
  idStage!: number;
  encadreurActuel: Encadrant | undefined;

  constructor(private adminDrhService: AdminDrhService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idStage = this.route.snapshot.params['id'];
    this.getAllEncadrants();
    this.getEncadrantOfStage();
  }

  getAllEncadrants() {
    this.adminDrhService.getAllEncadrants().subscribe(
      (data: Encadrant[]) => {
        this.encadrants = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  affecter(idEncadrant: number) {
    this.adminDrhService.affecterEncadrant(this.idStage, idEncadrant).subscribe(
      (data) => {
        this.goToStageList();
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  goToStageList() {
    this.router.navigate(["adminDrh/listStages"]);
  }
  
  getEncadrantOfStage() {
    this.adminDrhService.getEncadrantOfStage(this.idStage).subscribe(
      (data: Encadrant) => {
        this.encadreurActuel = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
