import { Component } from '@angular/core';
import { Stage } from 'src/app/Model/stage';
import { StagiaireService } from '../StagiaireService/stagiaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-stages-stagiaire',
  templateUrl: './list-stages-stagiaire.component.html',
  styleUrls: ['./list-stages-stagiaire.component.css']
})
export class ListStagesStagiaireComponent {
  stages: Stage[] = [];

  constructor(private stagiaireService:StagiaireService ,private router:Router) { }

  ngOnInit(): void {
    this.getStagiaires();
  }

  getStagiaires(): void {
    this.stagiaireService.getAllStages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
      },
      (error) => {
        console.error('Error fetching stagiaires:', error);
      }
    );
  }  
  



}
