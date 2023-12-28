import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';

@Component({
  selector: 'app-view-stagiaire-chef-drh',
  templateUrl: './view-stagiaire-chef-drh.component.html',
  styleUrls: ['./view-stagiaire-chef-drh.component.css']
})
export class ViewStagiaireChefDRHComponent  implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  id!: number;

  constructor(private chefDrhService: ChefDrhService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStagiaireDetails();
  }

  getStagiaireDetails(): void {
    this.chefDrhService.getStagiaire(this.id).subscribe(
      (data: Stagiaire) => {
        this.stagiaire = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching stagiaire details:', error);
      }
    );
  }
  

  printCertificate(): void {
    window.print();
  }
}



  