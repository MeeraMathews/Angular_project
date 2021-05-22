import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactsPageComponent } from './contacts-page/contacts-page.component';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
	{ path: 'about-page', component: AboutPageComponent },
	{ path: 'contacts-page', component: ContactsPageComponent },
	{ path: 'features-page', component: FeaturesPageComponent },
	{ path: 'users-details', component: UsersDetailsComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AboutPageComponent,ContactsPageComponent,FeaturesPageComponent,UsersDetailsComponent]
