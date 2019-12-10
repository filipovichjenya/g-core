
import { Pipe, PipeTransform } from '@angular/core';

import { ru } from './TranslationStorage/ru';
import { en } from './TranslationStorage/en';

@Pipe({
    name: 'translate'
})
export class PipeTranslate implements PipeTransform {
    transform(value: string, lang: string, content: string): string {
        let result: string = value;
        switch (lang) {
            case 'ru':
                result = ru[content]
                break;
        
            case 'en':
                result = en[content]
                break;
        }
        return result;
    }
}