import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MovieService } from './movie.service';
import { LogService } from './log.service';
import { AppRoutingModule } from './app-routing.module';
import { FilmsComponent } from './films/films.component';
import { FilmsItemComponent } from './films-item/films-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FilmsComponent,
    FilmsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MovieService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
