import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  countClick() {
    this.clickCounter++;
  }

  ngOnInit(): void {}
}
