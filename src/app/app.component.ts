import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { ProductsListService } from './services/product-list/products-list.service';
import { getProductsList, removeProduct } from './components/redux/products.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'redux-test';

  constructor(private productsService: ProductsListService, private appStore: Store) { }

  //On initialization to get the data needed and put it in the store at the startup. 
  ngOnInit() {
    this.productsService
      .fetchData()
      .subscribe((products) => this.appStore.dispatch(getProductsList({ products })));
  }

  removeProductFromList(productId: number) {
    this.appStore.dispatch(removeProduct({ productId }));
  }

}


export interface data {
  limit: number,
  products: [{
    id: number,
    title: string;
    price: number
  }],
  skip: number,
  total: number
}

export interface product {
  id: number,
  title: string;
  price: number
}