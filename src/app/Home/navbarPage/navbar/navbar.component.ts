import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SavedItemsService } from '../../../core/Services/Items/savedItems.service';
import { InfoUserService } from '../../../core/Services/InfoUsers/info-user.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    public isClicked = false;
  public isLoginUser = false;
  constructor(private isClick:SavedItemsService, private router:Router, private isLogin: InfoUserService ){}


  onClick(){
   this.isClick.isClicked = true 
  }
  onClickHome(){
    this.isClick.isClicked =false
    this.router.navigate([''])
  
  }
}
