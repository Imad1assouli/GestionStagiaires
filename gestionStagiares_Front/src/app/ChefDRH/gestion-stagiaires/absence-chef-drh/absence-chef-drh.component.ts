import { Component, OnInit } from '@angular/core';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { Absence } from 'src/app/Model/absence';

@Component({
  selector: 'app-absence-chef-drh',
  templateUrl: './absence-chef-drh.component.html',
  styleUrls: ['./absence-chef-drh.component.css']
})
export class AbsenceChefDRHComponent implements OnInit{
  stagiaireId!:number;
  stagiaire!:Stagiaire;
  absence!:Absence;
  dateAbsence!:Date;
  constructor(private chefDrhService: ChefDrhService,private router :Router,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.stagiaireId=this.route.snapshot.params['id'];
    this.chefDrhService.getStagiaire(this.stagiaireId).subscribe((data:Stagiaire)=>{
      this.stagiaire=data;
      console.log(this.stagiaire);
    });
   
  }
  onSubmit(dateAbsence:Date) {
    
    this.absence= new Absence(dateAbsence, this.stagiaire);
    this.chefDrhService.markAbsence(this.stagiaireId,this.absence).subscribe(
      () => {
        console.log('Absence marked successfully!');
        this.gotoStagiaireList()
      
      },
      (error) => {
        console.error('Failed to mark absence:', error);
      }
    );
  }
 
  gotoStagiaireList(){
    this.router.navigate(['/chefDrh/listStagiaires']);
  }
}

