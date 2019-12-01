import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

//material
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: '',component: FavouritesComponent}
    ])
  ]
})
export class FavouritesfilmsModule { }
