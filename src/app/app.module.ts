import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './products-list/products-list.component';
import { SelectedProductsComponent } from './selected-products/selected-products.component';
import { StoreModule } from '@ngrx/store';
import { productsListReducer, selectedProductsReducer } from './redux/products.reducers';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({productsList: productsListReducer, selectedProducts: selectedProductsReducer}),
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    SelectedProductsComponent,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
