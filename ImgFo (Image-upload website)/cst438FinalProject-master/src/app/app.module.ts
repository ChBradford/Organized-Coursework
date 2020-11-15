import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostComponent } from './post/post.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UploadComponent } from './upload/upload.component';


import { MaterialModule } from './material/material.module';

import { ImageDetailsComponent } from './image-details/image-details.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SearchComponent } from './search/search.component';
import { HttpService } from './http.service';
import { ImageService } from './image.service';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    PostComponent,
    CreateAccountComponent,
    AdminComponent,
    UploadComponent,
    ImageDetailsComponent,
    UserHomeComponent,
    SearchComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [HttpService,
              ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
