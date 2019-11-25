import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { FormControl } from '@angular/forms';

import { fromEvent, from, of } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, catchError, mergeMap } from 'rxjs/operators';


//import { LangService } from '../../shared/lang.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {


  @ViewChild('searchInput', { static: false }) input;


  films = null;

  displayedColumns = [['Title', 'title'], ['Release', 'release_date']];
  columns = new FormControl(this.displayedColumns.map(item => item[0]));


  constructor(private dataService: DataService) { }

  sub1;

  handlePage(e){
    console.log(e)
  }



  ngAfterViewInit() {
    const text$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      debounceTime(500),
      map(e => e.target.value),
      filter(text => (text !== '')),
      distinctUntilChanged(),
      mergeMap((text) => from(this.dataService.getfilms(text)))
    )
    this.sub1 = text$.subscribe(response => {
      console.log(response)
      return this.films = response
    });

  }
  ngOnInit() {
   this.films = this.dataService.getDefaultFilms();
    // this.sub2 = from(this.dataService.getfilms('war')).subscribe(res => this.films = res);
  }
  ngOnDestroy() {
    // this.sub2.unsubscribe();
    this.sub1.unsubscribe();
  }
}
