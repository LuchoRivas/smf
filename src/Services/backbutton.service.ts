import { AlertController,NavController, Platform } from '@ionic/angular'
import { Injectable } from '@angular/core'

@Injectable()
export class BackbuttonService {

    private _toExecute: Function | null

    constructor(
        private _platform: Platform,
        private _alertCtrl: AlertController
    ) {
        this._toExecute = null
    }

    setup(nav: Nav) {
        this._platform.backButton.subscribe(() => {
            if (this._toExecute) {
                this._toExecute()
            } else {
                if (nav.canGoBack() || nav.canSwipeBack()) {
                    nav.pop()
                } else {
                    this._confirmExit()
                }
            }
        })
    }

    overrideWith(fn: Function) {
        this._toExecute = fn
    }

    private _confirmExit() {
        this._alertCtrl.create({
            title: 'Salir',
            message: '¿Desea cerrar la app?',
            buttons: [
                {
                    text: 'Si',
                    handler: () => this._platform.exitApp()
                },
                {
                    text: 'No',
                    role: 'cancel'
                }
            ]
        }).present()
    }

}