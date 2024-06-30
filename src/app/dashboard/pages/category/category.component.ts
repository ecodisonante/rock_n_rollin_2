import { Component, OnInit } from '@angular/core';
import { Game } from '../../../models/game';
import { ActivatedRoute, Router } from '@angular/router';
import { CATEGORIES, GAMES } from '../../../models/database';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models/category';

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');

      if (id && !isNaN(Number(id))) this.category = CATEGORIES.find(c => c.id === Number(id));
      else this.router.navigate(['/']);

      this.catGames = GAMES.filter(g => g.categoryId === this.category?.id);
    });
  }

}
