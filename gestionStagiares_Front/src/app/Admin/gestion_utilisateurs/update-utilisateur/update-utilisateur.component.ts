// update-utilisateur.component.ts
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AdminService } from '../../AdminService/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {
  user: User = {} as User;
  userId!: number;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.adminService.getUser(this.userId).subscribe((data: User) => this.user = data);
  }

  onSubmit() {
    this.adminService.updateUser(this.userId, this.user).subscribe(
      (data) => {
        console.log(data);
        this.gotoUsersList();
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }

  gotoUsersList() {
    this.router.navigate(['/admin/listUtlisaeurs']);
  }
}
