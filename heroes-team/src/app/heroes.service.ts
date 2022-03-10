import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Md5 } from 'ts-md5';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(public http:HttpClient) { 
    
  }
 
  public getRawHeroes(numberPage){
    if(numberPage == 1){
      numberPage = 0;
    }else{
      numberPage = numberPage * 7;
    }
      return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?limit=7&offset=${numberPage}
      &apikey=4e1a38113e4d2a2feb6ba2c643f29c64&hash=919f2d42b0d78b3010f524071dfc691f&ts=1646755394`);
    }

  public getHero(id){
     return this.http.get(`https://gateway.marvel.com:443/v1/public/characters/`+id+`?&apikey=4e1a38113e4d2a2feb6ba2c643f29c64&hash=919f2d42b0d78b3010f524071dfc691f&ts=1646755394`);
  }

  public getComic(id){
    return this.http.get(`http://gateway.marvel.com/v1/public/comics/`+id+`?&apikey=4e1a38113e4d2a2feb6ba2c643f29c64&hash=919f2d42b0d78b3010f524071dfc691f&ts=1646755394`);
 }

  public getRawHeroes2(){
      return this.http.get(`https://gateway.marvel.com:443/v1/public/characters?&apikey=4e1a38113e4d2a2feb6ba2c643f29c64&hash=919f2d42b0d78b3010f524071dfc691f&ts=1646755394`);
    }

}
