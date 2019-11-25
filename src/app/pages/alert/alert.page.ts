import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(public alertCtrl: AlertController) {  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Probando una alerta',
      message: 'Este es un mensaje de alerta.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón Cancelar');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Botón Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentText() {
    const alert = await this.alertCtrl.create({
      header: 'Ingreso de Texto',
      inputs: [
        {
          name: 'cajaTexto',
          type: 'text',
          placeholder: 'Ingresa tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Ok',
          handler: ( data ) => {
            this.titulo = data.cajaTexto;
          }
        }
      ]
    });

    await alert.present();
  }


}
