import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';
import { UsersPostComponent } from './users-post/users-post.component';
import { PostCommentsComponent } from './users-post/post-comments/post-comments.component';


@NgModule({
  declarations: [
    UserDetailsComponent,
    UsersPostComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    UserDetailsRoutingModule
  ]
})
export class UserDetailsModule { }
