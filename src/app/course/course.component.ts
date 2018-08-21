import { Component, OnInit ,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  // @Input('is-Favorite') isFavorite: Boolean;
  // //@Input('') isFavorite: Boolean;
  // @Output() change = new EventEmitter 
  // constructor() { }

  ngOnInit() {
  }
 onClick()
 {
  //  this.isFavorite = !this.isFavorite;
  //  this.change.emit()
 }
}
