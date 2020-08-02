import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppMainPageComponent } from './app-main-page/app-main-page.component';
import { CatsComponent } from './cats/cats.component';

const routes: Routes = [
  { path: '', component: AppMainPageComponent },
  { path: 'cats', component: CatsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
