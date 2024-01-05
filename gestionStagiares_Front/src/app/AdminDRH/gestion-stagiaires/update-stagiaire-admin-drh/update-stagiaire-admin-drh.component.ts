import { Component, OnInit } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-stagiaire-admin-drh',
  templateUrl: './update-stagiaire-admin-drh.component.html',
  styleUrls: ['./update-stagiaire-admin-drh.component.css']
})
export class UpdateStagiaireAdminDRHComponent implements OnInit {
  stagiaire:Stagiaire=new Stagiaire();
  stagiaireId!:number;

  constructor(private adminDRHService:AdminDrhService,private router:Router,private route: ActivatedRoute){}

   ngOnInit(): void {
    this.stagiaireId = this.route.snapshot.params['stagiaireId'];
    this.adminDRHService.getStagiaire(this.stagiaireId).subscribe((data: Stagiaire) => this.stagiaire = data);
  }

  onSubmit() {
    this.adminDRHService.updateStagiaire(this.stagiaireId, this.stagiaire).subscribe(
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
    this.router.navigate(['/adminDrh/stagiairesList']);
  }

}
