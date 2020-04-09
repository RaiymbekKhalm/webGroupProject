import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FinderPageComponent } from './finder-page/finder-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'admin-panel', component: AdminPanelPageComponent},
  {path: 'find', component: FinderPageComponent, children: [
    {path: ':id', component: MovieListComponent}
  ]},
  {path: 'find/movie-detail/:movie_id', component: MovieDetailPageComponent},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
