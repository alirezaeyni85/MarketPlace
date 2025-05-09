import { Component, OnInit } from '@angular/core';
import { HeadRoutePageComponent } from "../head-route-page/head-route-page.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-user',
  imports: [HeadRoutePageComponent],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.css'
})
export class ProfileUserComponent implements OnInit{
  public dataRoute:string = '';
  constructor(private routeActive:ActivatedRoute){}
  ngOnInit(): void {
   console.log(this.dataRoute = this.routeActive.snapshot.data[0]) 
  }

}
