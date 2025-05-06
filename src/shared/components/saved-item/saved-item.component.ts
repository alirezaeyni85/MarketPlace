import { Component, OnInit } from '@angular/core';
import { SavedItemsService } from '../../../core/Services/savedItems.service';
import { CommonModule, NgFor } from '@angular/common';
import { ItemsInter } from '../../../core/interfaces/items';

@Component({
  selector: 'app-saved-item',
  imports: [CommonModule],
  templateUrl: './saved-item.component.html',
  styleUrl: './saved-item.component.css',
  standalone:true,
})
export class SavedItemComponent implements OnInit {
  public items:ItemsInter[] = [];
constructor(private savedItems:SavedItemsService){}
  ngOnInit(): void {
    this.items = this.savedItems.savedItems!;
    console.log(this.items)
}
}
