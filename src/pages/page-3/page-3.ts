import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Page_2Page } from '../page-2/page-2';

@IonicPage()
@Component({
  selector: 'page-page-3',
  templateUrl: 'page-3.html',
})
export class Page_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  Toc() {
    this.navCtrl.push(TocPage);
  }
  ChaptTwo() {
    this.navCtrl.push(Page_2Page)
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_3Page');
  }

}
