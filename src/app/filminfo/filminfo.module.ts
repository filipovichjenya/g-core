import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FilmComponent } from './film/film.component';
import { TagComponent } from './tag/tag.component';





@NgModule({
  declarations: [FilmComponent, TagComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',component: FilmComponent}
    ])
  ]
})
export class FilminfoModule { }
