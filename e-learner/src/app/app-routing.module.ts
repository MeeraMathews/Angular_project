import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'addstudent',
    loadChildren: () => import('./add-student/add-student.module').then(m => m.AddStudentsModule)
  },
  {
    path:'addclass',
    loadChildren: () => import('./add-class/add-class.module').then(m => m.AddClassModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students-section/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teachers-section/teacher.module').then(m=>m.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
