import {data} from  './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';




@Injectable()
export class DataService {
    data = data;
    private apiKey: string = "115b6f4c9cf31a05bf99afc39555c6c1";
    private apiUrl: string = "https://api.themoviedb.org/3/search/movie";

    constructor(private http: HttpClient){

    }
    getfilms(query){
        return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&query=${query}&page=1&include_adult=false`);
    }
    
}










