import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsSectionComponent } from './students-section.component';

const routes: Routes = [{
  path:'',
  component:StudentsSectionComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
