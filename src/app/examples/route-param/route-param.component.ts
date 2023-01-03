import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-param',
  templateUrl: './route-param.component.html',
  styleUrls: ['./route-param.component.scss'],
})
export class RouteParamComponent implements OnInit {
  lessons = [
    { id: '1', title: 'Hello Angular' },
    { id: '2', title: 'Component Fundamentals' },
    { id: '3', title: 'Template Driven Forms' },
    { id: '4', title: 'Angular Services' },
    { id: '5', title: 'Server Communication' },
    { id: '6', title: 'Component Driven Architecture' },
    { id: '7', title: 'Angular Routing' },
    { id: '8', title: 'Unit Testing Fundamentals' },
  ];

  currentLesson = null;
  currentId = null;

  constructor(private route: ActivatedRoute) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.currentId = params.get('id');
      if (this.currentId) {
        this.setCurrentLesson(this.currentId);
      }
    });
  }

  setCurrentLesson(id) {
    this.currentLesson = this.lessons.find((lesson) => lesson.id == id);
  }
}
