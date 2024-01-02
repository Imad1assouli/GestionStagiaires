import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utilisateurs-drh-list',
  templateUrl: './utilisateurs-drh-list.component.html',
  styleUrls: ['./utilisateurs-drh-list.component.css']
})
export class UtilisateursDRHListComponent implements OnInit{
  users:User[]=[];

  constructor(private chefdrhService:ChefDrhService,private router:Router){}
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.chefdrhService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(id: number): void {
    this.chefdrhService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.getAllUsers();
      });
  }
  
  updateUser(userId:number){
    this.router.navigate(['/chefDrh/updateuser',userId]);
  }


}
