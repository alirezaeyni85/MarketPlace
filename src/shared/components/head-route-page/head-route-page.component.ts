import { Component, ElementRef, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-head-route-page',
  imports: [],
  templateUrl: './head-route-page.component.html',
  styleUrl: './head-route-page.component.css'
})
export class HeadRoutePageComponent  implements OnChanges{

  constructor(){}
  @Input('dataInput')itemData:any ;
  
  ngOnChanges(): void {
    console.log(this.itemData,'from head route')
  
  }

}
