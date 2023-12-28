import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-affecter-stage',
  templateUrl: './affecter-stage.component.html',
  styleUrls: ['./affecter-stage.component.css']
})
export class AffecterStageComponent implements OnInit {
  stagiaires: Stagiaire[] = [];
  idStage!:number;

  constructor(private adminDrhService: AdminDrhService, private router: Router,private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.idStage=this.route.snapshot.params['id'];
    this.getCandidats();
  }
  

  getCandidats(): void {
    this.adminDrhService.getCandidats().subscribe(
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
    this.adminDrhService.affecterStage(this.idStage, idcandidat).subscribe(
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
    this.router.navigate(["admin/listStagiaires"]);
  }
  

}
