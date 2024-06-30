import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models/category';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export default class CategoriesComponent {

  catList: any;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategoryList().subscribe(cat => {
      this.catList = cat;
    });


  }


  // addCat(){
  //   let nueva = new Category(9, "Test", "/images/catbg.jpg", "blablabla");

  //   this.catList.push(nueva);

  //   this.categoryService.addCategory(this.catList);
  // }

}