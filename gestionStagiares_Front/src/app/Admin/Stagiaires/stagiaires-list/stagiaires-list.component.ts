import { Component } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-stagiaires-list',
  templateUrl: './stagiaires-list.component.html',
  styleUrls: ['./stagiaires-list.component.css']
})
export class StagiairesListComponent {
  stagiaires: Stagiaire[] = [];

}
