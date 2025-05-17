import { Component, OnInit } from '@angular/core';
import { HeadRoutePageComponent } from "../../head-route-page/head-route-page.component";
import { ActiveBidsUsersComponent } from "../activeBidsUsers/active-bids-users/active-bids-users.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bids',
  imports: [HeadRoutePageComponent, ActiveBidsUsersComponent],
  templateUrl: './bids.component.html',
  styleUrl: './bids.component.css'
})
export class BidsComponent  implements OnInit{
  public data:string= '';
  constructor(private activeRoute:ActivatedRoute){}
ngOnInit(): void {
  this.data = this.activeRoute.snapshot.data[0]  
  console.log("from bids Page",this.activeRoute.snapshot.data[0])
}
}
