import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AdminService } from '../../AdminService/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utlisateurs-list',
  templateUrl: './utlisateurs-list.component.html',
  styleUrls: ['./utilisateurs-list.component.css']
})
export class UtilisateursListComponent implements OnInit {

  users:User[]=[];
  stagiaire: any;
  constructor(private adminService:AdminService, private router: Router){}


  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers() {
    this.adminService.getAllUsers().subscribe(
      (data: User[]) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(id: number): void {
    this.adminService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.getAllUsers();
      });
  }

  updateUser(userId:number){
    this.router.navigate(['/admin/updateuser',userId]);
  }

}
