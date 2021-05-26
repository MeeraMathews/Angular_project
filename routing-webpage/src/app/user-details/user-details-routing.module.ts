import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
import { UsersPostComponent } from './users-post/users-post.component';

const routes: Routes = [
	{
		path: '', component: UserDetailsComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
