import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { product } from '../app.component';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.css']
})
export class SelectedProductsComponent {

  @Input()
  selectedProducts: ReadonlyArray<product> | null = [];
  @Output()
  remove:EventEmitter<number> = new EventEmitter();

  trackingById(index:number, element: product){
    return element.id;
  }
}
