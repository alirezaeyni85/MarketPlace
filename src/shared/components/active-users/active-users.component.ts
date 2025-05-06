import { Component, OnInit } from '@angular/core';
import { UsersActive } from '../../../core/Services/users-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-active-users',
  imports: [CommonModule],
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent  implements OnInit{
  public usersActive:any ;
  public usersCreators:any;
  constructor(private usersActiveService:UsersActive) { }

  ngOnInit(): void {
   this.usersActive = this.usersActiveService.acitveUsers;
   this.usersCreators = this.usersActiveService.usersCreators;
  }

}
