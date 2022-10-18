import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data, product } from '../../app.component';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class ProductsListService {

  constructor(private httpService: HttpClient) { }

  fetchData() {
    let products: Observable<Array<product>>;

    return products = this.httpService.get<data>('https://dummyjson.com/products').pipe(map((retrieved) => {
      return retrieved.products || [];
    }))
  }

}
