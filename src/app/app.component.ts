import { Component } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs';
import { ProductsListService } from './products-list/service/products-list.service';
import { addProduct, getProductsList, removeProduct } from './redux/products.actions';
import { selectProducts, selectProductsList } from './redux/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  
  title = 'redux-test';
  
  ngOnInit() {
    console.log("bef");
    this.productsService
      .fetchData()
      .subscribe((products) => this.appStore.dispatch(getProductsList({ products })));
    console.log("aft");
  }
  productsListRetrieved$ = this.appStore.select(selectProductsList);
  selectedProductsRetrieved$ = (this.appStore.select(selectProducts)) as Observable<product[]>;
  addProductToList(productId: number) {
    this.appStore.dispatch(addProduct({ productId }));
  }

  removeProductFromList(productId: number) {
    this.appStore.dispatch(removeProduct({ productId }));
  }

  constructor(private productsService: ProductsListService, private appStore: Store) { }
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