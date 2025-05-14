import { Component, OnInit } from '@angular/core';
import { HeadRoutePageComponent } from "../head-route-page/head-route-page.component";
import { NgFor, NgIf } from '@angular/common';
import { UsersActive } from '../../core/Services/users-service.service';
import { BoughtCartComponent } from "./bought/bought-cart/bought-cart.component";

@Component({
  selector: 'app-profile',
  imports: [NgFor, BoughtCartComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  public followedUser:any ;
  constructor(private userFollowedService:UsersActive){}
ngOnInit(): void {
  this.followedUser =this.userFollowedService.followedUsers

  
}
}
