import { Component, OnInit } from '@angular/core';
import { HeadRoutePageComponent } from "../head-route-page/head-route-page.component";
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InfoUserService } from '../../core/Services/InfoUsers/info-user.service';
import { NgIf } from '@angular/common';
import { ProfileComponent } from "../profile/mainPageProfile/profile.component";
import { NavLinkComponent } from "./navbarLink/nav-link/nav-link.component";


@Component({
  selector: 'app-profile-user',
  imports: [HeadRoutePageComponent, ReactiveFormsModule, NgIf, RouterModule, NavLinkComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit{

  public dataRoute:string = '';
  public isDone:boolean = false;

  constructor(private routeActive:ActivatedRoute , private infoUser:InfoUserService){}
 
  ngOnInit(): void {
    this.dataRoute = this.routeActive.snapshot.data[0]
    console.log('from profile setting',this.routeActive.snapshot.data[0])
   }
   
    groupInfo  = new FormGroup({
    firstName:new FormControl('', Validators.required),
    email:new FormControl('' ,Validators.required),
    password:new FormControl('', Validators.required),

  })



onSaveInfo(){
  this.infoUser.infoUser ={
    firstName:this.groupInfo.value.firstName,
    email:this.groupInfo.value.email,
    password:this.groupInfo.value.password
  } 
this.infoUser.isLogin =true

}

}
