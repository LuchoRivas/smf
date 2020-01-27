import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _iab: InAppBrowser, private _platform: Platform, private _alertCtrl: AlertController) { }

  ionDidViewLoad() {
    const options = 'location=no,hidden=yes,zoom=no,hideurlbar=yes';
    const browser = this._iab.create('https://smf-website-dev.herokuapp.com/login', '_blank', options);
    browser.show();
    this._platform.backButton.subscribe(() => {
      this.confirmExit()

    })
  }

  confirmExit() {
    this._alertCtrl.create({
      header: 'Salir',
      message: '¿Desea cerrar la app?',
      buttons: [
        {
          text: 'Si',
          handler: () => navigator["app"].exitApp()
        },
        {
          text: 'No',
          role: 'cancel'
        }
      ]
    })
  }

}
