import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';




@Injectable()
export class LangService {

    private currentLangSubject = new BehaviorSubject(localStorage.getItem('currentLang'));
    lang = this.currentLangSubject.asObservable();
    

    //инициализыция языка по умолчанию
    init(){
        if(!this.currentLangValue) {
            localStorage.setItem('currentLang', 'en');
            this.currentLangSubject.next('en');
        }
    }
    //получить текущий язык
    get currentLangValue() {
        return this.currentLangSubject.value;
      }
    // в кнопку смены языка
    changeLang(lg){
        this.currentLangSubject.next(lg)
    }
}










