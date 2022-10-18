import { createAction, props } from '@ngrx/store'
import { product } from '../../app.component';

export const addProduct = createAction('ADD_PRODUCT', props<{ productId: number }>()
);

export const removeProduct = createAction('REMOVE_PRODUCT', props<{ productId: number }>()
);

export const getProductsList = createAction('GET_BOOKS', props<{ products: ReadonlyArray<product> }>()
);