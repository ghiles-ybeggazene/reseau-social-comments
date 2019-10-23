import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { NewsFeedComponent }     from './news-feed/news-feed.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '',   redirectTo: '/newsfeed', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }