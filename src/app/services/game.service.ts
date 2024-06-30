import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private url: string = "https://firebasestorage.googleapis.com/v0/b/dfs2-1f652.appspot.com/o/game.json?alt=media&token=0d770748-e6bf-4e66-9013-51de67417bee";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 0d770748-e6bf-4e66-9013-51de67417bee'
    })
  }
  constructor(private http: HttpClient) { }

  getGameList(): Observable<any> {
    return this.http.get(this.url);
  }

  getCategoryGames(category: number){
    return this.http.get<Game[]>(this.url).pipe(
      map((games: Game[]) => {
        return games.filter(game => game.categoryId === category);
      })
    );
  }




}
