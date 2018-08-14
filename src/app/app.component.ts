import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WebIntent } from '@ionic-native/web-intent'; 
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: NavController
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private webIntent: WebIntent, 
    private alert:AlertController ) {
    platform.ready().then(() => {  
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.   
      this.webIntent.onIntent().subscribe((data:any)=>{
        // this.service.getVideoId(data.extras.android.intent.extra.TEXT)
        if (data.extras['android.intent.extra.TEXT']) {
          console.log(data.extras); 
          this.nav.push(HomePage,{url:data.extras['android.intent.extra.TEXT'],title:data.extras['android.intent.extra.SUBJECT']}) 
        }else{
          this.alert.create({
            title:"Check The URL and Try Again",
            buttons:[{
              text:'OK',
              handler:(data=>{
                console.log('Clicked OK');
              })
            }]
          }).present();
        }
      })
      statusBar.styleDefault();
      splashScreen.hide();
    }); 
  }
   
}

