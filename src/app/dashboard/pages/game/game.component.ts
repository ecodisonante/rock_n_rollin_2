import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from '../../../models/game';
import { GAMES } from '../../../models/database';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export default class GameComponent implements OnInit {
  public game?: Game;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id && !isNaN(Number(id))) this.game = GAMES.find(g => g.id === Number(id));
      else this.router.navigate(['/']);

    });
  }
}
