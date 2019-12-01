import { Component, OnInit, Input, OnDestroy, ɵConsole } from '@angular/core';
import { DataService } from '../../shared/data.service';

import { FormControl } from '@angular/forms';

// rx js
import {tap, filter,map,toArray,mergeAll,switchMap,distinct} from 'rxjs/operators';
import { from } from 'rxjs';



@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit, OnDestroy {
  
  subscription;
  filmsList;

  tagsSelected = new FormControl();
  tagsList: string[];

  constructor(private dataService: DataService) {
    this.filmsList = [];
    this.tagsList = [];
   }


   handleSelect(){
     console.log(this.tagsSelected.value)
   }


   ngOnInit() {
     this.tagsList = this.dataService.getCurrentTagNames();
     const filter$ = this.dataService.getTags().pipe(
       tap(el=>console.log(el))
     )
     this.subscription = filter$.subscribe(res=>console.log(res))
  }
  ngOnDestroy() {
    if(this.subscription) this.subscription.unsubscribe();
  }

}
