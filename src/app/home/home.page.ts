import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
<<<<<<< HEAD
import { Platform, AlertController } from '@ionic/angular';
=======
import { Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
>>>>>>> 7e58785705f8ef37457e5af4f8d412d87d6c1421

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

<<<<<<< HEAD
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
=======
  url: SafeResourceUrl

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl("https://smf-website-dev.herokuapp.com/login")
>>>>>>> 7e58785705f8ef37457e5af4f8d412d87d6c1421
  }

}
