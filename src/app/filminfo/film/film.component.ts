import { Component, OnInit } from '@angular/core';
import { LangService } from '../../shared/lang.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  constructor(private langService: LangService) { }

  
  ngOnInit() {
  }

}
