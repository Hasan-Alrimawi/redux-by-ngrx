import { Component } from '@angular/core';
import { product } from '../../app.component';
import { Store } from '@ngrx/store';
import { selectProducts } from '../redux/products.selectors';
import { Observable } from 'rxjs';
import { removeProduct } from '../redux/products.actions';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent {

  constructor(private appStore: Store) { }

  selectedProducts$: Observable<readonly product[]> = (this.appStore.select(selectProducts)) as Observable<readonly product[]>;

  trackingById(index: number, element: product) {
    return element.id; //Id can be used as a unique identifier for the product to let angular track only changed values.
  }

  removeProductFromList(productId: number) {
    this.appStore.dispatch(removeProduct({ productId }));
  }
}
