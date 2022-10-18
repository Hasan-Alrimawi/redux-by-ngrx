import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';
import { StoreModule } from '@ngrx/store';
import { productsListReducer, selectedProductsReducer } from './components/redux/products.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({productsList: productsListReducer, selectedProducts: selectedProductsReducer}),
    HttpClientModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    SelectedProductsComponent,
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
