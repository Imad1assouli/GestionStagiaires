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

  constructor(private adminDrhService: AdminDrhService,router :Router) { }

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

}
