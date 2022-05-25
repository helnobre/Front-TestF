import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "./services/user.service";
import { AddPostComponent } from './components/add-post/add-post.component';
import {AuthGuardGuard} from "./guards/auth-guard.guard";
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import {PostsService} from "./services/posts.service";
import { PostItemComponent } from './components/list-posts/post-item/post-item.component';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { UpdatePostComponent } from './components/update-post/update-post.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    AddPostComponent,
    ListPostsComponent,
    PostItemComponent,
    ButtonsComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [UserService, AuthGuardGuard, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
