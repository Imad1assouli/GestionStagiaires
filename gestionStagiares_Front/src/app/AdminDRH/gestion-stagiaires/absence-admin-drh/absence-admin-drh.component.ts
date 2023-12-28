import { Component } from '@angular/core';
import { Absence } from 'src/app/Model/absence';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-absence-admin-drh',
  templateUrl: './absence-admin-drh.component.html',
  styleUrls: ['./absence-admin-drh.component.css']
})
export class AbsenceAdminDRHComponent {
  stagiaireId!:number;
  stagiaire!:Stagiaire;
  absence!:Absence;
  dateAbsence!:Date;
  constructor(private adminDrhService: AdminDrhService,private router :Router,private route :ActivatedRoute) {}
  ngOnInit(): void {
    this.stagiaireId=this.route.snapshot.params['id'];
    this.adminDrhService.getStagiaire(this.stagiaireId).subscribe((data:Stagiaire)=>{
      this.stagiaire=data;
      console.log(this.stagiaire);
    });
   
  }
  onSubmit(dateAbsence:Date) {
    
    this.absence= new Absence(dateAbsence, this.stagiaire);
    this.adminDrhService.markAbsence(this.stagiaireId,this.absence).subscribe(
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
    this.router.navigate(['/adminDrh/listStagiaires']);
  }

}
