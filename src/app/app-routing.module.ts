import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostContentComponent } from './post-content/post-content.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
  {
    path: "",
    component: PostsComponent
  },
  {
    path: "content/:id",
    component: PostContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
