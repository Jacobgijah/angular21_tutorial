import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {
  // variables
  // string || number || boolean || date || any
  courseName: string = "Angular 21";
  currentVersion = "Version 21";

  rollNo: number = 121;
  productPrice = 1000;

  isActive: boolean = false;
  isPresent = true;

  currentDate = new Date();

  cityList: string[] = ["Dodoma", "Arusha", "Mbeya", "Dar es Salaam"];

  studentObj = {
    name: 'Kweks',
    mobile: '0758989898',
    email: 'kweks@bitcoin.tz'
  }

  studentList = [
    { name: 'Kweks', mobile: '0758989898', email: ''},
    { name: 'John', mobile: '0758989898', email: ''},
  ]

  constructor() {
    this.courseName = "Angular 201";

    this.rollNo = 122;
  }

}