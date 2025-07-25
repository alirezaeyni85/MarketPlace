import { Routes } from '@angular/router';
import { HomePageComponent } from '../Home/home-page/home-page.component';
import { SavedItemComponent } from '../components/saved-item/saved-item.component';
import { ProfileUserComponent } from '../components/settingProfile/profile-user.component';
import { ProfileComponent } from '../components/profile/mainPageProfile/profile.component';
import { BidsComponent } from '../components/Bids/bids/bids.component';
import { autenticationGuard } from '../core/gaurd/autentication.guard';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
  {path:'', component:HomePageComponent , children:[
    {path:'saved', component:SavedItemComponent,data:['saved'],canActivate:[autenticationGuard] },
    {path:'bids', component:BidsComponent ,data:['Bids']},
    {path:'setting', component:ProfileUserComponent , data:['Setting']},

    {path:'setting', component:ProfileUserComponent, children:[
      {path:'profile', component:ProfileComponent , data:['Profile']}

    ]},
    
  ]},


];
