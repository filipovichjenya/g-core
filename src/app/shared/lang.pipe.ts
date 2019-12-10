
import { Pipe, PipeTransform } from '@angular/core';

import { ru } from './TranslationStorage/ru';
import { en } from './TranslationStorage/en';

@Pipe({
    name: 'translate'
})
export class PipeTranslate implements PipeTransform {
    transform(value: string, lang: string, contant: string): string {
        let result: string = value;
        switch (lang) {
            case 'ru':
                result = ru[contant]
                break;
        
            case 'en':
                result = en[contant]
                break;
        }
        return result;
    }
}