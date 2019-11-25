import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { FormControl } from '@angular/forms';

import { fromEvent, from } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, mergeMap } from 'rxjs/operators';


//import { LangService } from '../../shared/lang.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('searchInput', { static: false }) input;


  films = {};

  displayedColumns = [['Title', 'title'], ['Release', 'release_date']];
  columns = new FormControl(this.displayedColumns.map(item => item[0]));


  constructor(private dataService: DataService) { }

  subscription;
  ngAfterViewInit() {
    const text$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      debounceTime(500),
      map(e => e.target.value),
      filter(text=>(text !== '')),     
      distinctUntilChanged(),
      mergeMap((text) => from(this.dataService.getfilms(text)))
    )
    this.subscription = text$.subscribe(response => this.films = response);

  }
  ngOnInit() {

    this.films = this.dataService.getfilms('war');
    console.log(this.columns.value)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
