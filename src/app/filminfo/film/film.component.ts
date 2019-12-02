import { Component, OnInit } from '@angular/core';
import { LangService } from '../../shared/lang.service';
import { DataService } from '../../shared/data.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {


  film;
  imgUrl: string = 'https://image.tmdb.org/t/p/w500';

  constructor(private langService: LangService,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ) { }


  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dataService.getFilm(id).subscribe(film => {
      this.film = film
    });
  }

}
