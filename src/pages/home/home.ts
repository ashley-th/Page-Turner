import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TocPage } from '../toc/toc';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  Toc() {
    this.navCtrl.push(TocPage);
  }

}
