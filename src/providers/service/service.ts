import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import getVideoId from 'get-video-id';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  key:string = 'Enter Your Youtube Api Key';
  constructor( private http:Http) {
    this.key = 'Enter Your Youtube Api Key';
    console.log('Hello ServiceProvider Provider');
  }
  getVideosDetails(url){
    return this.http.get(url)
  }
  getApiUrl(videoId){ 
    return 'https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id='+videoId+'&key='+this.key
  }
  getVideoId(url){
    return getVideoId(url).id
  } 
}
