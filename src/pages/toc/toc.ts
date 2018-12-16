import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page_1Page } from '../page-1/page-1';
import { Page_2Page } from '../page-2/page-2';
import { Page_3Page } from '../page-3/page-3';


@IonicPage()
@Component({
  selector: 'page-toc',
  templateUrl: 'toc.html',
})
export class TocPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ChaptOne() {
    this.navCtrl.push(Page_1Page)
  };
  ChaptTwo() {
    this.navCtrl.push(Page_2Page)
  };
  ChaptThree() {
    this.navCtrl.push(Page_3Page)
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad TocPage');
  }


}
