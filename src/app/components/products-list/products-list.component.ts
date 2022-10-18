import { Component } from '@angular/core';
import { product } from '../../app.component';
import { Store } from '@ngrx/store'
import { selectProductsList } from '../redux/products.selectors';
import { Observable } from 'rxjs';
import { addProduct } from '../redux/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  constructor(private appStore: Store) { }

  //A slice of the store is selected 'productsList'
  productsList$: Observable<readonly product[]> = this.appStore.select(selectProductsList);

  //When the add button is clicked, an "add" action is dispatched
  addProductToList(productId: number) {
    this.appStore.dispatch(addProduct({ productId }));
  }
}

