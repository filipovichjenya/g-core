import { Component, OnInit } from '@angular/core';
import { LangService } from '../../shared/lang.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  films;
  constructor(private langService: LangService) {
    this.films = [];
  }

  
  ngOnInit() {
    
    this.films = this.langService.getfilms();
    console.log(this.films)
  }

}
