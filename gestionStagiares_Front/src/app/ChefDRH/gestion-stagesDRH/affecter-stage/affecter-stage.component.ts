import { Component, OnInit } from '@angular/core';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-affecter-stage-ChefDrh',
  templateUrl: './affecter-stage.component.html',
  styleUrls: ['./affecter-stage.component.css']
})
export class AffecterStageComponentChefDRH implements OnInit {
  stagiaires: Stagiaire[] = [];
  idStage!:number;

  constructor(private chefDrhService: ChefDrhService, private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.idStage=this.route.snapshot.params['id'];
    this.getCandidats();
  }
  

  getCandidats(): void {
    this.chefDrhService.getCandidats().subscribe(
      (data: Stagiaire[]) => {
        this.stagiaires = data;
      },
      (error) => {
        console.error('Error fetching stagiaires:', error);
      }
    );
  }
  
  affecterStage(idcandidat: number) {
    console.log('affecterStage called with candidat:', idcandidat);
    this.chefDrhService.affecterStage(this.idStage, idcandidat).subscribe(
      (data) => {
        console.log('Stage affected successfully:', data);
        this.goToStagiairesList();
      
      },
      (error) => {
        console.error('Error ', error);
      
      }
    );
  }
  
  
  goToStagiairesList(){
    this.router.navigate(["chefDrh/listStagiaires"]);
  }
  

}
