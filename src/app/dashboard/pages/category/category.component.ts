import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, GAMES } from '../../../models/database';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models/category';
import { GamesService as GameService } from '../../../services/game.service';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export default class CategoryComponent implements OnInit {
  public category?: Category;
  public catGames: Game[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GameService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (!id || isNaN(Number(id))) this.router.navigate(['/']);
      const categoryId = Number(id);

      // obtener categoria
      this.categoryService.getCategory(categoryId).subscribe(cat => {
        if (!cat) this.router.navigate(['/']);
        this.category = cat;
      });

      // obtener juegos
      this.gameService.getCategoryGames(categoryId).subscribe(games => {
        this.catGames = games;
      });
    });
  }


}
