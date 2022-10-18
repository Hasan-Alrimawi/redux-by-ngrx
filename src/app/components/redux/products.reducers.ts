import { createReducer, on } from '@ngrx/store'
import { product } from '../../app.component';
import { addProduct, getProductsList, removeProduct } from './products.actions';

export const initialState: ReadonlyArray<product> = []; //initial state that represents the 'productsList' slice of the store.
export const primaryState: ReadonlyArray<number> = []; //primary state that represents the 'selectedProducts' slice of the store.

export const productsListReducer = createReducer(initialState,
    on(getProductsList, (state, { products }) => products));

export const selectedProductsReducer = createReducer(primaryState,
    on(addProduct, (state, { productId }) => {
        if (state.indexOf(productId) > -1)
            return state;
        return [...state, productId];
    }),
    on(removeProduct, (state, { productId }) => state.filter((id) => id != productId))
);