import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsFeedListComponent } from './news-feed/news-feed-list/news-feed-list.component';
import { NewFeedService } from './news-feed/service/new-feed.service';
import { NewsFeedDetailComponent } from './news-feed/news-feed-list/news-feed-detail/news-feed-detail.component';
import { CommentComponent } from './news-feed/news-feed-list/news-feed-detail/comment/comment.component';
import { FormComponent } from './news-feed/news-feed-list/news-feed-detail/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsFeedComponent,
    ProfileComponent,
    NewsFeedListComponent,
    NewsFeedDetailComponent,
    CommentComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [FormComponent],
  providers: [
    NewFeedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
