import { Injectable } from '@angular/core';
import { ItemsInter, ProductsProfile } from '../../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
   public cartShopping:ProductsProfile[] =[
    {id:1, title:'Liquid Wave'},
    {id:2, title:'Liquid Wave'},
    {id:3, title:'Liquid Wave'},
    {id:4, title:'Liquid Wave'},
   ]

   public collections:ProductsProfile[] = [
    {id:1, title:'Liquid Wave'},
    {id:2, title:'Liquid Wave'},
    {id:3, title:'Liquid Wave'},
    {id:4, title:'Liquid Wave'},
   ]

}
