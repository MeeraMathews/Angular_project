import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddClassComponent } from './add-class/add-class.component';
import { StudentsSectionComponent } from './students-section/students-section.component';
import { TeachersSectionComponent } from './teachers-section/teachers-section.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddStudentComponent,
    AddClassComponent,
    StudentsSectionComponent,
    TeachersSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
