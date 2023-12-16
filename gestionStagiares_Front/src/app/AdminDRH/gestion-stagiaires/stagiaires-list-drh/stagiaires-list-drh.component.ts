import { Component } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-stagiaires-list-drh',
  templateUrl: './stagiaires-list-drh.component.html',
  styleUrls: ['./stagiaires-list-drh.component.css']
})
export class StagiairesListDRHComponent {
  stagiaires: Stagiaire[] = [];

}
