import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // courseName: string = 'Angular Signals';

  courseName = signal("Angular Signals");
  student = signal({
    name: 'John Doe',
    age: 25,
    course: 'Angular Signals'
  });

  constructor() {
    console.log('Initial courseName:' + this.courseName());
    setTimeout(() => {
      this.courseName.set('Angular Signals Updated');
      console.log('courseName updated to:' + this.courseName());
    }, 5000);
  }
}
