
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Configuration/app.config';
import { AppComponent } from './app/MainComponent/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomePageComponent } from './app/Home/home-page/home-page.component';
import { SavedItemComponent } from './app/components/saved-item/saved-item.component';
import { ProfileUserComponent } from './app/components/settingProfile/profile-user.component';

bootstrapApplication(AppComponent,{
  providers:[
    appConfig.providers,

  ]
})
  .catch((err) => console.error(err));
