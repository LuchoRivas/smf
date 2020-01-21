import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser, public platform: Platform) { 
    platform.ready().then(() => {
      const browser = this.iab.create('https://smf-website-dev.herokuapp.com/', '_blank');
      browser.show();
    })
  }

}
