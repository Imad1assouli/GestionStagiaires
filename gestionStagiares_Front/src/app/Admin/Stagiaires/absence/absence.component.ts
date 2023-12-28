import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { Absence } from 'src/app/Model/absence';

@Component({
  selector: 'app-absence',
  templateUrl: './absence.component.html',
  styleUrls: ['./absence.component.css']
})
export class AbsenceComponent implements OnInit{
  stagiaireId!:number;
  stagiaire!:Stagiaire;
  absence!:Absence;
  dateAbsence!:Date;
  constructor(private adminService: AdminService,private router :Router,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.stagiaireId=this.route.snapshot.params['id'];
    this.adminService.getStagiaire(this.stagiaireId).subscribe((data:Stagiaire)=>{
      this.stagiaire=data;
      console.log(this.stagiaire);
    });
   
  }
  onSubmit(dateAbsence:Date) {
    
    this.absence= new Absence(dateAbsence, this.stagiaire);
    this.adminService.markAbsence(this.stagiaireId,this.absence).subscribe(
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
    this.router.navigate(['/admin/listStagiaires']);
  }




}
