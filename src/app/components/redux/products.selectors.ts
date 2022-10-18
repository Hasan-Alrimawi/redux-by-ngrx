import { createSelector, createFeatureSelector } from '@ngrx/store';
import { product } from '../../app.component';

export const selectProductsList = createFeatureSelector<ReadonlyArray<product>>('productsList');
export const selectProductsIds = createFeatureSelector<ReadonlyArray<number>>('selectedProducts');

export const selectProducts = createSelector(selectProductsList, selectProductsIds,
    (productsList, selectedProducts) => {
        return selectedProducts.map((prodId) => { return productsList.find((prod) => { return prodId === prod.id }) })
    })
