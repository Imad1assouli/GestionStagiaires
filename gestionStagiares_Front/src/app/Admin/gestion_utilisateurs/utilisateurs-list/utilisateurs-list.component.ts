import { Component } from '@angular/core';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-utlisateurs-list',
  templateUrl: './utlisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent {

  users:User[]=[];
}
