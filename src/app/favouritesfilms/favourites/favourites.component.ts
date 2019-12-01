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
    // var test = [11, 4, 1,1,1, 5, 6, 4,4,];
    // let count = 3;
    // let obj2 = test.filter((elem, index, arr) => index !== arr.indexOf(elem) || index !== arr.lastIndexOf(elem)).reduce((acc, el) => {
    //     acc[el] = (acc[el] || 0) + 1;
    //     return acc;
    //   }, {});
      
    //  let result = Object.keys(obj2).filter(el=>obj2[el] === count);
    //  console.log(result)
    


     const tagCount = this.tagsSelected.value;
     const filmsData = this.dataService.getCurrentTags();
     const matchedIDs;
     tagCount.forEach
     console.log(this.tagsSelected.value.length)
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
