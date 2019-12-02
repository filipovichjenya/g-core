import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/data.service';

import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  
  subscription;
  filmsList;

  tagsSelected = new FormControl();
  tagsList: string[];

  constructor(private dataService: DataService) {
    this.filmsList = [];
    this.tagsList = [];
   }


   handleSelect(){
     const selectTags = this.tagsSelected.value;     
     const filmsData = this.dataService.getCurrentTags();
     let matchedIDs = []; 
     selectTags.forEach(el=> matchedIDs = [...matchedIDs,...filmsData[el]]);
     if(selectTags.length === 1){        
        this.filmsList = matchedIDs.map(el=>el.split('_'));  
     } else{
      let resultFilms = matchedIDs.filter((elem, index, arr) => index !== arr.indexOf(elem) || index !== arr.lastIndexOf(elem)).reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
       this.filmsList = Object.keys(resultFilms).filter(el=>resultFilms[el] === selectTags.length).map(el=>el.split('_')); 
     }     
   }


   ngOnInit() {
     this.tagsList = this.dataService.getCurrentTagNames();
  }
}
