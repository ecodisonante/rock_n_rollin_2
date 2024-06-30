import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
  private jsonUrl = 'https://firebasestorage.googleapis.com/v0/b/json-1d383.appspot.com/o/personas.json?alt=media&token=50423a74-8fe0-465a-83a2-d19d8446fb27';

  constructor(private http: HttpClient) { }

  getCategoryList(): Observable<any> {
    return this.http.get(this.url);
  }


}
