import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CircleComponent } from './circle/circle.component';
import { SquareComponent } from './square/square.component';
import { TriangleComponent } from './triangle/triangle.component';

const COMPONENTS = {
  circle: CircleComponent,
  square: SquareComponent,
  triangle: TriangleComponent,
};

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss'],
})
export class DynamicComponent implements OnInit {
  shapes = [
    { type: 'square' },
    { type: 'square' },
    { type: 'triangle' },
    { type: 'circle' },
    { type: 'square' },
    { type: 'triangle' },
  ];

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    this.shapes.forEach((shape) =>
      this.viewContainerRef.createComponent(COMPONENTS[shape.type])
    );
  }
}
