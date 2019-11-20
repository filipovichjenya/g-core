import {data} from  './data';
import { Injectable } from '@angular/core'


@Injectable()
export class DataService {
    data = data;

    getfilms(){
        return this.data;
    }
}










