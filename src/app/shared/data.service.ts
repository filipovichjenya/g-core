import { data } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { fromEvent, from, of } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, catchError, mergeMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';




@Injectable()
export class DataService {
    data = data;
    private apiKey: string = "115b6f4c9cf31a05bf99afc39555c6c1";
    private apiUrl: string = "https://api.themoviedb.org/3/search/movie";

    constructor(private http: HttpClient) {

    }
    getfilms(query,page = 1) {
        return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&query=${query}&page=${page}&include_adult=false`).pipe(
            catchError(err => {
                console.log(err)
                return of(null)
            })
        );
    }
    getDefaultFilms(){
        return data;
    }

}










