import { Component } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaires-chef-drh-list',
  templateUrl: './stagiaires-chef-drh-list.component.html',
  styleUrls: ['./stagiaires-chef-drh-list.component.css']
})
export class StagiairesChefDrhListComponent {
  stagiaires: Stagiaire[] = [];

  constructor(private chefDrhService: ChefDrhService,private router:Router) { }

  ngOnInit(): void {
    this.getStagiaires();
  }

  getStagiaires(): void {
    this.chefDrhService.getAllStagiaires().subscribe(
      (data: Stagiaire[]) => {
        this.stagiaires = data;
      },
      (error) => {
        console.error('Error fetching stagiaires:', error);
      }
    );
  }
  markAbsence(id:number){
    this.router.navigate(['/chefDrh/markAbsence',id]);
  }
  updateStagiaire(idStagiaire:number){
    this.router.navigate(['/chefDrh/updatestagiaire',idStagiaire]);
  }
  deleteStagiaire(id: number): void {
    this.chefDrhService.deleteStagiaire(id).subscribe(
      data => {
        console.log(data);
        this.getStagiaires();
      });
  }
  getStagiaireDetails(id:number){
    this.router.navigate(['/chefDrh/ViewStagiaire',id]);
  }

}
