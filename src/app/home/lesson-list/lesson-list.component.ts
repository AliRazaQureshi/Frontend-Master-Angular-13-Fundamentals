import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.scss'],
})
export class LessonListComponent {
  @Input() lessons: any = [];
  @Input() selectedLesson: any;
  @Output() selected = new EventEmitter();
}
