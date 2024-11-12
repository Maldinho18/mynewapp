import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-listar',
  templateUrl: './course-listar.component.html',
  styleUrls: ['./course-listar.component.css']
})
export class CourseListarComponent implements OnInit {

  courses: Array<Course> = []
  prom!: number;

  constructor(private courseService: CourseService) { }
  getCourses() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.promedio(this.courses);
    });
  }

  promedio(courses: Array<Course>): void  {
    let sum = 0;
    for (let i = 0; i < courses.length; i++) {
      sum += courses[i].seasons;
    }
    this.prom = sum / courses.length;
  }

  ngOnInit() {
    this.getCourses();
  }

}
