import { Component, OnInit } from '@angular/core';
import { LangService } from './shared/lang.service';
import { DataService } from './shared/data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  lang;
  constructor(private langService: LangService, private dataService: DataService) {
    this.lang = 'en';
  }

  selectLang(lg) {
    if (lg === this.langService.currentLangValue) return;
    this.langService.changeLang(lg)
  }

  ngOnInit() {
    this.langService.init();
    this.dataService.initFavouritesLlist();
    this.langService.lang.subscribe(lg => this.lang = lg)
  }
}
