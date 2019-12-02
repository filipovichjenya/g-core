import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class LangService {

    private currentLangSubject = new BehaviorSubject(localStorage.getItem('currentLang'));
    lang = this.currentLangSubject.asObservable();
   
    init(){
        if(!this.currentLangValue) {
            localStorage.setItem('currentLang', 'en');
            this.currentLangSubject.next('en');
        }
    }
    
    get currentLangValue() {
        return this.currentLangSubject.value;
      }
    
    changeLang(lg){
        localStorage.setItem('currentLang', lg);
        this.currentLangSubject.next(lg)
    }
}










