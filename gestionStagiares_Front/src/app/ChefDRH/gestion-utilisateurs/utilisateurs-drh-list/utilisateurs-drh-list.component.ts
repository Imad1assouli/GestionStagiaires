import { Component } from '@angular/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-utilisateurs-drh-list',
  templateUrl: './utilisateurs-drh-list.component.html',
  styleUrls: ['./utilisateurs-drh-list.component.css']
})
export class UtilisateursDRHListComponent {
  users:User[]=[];

}
