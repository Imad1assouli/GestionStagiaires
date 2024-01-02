import { Component } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaires-list-drh',
  templateUrl: './stagiaires-list-drh.component.html',
  styleUrls: ['./stagiaires-list-drh.component.css']
})
export class StagiairesListDRHComponent {
  stagiaires: Stagiaire[] = [];

  constructor(private adminDrhService: AdminDrhService,private router :Router) { }

  ngOnInit(): void {
    this.getStagiaires();
  }

  getStagiaires(): void {
    this.adminDrhService.getAllStagiaires().subscribe(
      (data: Stagiaire[]) => {
        this.stagiaires = data;
      },
      (error) => {
        console.error('Error fetching stagiaires:', error);
      }
    );
  }

  markAbsence(id:number){
    this.router.navigate(['/adminDrh/markAbsence',id]);
  }


  deleteStagiaire(id: number): void {
    this.adminDrhService.deleteStagiaire(id).subscribe(
      data => {
        console.log(data);
        this.getStagiaires();
      });
  }

  updateStagiaire(stagiaireId:number){
    this.router.navigate(['/adminDrh/updatestagiaire',stagiaireId]);
  }
  getStagiaireDetails(id:number){
    this.router.navigate(['/adminDrh/ViewStagiaire',id]);
  }
}
