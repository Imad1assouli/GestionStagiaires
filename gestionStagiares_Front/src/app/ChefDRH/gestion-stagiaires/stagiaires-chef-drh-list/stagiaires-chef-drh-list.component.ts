import { Component } from '@angular/core';
import { Stagiaire } from 'src/app/Model/stagiaire';

@Component({
  selector: 'app-stagiaires-chef-drh-list',
  templateUrl: './stagiaires-chef-drh-list.component.html',
  styleUrls: ['./stagiaires-chef-drh-list.component.css']
})
export class StagiairesChefDrhListComponent {
  stagiaires: Stagiaire[] = [];

}
