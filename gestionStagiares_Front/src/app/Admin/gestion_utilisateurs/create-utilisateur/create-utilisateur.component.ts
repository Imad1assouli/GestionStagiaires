import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { AdminService } from '../../AdminService/admin.service';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
  user: User = {
    nom: '', prenom: '', username: '', password: '', userType: '',
    userId: 0
  };

  constructor(private adminService:AdminService, private router: Router) {}

  ngOnInit(): void {}
  
  onSubmit() {
    this.saveUser();
  }

  saveUser() {
    this.adminService.createUser(this.user).subscribe(
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
    this.router.navigate(['/admin/listUtlisaeurs']);
  }
  
}

