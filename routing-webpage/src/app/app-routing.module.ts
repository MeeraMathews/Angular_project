import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { AppComponent } from './app.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
	{
		path:'',
		component: AppComponent
	},
	{
		path:'user',
		loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
	},
	{
		path: 'about',
		loadChildren: () => import('./about/about.module').then(m => m.AboutModule) 
	}
	// {
	// 	path:'**',
	// 	component: AppComponent
	// },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
