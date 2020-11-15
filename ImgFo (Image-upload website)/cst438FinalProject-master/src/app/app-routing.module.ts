import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload/upload.component';
import { ImageDetailsComponent } from './image-details/image-details.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PostComponent } from './post/post.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { SearchPageComponent } from './search-page/search-page.component';


const routes: Routes = [
  { path: 'user-home', component: UserHomeComponent},
  { path: '', component: HomeComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'post', component: PostComponent},
  { path: 'create-account', component: CreateAccountComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'image-details', component: ImageDetailsComponent},
  {path: 'search', component: SearchComponent},
  {path: 'search-page', component: SearchPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
