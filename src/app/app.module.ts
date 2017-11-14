import {UserService} from './services/user.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './routes';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { PostComponent } from './components/post.component';
import { NavComponent } from './components/nav.component';
import { BodyComponent } from './components/body.component';
import { DetailComponent } from './components/detail.component';
import { ProfileComponent } from './components/profile.component';
import { CommentComponent } from './components/comment.component';
import { ConnectionComponent } from './components/connection.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostComponent,
    NavComponent,
    BodyComponent,
    ProfileComponent,
    DetailComponent,
    CommentComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( appRoutes ),
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
