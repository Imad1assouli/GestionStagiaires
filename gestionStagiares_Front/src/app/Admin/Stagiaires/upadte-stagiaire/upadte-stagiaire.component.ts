import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-upadte-stagiaire',
  templateUrl: './upadte-stagiaire.component.html',
  styleUrls: ['./upadte-stagiaire.component.css']
})
export class UpadteStagiaireComponent implements OnInit {
  stagiaire:Stagiaire=new Stagiaire();
  stagiaireId!:number;

   constructor(private adminService:AdminService,private router:Router,private route: ActivatedRoute){}
  
  
   ngOnInit(): void {
    this.stagiaireId = this.route.snapshot.params['stagiaireId'];
    this.adminService.getStagiaire(this.stagiaireId).subscribe((data: Stagiaire) => this.stagiaire = data);
  }

  onSubmit(){
    this.adminService.updateStagiaire(this.stagiaireId, this.stagiaire).subscribe(
      (data) => {
        console.log(data);
        this.gotoStagiaireList();
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
  
  gotoStagiaireList(){
    this.router.navigate(['/admin/listStagiaires']);
  }

}


