import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';

@Component({
  selector: 'app-view-stagiaire-admin-drh',
  templateUrl: './view-stagiaire-admin-drh.component.html',
  styleUrls: ['./view-stagiaire-admin-drh.component.css']
})
export class ViewStagiaireAdminDrhComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  id!: number;

  constructor(private adminDrhService: AdminDrhService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStagiaireDetails();
  }

  getStagiaireDetails(): void {
    this.adminDrhService.getStagiaire(this.id).subscribe(
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



  