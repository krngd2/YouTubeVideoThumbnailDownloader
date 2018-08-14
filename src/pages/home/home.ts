import { Component, AfterViewInit } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AdMobFreeBannerConfig, AdMobFree } from '../../../node_modules/@ionic-native/admob-free';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
 
  apiURL:string;
  videoId:string;
  data:any;
  title:any;
  constructor(public navCtrl: NavController,
    private alert:AlertController,
    private service:ServiceProvider,
    private navParams:NavParams,
    private loadingCtrl:LoadingController,
    private admobFree: AdMobFree
  ) {   
    // this.apiURL = 'https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id='+this.videoId+'&key='+this.key
  }
  ngAfterViewInit(): void {
    let url = this.navParams.get('url')
    this.title = this.navParams.get('title')
    if (url) {
      this.checkURL(url)
    }
  }
  checkURL(url){
    let loading = this.loadingCtrl.create({ 
      content: 'Please wait...',
      duration: 5000
    });
    loading.present();
    this.videoId = this.service.getVideoId(url)
    this.apiURL = this.service.getApiUrl(this.videoId)
    if (this.videoId) { 
      let videodata = this.service.getVideosDetails(this.apiURL)
      videodata.subscribe((data:any)=>{ 
        if (data) {
          this.data = JSON.parse(data._body)
        }
        console.log(this.data); 
      })
      loading.dismiss();
    }else{
      loading.dismiss();
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
  }

  downloadImage(imageURL) {
    window.open(imageURL,'_system', 'location=yes')
  }

  async showBannerFree() {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config
      id: "ca-app-pub-6236508034083136/2988927901",

      isTesting: false,
      autoShow: true,
      bannerAtTop:true
     };
     this.admobFree.banner.config(bannerConfig);
     
     this.admobFree.banner.prepare()
       .then(() => {
         // banner Ad is ready
         // if we set autoShow to false, then we will need to call the show method here
        console.log("Ad Ready");        

       })
       .catch(e => console.log(e));
  }
}
