import { Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { SavedItemComponent } from './components/saved-item/saved-item.component';
import { ProfileUserComponent } from './components/settingProfile/profile-user.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
  {path:'', component:HomePageComponent , children:[
    {path:'saved', component:SavedItemComponent,data:['Saved']},
    {path:'setting', component:ProfileUserComponent , data:['Setting']},

    {path:'setting', component:ProfileUserComponent, children:[
      {path:'profile', component:ProfileComponent}

    ]},
    
  ]},


];
