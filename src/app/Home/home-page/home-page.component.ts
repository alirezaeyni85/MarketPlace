import { Component, DoCheck } from "@angular/core";
import { ItemsShopComponent } from "../../components/items-shop/items-shop.component";
import { DailyChartsComponent } from "../../components/daily-charts/daily-charts.component";
import { ActiveUsersComponent } from "../../components/active-users/active-users.component";
import { ExplorSidbarComponent } from "../../components/explor-sidbar/explor-sidbar.component";
import { Router, RouterModule } from "@angular/router";
import { ProfileDirectoryDirective } from "../../core/directory/Profile-Users/profile-directory.directive";
import { NgIf } from "@angular/common";
import { SavedItemsService } from "../../core/Services/Items/savedItems.service";
import { InfoUserService } from "../../core/Services/InfoUsers/info-user.service";
import { NavbarComponent } from "../navbarPage/navbar/navbar.component";


@Component({
  selector: 'app-home-page',
  imports: [ItemsShopComponent, DailyChartsComponent, ActiveUsersComponent, ExplorSidbarComponent, RouterModule, NgIf, ProfileDirectoryDirective, NavbarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone:true,
})
export class HomePageComponent implements DoCheck{
  public isClicked = false;
  public isLoginUser = false;
  constructor(private isClick:SavedItemsService, private router:Router, private isLogin: InfoUserService ){}
 
  ngDoCheck(): void {
    this.isClicked = this.isClick.isClicked;
    this.isLoginUser =  this.isLogin.isLogin;
  }
  onClick(){
   this.isClick.isClicked = true 
  }
  onClickHome(){
    this.isClick.isClicked =false
    this.router.navigate([''])
  
  }

}
