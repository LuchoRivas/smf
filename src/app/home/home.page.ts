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
      const options = 'location=no,hidden=yes,zoom=no,hideurlbar=yes';
      const browser = this.iab.create('https://smf-website-dev.herokuapp.com/login', '_blank', options);
      browser.show();
    })
  }

}
