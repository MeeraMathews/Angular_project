import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
	{
		path: 'home',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
	},
	{ 
		path: 'user-details/:id',
		loadChildren: () => import('./user-details/user-details.module').then(m => m.UserDetailsModule)
	},
	{
		path: '**',
		redirectTo: 'home'
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
