import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/dataService';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films;
  constructor(private dataService: DataService) {
    this.films = [];
  }

  ngOnInit() {
    this.films = this.dataService.getfilms();
    console.log(this.films)
  }

}
