import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundDesignComponent } from './background-design/background-design.component';
import { WebsiteBodyComponent } from './website-body/website-body.component';
import { WebsiteFooterComponent } from './website-footer/website-footer.component';
import { PropertiesComponent } from './properties/properties.component';
import { AgentsComponent } from './agents/agents.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundDesignComponent,
    WebsiteBodyComponent,
    WebsiteFooterComponent,
    PropertiesComponent,
    AgentsComponent,
    AboutComponent,
    NewsComponent,
    ContactsComponent,
    ServicesComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
