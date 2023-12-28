import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { StagiaireService } from '../StagiaireService/stagiaire.service';
import { ActivatedRoute, Router } from '@angular/router';

import { Stage } from 'src/app/Model/stage';

@Component({
  selector: 'app-demande-stage',
  templateUrl: './demande-stage.component.html',
  styleUrls: ['./demande-stage.component.css']
})
export class DemandeStageComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  stage!: Stage; // Add this line to initialize 'stage'
  id: number = 0;

  constructor(private stagiaireService: StagiaireService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.getStageById();
  }

  onSubmit() {
      this.demandeStage();
      
  }

  demandeStage() {
      this.stagiaireService.demandeStage(this.id, this.stagiaire).subscribe((data)=>{
        console.log(data);
        this.goToStages();
      },
      (error:any)=>{
        console.log("Error",error);

      });

      }

  getStageById() {
      this.stagiaireService.getStageById(this.id).subscribe((data) => {
          this.stage = data;
      });
  }
  goToStages(){
    this.router.navigate(['/stagiaire/listStagesStagiaire']);
  }
}
