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

  key:string = 'AIzaSyDnEkUL7SWJ8Ljh17TM78SGU29xK2x73gU';
  constructor( private http:Http) {
    this.key = 'AIzaSyDnEkUL7SWJ8Ljh17TM78SGU29xK2x73gU';
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
