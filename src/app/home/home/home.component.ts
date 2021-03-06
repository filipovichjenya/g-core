import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { LangService } from '../../shared/lang.service';
import { FormControl } from '@angular/forms';

import { fromEvent, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('searchInput', { static: false }) input;

  subscription;
  lgSubscription;

  films = null;
  queryText = 'starwars';

  displayedColumns = ['Title','Release','Rating'];
  columns = new FormControl(this.displayedColumns);

  lang: string;

  constructor(private dataService: DataService,private langService: LangService) {
    this.lang = 'en';
  }

  


  handlePage(event) {
    const { pageIndex } = event;
    this.dataService.getfilms(this.queryText, pageIndex + 1).subscribe(response => this.films = response)
  }



  ngAfterViewInit() {
    const text$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      debounceTime(400),
      map(e => e.target.value),
      filter(text => (text !== '')),
      distinctUntilChanged(),
      tap(text => this.queryText = text),
      switchMap((text) => from(this.dataService.getfilms(text))),
    )
    this.subscription = text$.subscribe(response => {
      return this.films = response
    });
  }

  ngOnInit() {
   this.lgSubscription = this.langService.lang.subscribe(lg => this.lang = lg);
   this.films = this.dataService.getDefaultFilms();
    
  }

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
    if (this.lgSubscription) this.lgSubscription.unsubscribe();
  }
}
