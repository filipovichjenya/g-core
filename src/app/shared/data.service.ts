import { data } from './data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { of, from, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';



@Injectable()
export class DataService {
    data = data;
    private apiKey: string = "115b6f4c9cf31a05bf99afc39555c6c1";
    private apiUrl: string = "https://api.themoviedb.org/3/search/movie";

    private favouritesLlist = new BehaviorSubject(JSON.parse(localStorage.getItem('favouritesLlist')));


    constructor(private http: HttpClient) { }


    getfilms(query, page = 1) {
        return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&query=${query}&page=${page}&include_adult=false`).pipe(
            catchError(err => {
                console.log(err)
                return of(null)
            })
        );
    }
    getFilm(id) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).pipe(
            catchError(err => {
                console.log(err)
                return of(null)
            })
        );
    }
    getDefaultFilms() {
        return data;
    }


    //tag service
    initFavouritesLlist() {
        if (!this.favouritesLlist.getValue()) {
            localStorage.setItem('favouritesLlist', JSON.stringify([{ name: '', IDs: [] }]));
            this.favouritesLlist.next([{ name: '', IDs: [] }])
        }
    }

    getTags() {
        console.log('getTags', this.favouritesLlist.getValue())
        return this.favouritesLlist.asObservable();
    }
    getCurrentTags() {
        return this.favouritesLlist.getValue();
    }
    setTagById(id, name) {
        let tagsList = [...this.favouritesLlist.getValue()];
        let result = new Set();
        tagsList.forEach(tag => {
            if (tag.name === name) {
                // result.push({ name, IDs: [...tag.IDs, id] })
            } else {
                result.add({ name, IDs: [id] })
            }

        })
        console.log('result', result)
        localStorage.setItem('favouritesLlist', JSON.stringify(result));
        this.favouritesLlist.next(result);
    }

}










