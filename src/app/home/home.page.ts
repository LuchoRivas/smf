import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Platform } from '@ionic/angular';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: SafeResourceUrl

  constructor(private _platform: Platform, private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl("https://smf-website-dev.herokuapp.com/login")
  }

}
