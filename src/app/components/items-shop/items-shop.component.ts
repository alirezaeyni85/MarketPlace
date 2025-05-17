import { Component, OnInit } from '@angular/core';
import { ServiceItems } from '../../core/Services/Items/items-shop.service';
import { ItemsInter } from '../../core/interfaces/items';
import { CommonModule } from '@angular/common';
import { SavedItemsService } from '../../core/Services/Items/savedItems.service';
import { ProfileDirectoryDirective } from '../../core/directory/profile-directory.directive';

@Component({
  selector: 'app-items-shop',
  imports: [CommonModule , ProfileDirectoryDirective],
  templateUrl: './items-shop.component.html',
  styleUrl: './items-shop.component.css'
})
export class ItemsShopComponent implements OnInit {

 public items:ItemsInter[] = []
  constructor(private itemsService:ServiceItems, private saveItems:SavedItemsService) { }

  ngOnInit(): void {
    this.items = this.itemsService.items;

  }

  onSave(id:number){
this.saveItems.savedItems.push(...this.itemsService.items.filter(item=>item.id == id) );

  }

}
