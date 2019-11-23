import { Component ,OnInit} from '@angular/core';
import { LangService } from './shared/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Films library';
  lang;
  constructor(private langService: LangService) {
    this.lang = 'en';
  }

  selectLang(lg){
    if(lg === this.langService.currentLangValue) return;    
    this.langService.changeLang(lg)
  }

  ngOnInit() {
    console.log('ngOnInit App.component')
    this.langService.init();
    this.langService.lang.subscribe(lg=>this.lang = lg) 
  }
}
