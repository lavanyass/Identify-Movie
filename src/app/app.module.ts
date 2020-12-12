import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PictureTileComponent } from './picture-tile/picture-tile.component';
import { MovieNameRevealComponent } from './movie-name-reveal/movie-name-reveal.component';
import { IdentifyMovieGameComponent } from './identify-movie-game/identify-movie-game.component';
import { GameRulesComponent } from './game-rules/game-rules.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    PictureTileComponent,
    MovieNameRevealComponent,
    IdentifyMovieGameComponent,
    GameRulesComponent,
    GameResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
