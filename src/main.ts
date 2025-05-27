
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/Configuration/app.config';
import { AppComponent } from './app/MainComponent/app.component';

bootstrapApplication(AppComponent,{
  providers:[
    appConfig.providers,

  ]
})
  .catch((err) => console.error(err));
