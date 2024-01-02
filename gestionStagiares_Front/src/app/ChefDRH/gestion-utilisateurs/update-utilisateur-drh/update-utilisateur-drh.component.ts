import { Component } from '@angular/core';
import { ChefDrhService } from '../../ChefDRHService/chef-drh.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/user';

@Component({
  selector: 'app-update-utilisateur-drh',
  templateUrl: './update-utilisateur-drh.component.html',
  styleUrls: ['./update-utilisateur-drh.component.css']
})
export class UpdateUtilisateurDRHComponent {
  user: User = {} as User;
  userId!: number;

  constructor(private chefDrhService: ChefDrhService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['userId'];
    this.chefDrhService.getUser(this.userId).subscribe((data: User) => this.user = data);
  }

  onSubmit() {
    this.chefDrhService.updateUser(this.userId, this.user).subscribe(
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
    this.router.navigate(['/chefDrh/listUtlisaeurs']);
  }
}
