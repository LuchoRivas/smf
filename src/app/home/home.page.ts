import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  url: SafeResourceUrl

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl("https://smf-staging.quadminds.io/Login")
  }

}
