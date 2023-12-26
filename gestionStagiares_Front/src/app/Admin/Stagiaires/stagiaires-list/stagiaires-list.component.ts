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
}
