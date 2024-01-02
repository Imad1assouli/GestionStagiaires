import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';

@Component({
  selector: 'app-create-utilisateur-drh',
  templateUrl: './create-utilisateur-drh.component.html',
  styleUrls: ['./create-utilisateur-drh.component.css']
})
export class CreateUtilisateurDRHComponent implements OnInit {

  user: User = {
    nom: '', prenom: '', username: '', password: '', userType: '',
    userId: 0
  };

  constructor(private chefDrhService:ChefDrhService, private router: Router) {}
  ngOnInit(): void {}
  
  onSubmit() {
    this.saveUser();
  }

  saveUser() {
    this.chefDrhService.createUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToUsersList();
      },
      (error: any) => {
        console.log("Error: ", error);
      }
    );
  }

  goToUsersList() {
    this.router.navigate(['/chefDrh/listUtlisaeurs']);
  }
  
  
}
