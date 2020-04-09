import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FinderPageComponent } from './finder-page/finder-page.component';
import { HttpClientModule } from '@angular/common/http'
import { LoginPageComponent } from './login-page/login-page.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailPageComponent } from './movie-detail-page/movie-detail-page.component';
import { AdminPanelPageComponent } from './admin-panel-page/admin-panel-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FinderPageComponent,
    LoginPageComponent,
    MovieListComponent,
    MovieCardComponent,
    MovieDetailPageComponent,
    AdminPanelPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
