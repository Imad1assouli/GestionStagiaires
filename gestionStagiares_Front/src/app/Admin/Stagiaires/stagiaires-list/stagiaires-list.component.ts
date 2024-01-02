import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminService } from '../../AdminService/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stagiaires-list',
  templateUrl: './stagiaires-list.component.html',
  styleUrls: ['./stagiaires-list.component.css']
})
export class StagiairesListComponent implements OnInit {
  stagiaires: Stagiaire[] = [];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getStagiaires();
  }

  getStagiaires(): void {
    this.adminService.getAllStagiaires().subscribe(
      (data: Stagiaire[]) => {
        this.stagiaires = data;
      },
      (error) => {
        console.error('Error fetching stagiaires:', error);
      }
    );
  }

  markAbsence(id:number){
    this.router.navigate(['/admin/markAbsence',id]);
  }


  deleteStagiaire(id: number): void {
    this.adminService.deleteStagiaire(id).subscribe(
      data => {
        console.log(data);
        this.getStagiaires();
      });
  }

  updateStagiaire(stagiaireId:number){
    this.router.navigate(['/admin/updatestagiaire',stagiaireId]);
  }
  getStagiaireDetails(id:number){
    this.router.navigate(['/admin/ViewStagiaire',id]);
  }

}
