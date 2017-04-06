import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'sub-url', component: HeroComponent }
];
