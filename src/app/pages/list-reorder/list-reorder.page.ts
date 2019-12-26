import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes = ['aquaman', 'superman', 'batman', 'flash', 'mujer maravilla'];

  constructor() { }

  reorder( evento ) {
    console.log( evento );

    const itemMover = this.personajes.splice( evento.detail.from, 1 )[0];
    this.personajes.splice( evento.detail.to, 0, itemMover );

    evento.detail.complete();
  }

  ngOnInit() {
  }

}
