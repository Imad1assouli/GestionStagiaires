import { Component, OnInit } from '@angular/core';
import { Stage } from 'src/app/Model/stage';
import { AdminDrhService } from '../../AdminDRHService/admin-drh.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stages-list',
  templateUrl: './stages-list.component.html',
  styleUrls: ['./stages-list.component.css']
})
export class StagesListDRHComponent implements OnInit {
  stages: Stage[] = [];
  constructor(private adminDrhService:AdminDrhService,private router:Router) {}

  ngOnInit(): void {
    this.getAllStages();
  }
  getAllStages(){
    this.adminDrhService.getAllStages().subscribe(
      (data: Stage[]) => {
        this.stages = data;
      },
      (error) => {
        console.error('Error fetching stages:', error);
      }
    );
  }
}
