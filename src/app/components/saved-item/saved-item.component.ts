import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { SavedItemsService } from '../../core/Services/Items/savedItems.service';
import { CommonModule, NgFor } from '@angular/common';
import { ItemsInter } from '../../core/interfaces/items';
import { HeadRoutePageComponent } from "../head-route-page/head-route-page.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saved-item',
  imports: [CommonModule, HeadRoutePageComponent, ],
  templateUrl: './saved-item.component.html',
  styleUrl: './saved-item.component.css',
  standalone:true,
})
export class SavedItemComponent implements OnInit {
  public items:ItemsInter[] = [];
  public dataRoute:string = ''
constructor(private savedItems:SavedItemsService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.items = this.savedItems.savedItems!;
    this.dataRoute = this.activeRoute.snapshot.data[0];   
}



onDelete(id:number){
 this.items =  this.items.filter(item => item.id !== id)
 console.log(...this.items)

}

}
