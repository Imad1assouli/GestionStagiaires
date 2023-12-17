import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-create-utilisateur-drh',
  templateUrl: './create-utilisateur-drh.component.html',
  styleUrls: ['./create-utilisateur-drh.component.css']
})
export class CreateUtilisateurDRHComponent implements OnInit {
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
