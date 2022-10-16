import { Component, EventEmitter, Input, Output } from '@angular/core';
import { product } from '../app.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent{

  @Input()
  productsList: ReadonlyArray<product> | null = [];
  
  @Output()
  add: EventEmitter<number> = new EventEmitter();
}

