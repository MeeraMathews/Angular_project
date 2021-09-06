import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersSectionComponent } from './teachers-section.component';

const routes: Routes = [{
  path:'',
  component:TeachersSectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
