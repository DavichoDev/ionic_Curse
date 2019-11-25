import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
    icon: 'american-football',
    nombre: 'Action Sheet',
    redirectTo:'/action-sheet'
    },
    {
      icon: 'appstore',
      nombre: 'Alert',
      redirectTo: '/alert'
    },
    {
     icon: 'beaker',
     nombre: 'Avatar',
     redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on',
      nombre: 'Botones y router',
      redirectTo: '/botones'
     },
     {
      icon: 'alarm',
      nombre: 'Cards',
      redirectTo: '/card'
     },
     {
      icon: 'checkmark-circle-outline',
      nombre: 'Checkbox',
      redirectTo: '/check'
     },
     {
      icon: 'time',
      nombre: 'Date Time',
      redirectTo: '/date-time'
     },
     {
      icon: 'heart',
      nombre: 'Ionic Fab',
      redirectTo: '/fab'
     }
  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  nombre: string;
  redirectTo: string;
}