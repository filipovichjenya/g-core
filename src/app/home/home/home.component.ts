import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { FormControl } from '@angular/forms';

import { fromEvent, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';


//import { LangService } from '../../shared/lang.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('searchInput', { static: false }) input;


  films = null;
  queryText = 'starwars';

  displayedColumns = [['Title', 'title'], ['Release', 'release_date']];
  columns = new FormControl(this.displayedColumns.map(item => item[0]));


  constructor(private dataService: DataService) { }

  subscription;

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
      console.log(this.queryText)
      return this.films = response
    });

  }
  ngOnInit() {
    this.films = this.dataService.getDefaultFilms();
    // this.sub2 = from(this.dataService.getfilms('war')).subscribe(res => this.films = res);
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
