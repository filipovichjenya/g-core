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


  handleSelect() {
    const selectedTags: string[] = this.tagsSelected.value;
    if (selectedTags.length === 0) return this.filmsList = [];
    const filmsData = this.dataService.getCurrentTags();
    
    let filmsForSearch: any[] = selectedTags.map(el => [...filmsData[el]]);


    if (selectedTags.length === 1) {
      this.filmsList = filmsData[selectedTags[0]].map(el => el.split('_'));
    } else {
      let searchArr: any = filmsForSearch[0];
      let indexForRemove = 0;
      filmsForSearch.forEach((filmsByTag: string[], index) => {
        if (filmsByTag.length < searchArr.length) {
          searchArr = filmsByTag;
          indexForRemove = index;
        }
      });

      filmsForSearch.splice(indexForRemove, 1);
      for (let i = searchArr.length - 1; i >= 0; i--) {
        for (let index = 0; index < filmsForSearch.length; index++) {
          if (!filmsForSearch[index].includes(searchArr[i])) {
            searchArr.splice(i, 1);
            break;
          }
        }
      }
      this.filmsList = searchArr.map(el => el.split('_'));
    }
  }


  ngOnInit() {
    this.tagsList = this.dataService.getCurrentTagNames();
  }
}
