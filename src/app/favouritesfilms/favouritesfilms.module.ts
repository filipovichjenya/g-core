import { NgModule } from '@angular/core';
import { FavouritesComponent } from './favourites/favourites.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

//material



@NgModule({
  declarations: [FavouritesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: '', component: FavouritesComponent }
    ])
  ]
})
export class FavouritesfilmsModule { }
