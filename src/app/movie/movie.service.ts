import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private finaldata = [];
  private apiurl = "http://www.omdbapi.com/?apikey=faa771bf";
  constructor(private http: HttpClient) { }
  getData(title:string) {
     return this.http.get(this.apiurl+"&t="+title);
  }
}
