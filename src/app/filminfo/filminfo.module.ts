import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {SharedModule} from '../shared/shared.module';


import { FilmComponent } from './film/film.component';
import { TagComponent } from './tag/tag.component';




@NgModule({
  declarations: [FilmComponent, TagComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {path: '',component: FilmComponent}
    ])
  ]
})
export class FilminfoModule { }
