import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/MainComponent/app.component';
import { config } from './app/Configuration/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
