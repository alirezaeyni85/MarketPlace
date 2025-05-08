
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomePageComponent } from './app/Home/home-page/home-page.component';
import { SavedItemComponent } from './shared/components/saved-item/saved-item.component';
import { ProfileUserComponent } from './shared/components/profile-user/profile-user.component';
const routes:Routes=[
  {path:'', component:HomePageComponent},
  {path:'', component:HomePageComponent , children:[
    {path:'saved', component:SavedItemComponent,data:['Saved']},
    {path:'my-profile', component:ProfileUserComponent, data:['Setting']}
  ]},

]
bootstrapApplication(AppComponent,{
  providers:[
    appConfig.providers,
    provideRouter(routes)
  ]
})
  .catch((err) => console.error(err));
