import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TocPage } from '../pages/toc/toc';
import { Page_1Page } from '../pages/page-1/page-1';
import { Page_2Page } from '../pages/page-2/page-2';
import { Page_3Page } from '../pages/page-3/page-3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TocPage,
    Page_1Page,
    Page_2Page,
    Page_3Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TocPage,
    Page_1Page,
    Page_2Page,
    Page_3Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
