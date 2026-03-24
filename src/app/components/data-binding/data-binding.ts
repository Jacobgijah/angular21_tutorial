import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = 'Angular - The Complete Guide';
  cityName = 'Arusha';

  className = 'primary';

  inputType = 'date';

  showWelcomeMessage() {
    alert("Welcome to Angular 21!");
  }

  onStateChanged() {
    alert("State has been changed!");
  }

  changeCourseName(text: string) {
    this.courseName = text;
  }
}
