import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListarComponent } from './course-listar/course-listar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CourseListarComponent],
  exports: [CourseListarComponent]

})
export class CourseModule { }
