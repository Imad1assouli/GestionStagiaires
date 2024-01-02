// view-stagiaire.component.ts

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-stagiaire',
  templateUrl: './view-stagiaire.component.html',
  styleUrls: ['./view-stagiaire.component.css']
})
export class ViewStagiaireComponent implements OnInit {
  stagiaire: Stagiaire = new Stagiaire();
  id!: number;

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getStagiaireDetails();
  }

  getStagiaireDetails(): void {
    this.adminService.getStagiaire(this.id).subscribe(
      (data: Stagiaire) => {
        this.stagiaire = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching stagiaire details:', error);
      }
    );
  }

  downloadElement(): void {
    const element = document.getElementById('printable-content') as HTMLElement;

    html2canvas(element, { scrollY: -window.scrollY }).then(canvas => {
      const image = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = image;
      link.download = 'certificate.png';  // Name of the file to be downloaded

      document.body.appendChild(link); // Append link to body
      link.click();
      document.body.removeChild(link); // Remove link after download
    });
  }
}
