import { Component,OnInit } from '@angular/core';
import { Encadrant } from 'src/app/Model/encadrant';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-encadrants-list-chef-drh',
  templateUrl: './encadrants-list-chef-drh.component.html',
  styleUrls: ['./encadrants-list-chef-drh.component.css']
})
export class EncadrantsListChefDrhComponent implements OnInit {
  encadrants: Encadrant[] = [];
  idStage!: number;
  encadreurActuel: Encadrant | undefined;

  constructor(private chefDrhService: ChefDrhService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idStage = this.route.snapshot.params['id'];
    this.getAllEncadrants();
    this.getEncadrantOfStage();
  }

  getAllEncadrants() {
    this.chefDrhService.getAllEncadrants().subscribe(
      (data: Encadrant[]) => {
        this.encadrants = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  affecter(idEncadrant: number) {
    this.chefDrhService.affecterEncadrant(this.idStage, idEncadrant).subscribe(
      (data) => {
        this.goToStageList();
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }

  goToStageList() {
    this.router.navigate(["chefDrh/listStages"]);
  }
  
  getEncadrantOfStage() {
    this.chefDrhService.getEncadrantOfStage(this.idStage).subscribe(
      (data: Encadrant) => {
        this.encadreurActuel = data;
      },
      (error) => {
        console.error('Error ', error);
      }
    );
  }
}
