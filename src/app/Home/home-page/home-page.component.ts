import { Component, DoCheck } from '@angular/core';
import { ItemsShopComponent } from "../../../shared/components/items-shop/items-shop.component";
import { DailyChartsComponent } from "../../../shared/components/daily-charts/daily-charts.component";
import { ActiveUsersComponent } from "../../../shared/components/active-users/active-users.component";
import { ExplorSidbarComponent } from "../../../shared/components/explor-sidbar/explor-sidbar.component";
import { AppComponent } from "../../app.component";
import { RouterModule } from '@angular/router';
import { NgIf } from '@angular/common';
import { SavedItemsService } from '../../../core/Services/savedItems.service';

@Component({
  selector: 'app-home-page',
  imports: [ItemsShopComponent, DailyChartsComponent, ActiveUsersComponent, ExplorSidbarComponent, RouterModule, NgIf],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone:true,
})
export class HomePageComponent implements DoCheck{
  public isClicked = false
  ngDoCheck(): void {
    this.isClicked = this.isClick.isClicked
  }
  constructor(private isClick:SavedItemsService){}
  onClick(){
   this.isClick.isClicked = true 
  }

}
