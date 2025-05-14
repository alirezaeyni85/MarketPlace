import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }
   public cartShopping:any[] =[
    {id:1, title:'Liquid Wave'},
    {id:2, title:'Liquid Wave'},
    {id:3, title:'Liquid Wave'},
    {id:4, title:'Liquid Wave'},
   ]


}
