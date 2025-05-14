import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../../../core/Services/shopping/shopping-cart.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-bought-cart',
  imports: [NgFor],
  templateUrl: './bought-cart.component.html',
  styleUrl: './bought-cart.component.css'
})
export class BoughtCartComponent  implements OnInit{
  public cart:any| undefined ;

  constructor(private boutCart:ShoppingCartService){}

ngOnInit(): void {
  this.cart = this.boutCart.cartShopping
}
}
