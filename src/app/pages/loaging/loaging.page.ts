import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loaging',
  templateUrl: './loaging.page.html',
  styleUrls: ['./loaging.page.scss'],
})
export class LoagingPage implements OnInit {

  loading: any;

  constructor(private loadingCtrl: LoadingController) { }

  async presentLoading( message: string ) {
    this.loading = await this.loadingCtrl.create({
      message
    });
    return this.loading.present();
  }

  ngOnInit() {
    this.presentLoading('Espere porfavor');
    setTimeout(() => {

      this.loading.dismiss();

    }, 1500);
  }

}
