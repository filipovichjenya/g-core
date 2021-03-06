import { data } from './data';
import { HttpClient } from '@angular/common/http';

import { of, BehaviorSubject } from 'rxjs';
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
                return of(null)
            })
        );
    }
    getFilm(id) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`).pipe(
            catchError(err => {
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
            localStorage.setItem('favouritesLlist', JSON.stringify({}));
            this.favouritesLlist.next({});
        }
    }

    getTags() {
        return this.favouritesLlist.asObservable();
    }
    getCurrentTagNames(){
        if(this.favouritesLlist.getValue()){
            return Object.keys(this.favouritesLlist.getValue());
        }        
    }
    getCurrentTags() {
        return this.favouritesLlist.getValue();
    }
    setTagById(id, tagName) {
        let tagsList = {...this.favouritesLlist.getValue()}; 
        if(tagsList[tagName]){
            const filmIDs = new Set(tagsList[tagName]);
            filmIDs.add(id);
            tagsList[tagName] = [...filmIDs]
        } else{
            tagsList[tagName] = [id]
        }

        localStorage.setItem('favouritesLlist', JSON.stringify(tagsList));
        this.favouritesLlist.next(tagsList);
    }
    removeTagById(id,tagName){
        const tagsList = {...this.favouritesLlist.getValue()};

        const indexTagInArray = tagsList[tagName].indexOf(id);
        tagsList[tagName].splice(indexTagInArray,1);
        if(tagsList[tagName].length === 0) delete tagsList[tagName];

        localStorage.setItem('favouritesLlist', JSON.stringify(tagsList));
        this.favouritesLlist.next(tagsList);
    }

}