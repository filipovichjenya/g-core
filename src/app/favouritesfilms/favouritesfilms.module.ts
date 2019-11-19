import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites/favourites.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',component: FavouritesComponent}
    ])
  ]
})
export class FavouritesfilmsModule { }
