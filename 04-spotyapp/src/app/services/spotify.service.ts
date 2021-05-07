import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) { 

    console.log('Spotify service listo');
    
  }


  getQuery(query: string){

    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCWVT_26PnT7RPgOp_emPHHJ6LI5B_P91jqWOh1VnWp2ewVeklkQllOzplJ4MLhZ9f1RXgHMqcn7dgrRFE'
    }) ;

    return this.http.get(url, {headers});

  }


  getNewReleases(){

    return this.getQuery('browse/new-releases')
    .pipe( map( data => data['albums'].items ));

  }

  getArtistas( termino: string){
  
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
    .pipe( map( data =>  data['artists'].items ));

  }
  getArtista( id: string){
  
    return this.getQuery(`artists/${id}`);
   // .pipe( map( data =>  data['artists'].items ));

  }

  getTopTracks( id: string){
  
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data =>  data['tracks']));

  } 

}
