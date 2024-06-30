import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 537aa082-561a-4fce-b78f-26ca2d0d66b2'
    })
  }

  private url = "https://firebasestorage.googleapis.com/v0/b/dfs2-1f652.appspot.com/o/category.json?alt=media&token=537aa082-561a-4fce-b78f-26ca2d0d66b2";

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.url);
  }

  getCategory(id: number) {
    return this.http.get<Category[]>(this.url).pipe(
      map((cat: Category[]) => {
        return cat.find(cat => cat.id === id);
      })
    );
  }


  setCategoryList(categoryList: any) {
    console.log(categoryList);
    this.http.post(this.url, categoryList, this.httpOptions).subscribe(
      response => {
        console.log('Categorias guardadas', response);
      },
      error => {
        console.error('Error al guardar categorias', error);
      })
  }
}
