import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TocPage } from '../toc/toc';
import { Page_1Page } from '../page-1/page-1';
import { Page_3Page } from '../page-3/page-3';

@IonicPage()
@Component({
  selector: 'page-page-2',
  templateUrl: 'page-2.html',
})
export class Page_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ChaptOne() {
    this.navCtrl.push(Page_1Page)
  };
  Toc() {
    this.navCtrl.push(TocPage);
  }
  ChaptThree() {
    this.navCtrl.push(Page_3Page)
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page_2Page');
  }

}
