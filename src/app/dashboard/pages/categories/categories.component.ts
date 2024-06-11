import { Component } from '@angular/core';
import { CATEGORIES } from '../../../models/database';
import { Category } from '../../../models/category';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class CategoriesComponent {
  public catList: Category[] = CATEGORIES;

}
