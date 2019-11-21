import { Component ,OnInit} from '@angular/core';
import { DataService } from './shared/dataService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Films library';
  lang;
  constructor(private dataService: DataService) {
    this.lang = 'en';
  }

  selectLang(lg){
    if(lg === this.dataService.currentLangValue) return;    
    this.dataService.changeLang(lg)
  }

  ngOnInit() {
    console.log('ngOnInit App.component')
    this.dataService.init();
    this.dataService.lang.subscribe(lg=>this.lang = lg) 
  }
}
