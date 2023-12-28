// view-stagiaire.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-view-stagiaire',
  templateUrl: './view-stagiaire.component.html',
  styleUrls: ['./view-stagiaire.component.css']
})
export class ViewStagiaireComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  id!: number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStagiaireDetails();
  }

  getStagiaireDetails(): void {
    this.adminService.getStagiaire(this.id).subscribe(
      (data: Stagiaire) => {
        this.stagiaire = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching stagiaire details:', error);
      }
    );
  }
  

  printCertificate(): void {
    window.print();
  }
}
