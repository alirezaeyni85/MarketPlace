import { Component, OnInit } from '@angular/core';
import { SavedItemsService } from '../../core/Services/Items/savedItems.service';
import { CommonModule, NgFor } from '@angular/common';
import { ItemsInter } from '../../core/interfaces/items';
import { HeadRoutePageComponent } from "../head-route-page/head-route-page.component";
import { ActivatedRoute } from '@angular/router';
import { UsersActive } from'../../core/Services/InfoUsers/users-service.service';




@Component({
  selector: 'app-saved-item',
  imports: [CommonModule, HeadRoutePageComponent],
  templateUrl: './saved-item.component.html',
  styleUrl: './saved-item.component.css',
  standalone:true,
})
export class SavedItemComponent implements OnInit {
  public items:ItemsInter[] = [];
  public dataRoute:string = '';
  public isFollow:boolean = true;



constructor(
  private userFollowedService:UsersActive,
   private savedItems:SavedItemsService,
   private activeRoute:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.items = this.savedItems.savedItems!;
    this.dataRoute = this.activeRoute.snapshot.data[0];  
    console.log('from Product Saved',this.userFollowedService) 
}



onDelete(id:number){
this.items = this.items.filter(item => {
  console.log('items id from saved Products Component',item.id)
 return  item.id !== id
})


}
OnFollow(id:number){
this.isFollow = !this.isFollow
}


pushItem(id:number){

}

}
