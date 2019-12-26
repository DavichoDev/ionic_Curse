import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  /*
    Con el viewChild es posible manipular los elementos del HTML
  */

  usuarios: Observable<any>;

  constructor(private dataService: DataService) { }

  favorite( user ) {
    console.log(user);
  }

  share( user ) {
    console.log(user);
  }

  delete( user ) {
    console.log(user);
  }

  ngOnInit() {

    this.usuarios = this.dataService.getUsers();

  }

}
