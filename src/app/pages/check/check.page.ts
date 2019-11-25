import { Component, OnInit } from '@angular/core';
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
  {
    name: 'primary',
    selected: false
  },
  {
    name: 'secondary',
    selected: true
  },
  {
    name: 'tertiary',
    selected: true
  },
  {
    name: 'success',
    selected: true
  },
];


  constructor() { }

  ngOnInit() {
  }

  onClick( check ) {
    console.log( check );
  }

}
