import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clickCounter: number = 0;
  students: Array<{ name: string; age: number }> = [
    {
      name: 'David',

      age: 32,
    },
    {
      name: 'jime',

      age: 28,
    },
    {
      name: 'sabrina',

      age: 26,
    },
  ];

  info = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
  });

  countClick() {
    this.clickCounter++;
  }
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.info.valid) {
      let a = this.info.value;
      console.log(a);
    }
  }
}
