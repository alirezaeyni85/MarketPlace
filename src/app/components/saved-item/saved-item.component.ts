import { Component, Input, OnInit } from '@angular/core';
import { SavedItemsService } from '../../core/Services/savedItems.service';
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
  public x =''
  public items:ItemsInter[] = [];
  public dataRoute:string = ''
constructor(private savedItems:SavedItemsService,private activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.items = this.savedItems.savedItems!;
   console.log(this.savedItems.savedItems)
    this.dataRoute = this.activeRoute.snapshot.data[0];


    
}
}
