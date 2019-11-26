import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./home/home.module`).then(m => m.HomeModule) },
  { path: 'info/:id',pathMatch:'full', loadChildren: () => import(`./filminfo/filminfo.module`).then(m => m.FilminfoModule) },
  { path: 'favourites', loadChildren: () => import(`./favouritesfilms/favouritesfilms.module`).then(m => m.FavouritesfilmsModule) },
  { path: '**', redirectTo: ''}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
