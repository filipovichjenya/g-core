import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'info', loadChildren: () => import(`./filminfo/filminfo.module`).then(m => m.FilminfoModule) },
  { path: 'favourites', loadChildren: () => import(`./favouritesfilms/favouritesfilms.module`).then(m => m.FavouritesfilmsModule) },
  { path: '', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
