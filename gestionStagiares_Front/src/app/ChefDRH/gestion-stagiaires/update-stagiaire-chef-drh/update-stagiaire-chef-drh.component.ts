import { Component, OnInit } from '@angular/core';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-update-stagiaire-chef-drh',
  templateUrl: './update-stagiaire-chef-drh.component.html',
  styleUrls: ['./update-stagiaire-chef-drh.component.css']
})
export class UpdateStagiaireChefDRHComponent implements OnInit {
  stagiaire:Stagiaire=new Stagiaire();
  stagiaireId!:number;

   constructor(private chefDRHService:ChefDrhService,private router:Router,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.stagiaireId = this.route.snapshot.params['stagiaireId'];
    this.chefDRHService.getStagiaire(this.stagiaireId).subscribe((data: Stagiaire) => this.stagiaire = data);
  }

  onSubmit(){
    this.chefDRHService.updateStagiaire(this.stagiaireId, this.stagiaire).subscribe(
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
    this.router.navigate(['/chefDrh/listStagiaires']);
  }

}
