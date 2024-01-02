import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Stagiaire } from 'src/app/Model/stagiaire';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import html2canvas from "html2canvas";

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



