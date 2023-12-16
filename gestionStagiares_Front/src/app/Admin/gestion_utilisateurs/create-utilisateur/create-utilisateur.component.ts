import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
  user!: User;

  constructor( private router: Router) {}

  ngOnInit(): void {}
  
  onSubmit() {
    console.log(this.user);
    //this.saveEmployee();
  }

/*  saveEmployee() {
    this.userService.createEmployee(this.user).subscribe(
      (data) => {
        console.log(data);
        this.goToEmployeeList();
      },
      (error) => {
        console.log("Error: ", error);
      }
    );
  }
*/
  goToEmployeeList() {
    this.router.navigate(['/listUtlisaeurs']);
  }

  
}

