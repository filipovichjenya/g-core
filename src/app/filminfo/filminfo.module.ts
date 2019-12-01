import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { FilmComponent } from './film/film.component';
import { TagComponent } from './tag/tag.component';

import {MatIconModule} from '@angular/material/icon'
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [FilmComponent, TagComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild([
      {path: '',component: FilmComponent}
    ])
  ]
})
export class FilminfoModule { }
