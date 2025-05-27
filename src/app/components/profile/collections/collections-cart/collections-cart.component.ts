import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../../core/Services/shopping/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-collections-cart',
  imports: [NgFor],
  templateUrl: './collections-cart.component.html',
  styleUrl: './collections-cart.component.css'
})
export class CollectionsCartComponent implements OnInit {
  public collectionCarts:any =[];
  constructor(private collectionServce:ShoppingCartService, private  routeActive:ActivatedRoute){}
  
ngOnInit(): void {
  this.collectionCarts = this.collectionServce.collections;
  console.log('from Profile Component',this.routeActive.snapshot.data[0]);
}
}
