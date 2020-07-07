import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HttpClientModule} from "@angular/common/http";
import { HttpServiceService } from "./http-service.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { PostsComponent } from './posts/posts.component';
import { PostContentComponent } from './post-content/post-content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
