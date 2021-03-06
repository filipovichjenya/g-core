import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { LangService } from '../../shared/lang.service';


import { FormControl } from '@angular/forms';

// rx js
import {toArray, filter, map, mergeAll } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit, OnDestroy {

  subscription;
  lgSubscription;
  tags;
  lang: string;


  @Input() id: number;
  tagInput: FormControl = new FormControl('');

  constructor(private dataService: DataService,private langService: LangService) {
    this.tags = [];
    this.lang = 'en';
  }
  
  createTag() {
    if (this.tagInput.value) {
      this.dataService.setTagById(this.id, this.tagInput.value.replace(/[\s+\W]/g,'').toLowerCase());
      this.tagInput.setValue('');
    }
  }
  removeTag(tag) {
    this.dataService.removeTagById(this.id, tag);
  }

  ngOnInit() {
    this.lgSubscription = this.langService.lang.subscribe(lg => this.lang = lg);
    const $tags = this.dataService.getTags().pipe(
      map(item=>from(Object.entries(item)).pipe(
        filter((item: any) => item[1].includes(this.id)),
        map(item=>item[0]),
        toArray())),
      mergeAll()
      )
    this.subscription = $tags.subscribe(tags => {
      return this.tags = tags
    })
  }
  ngOnDestroy() {
    if (this.lgSubscription) this.lgSubscription.unsubscribe();
    if (this.subscription) this.subscription.unsubscribe();
  }
  
}
