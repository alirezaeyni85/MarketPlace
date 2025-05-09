import { Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { SavedItemComponent } from './components/saved-item/saved-item.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
  {path:'', component:HomePageComponent , children:[
    {path:'saved', component:SavedItemComponent,data:['Saved']},
    {path:'setting', component:ProfileUserComponent, data:['Setting']},
    
  ]},


];
