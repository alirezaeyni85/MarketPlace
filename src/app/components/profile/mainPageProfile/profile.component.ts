import { Component, DoCheck, OnInit, Output } from '@angular/core';

import { NgFor } from '@angular/common';
import { UsersActive } from '../../../core/Services/InfoUsers/users-service.service';
import { BoughtCartComponent } from "../bought/bought-cart/bought-cart.component";
import { CollectionsCartComponent } from "../collections/collections-cart/collections-cart.component";
import { ActivatedRoute } from '@angular/router';
import EventEmitter from 'events';


@Component({
  selector: 'app-profile',
  imports: [NgFor, BoughtCartComponent, CollectionsCartComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit , DoCheck {
  public followedUser:any ;
  public routeActive:any ;
  constructor(private userFollowedService:UsersActive, private activatedRoute:ActivatedRoute){}
    @Output('dataProfile') data = new EventEmitter<any>()
ngOnInit(): void {
  this.followedUser =this.userFollowedService.followedUsers

  this.routeActive  = this.activatedRoute.snapshot.data[0]

}
 ngDoCheck(): void {
    //  this.data.emit(this.routeActive)

 }
}
