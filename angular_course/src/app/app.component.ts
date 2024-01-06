import { Component, Input } from '@angular/core';
import {IProduct} from "./models/product";
import { products as data } from "./components/data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() product: IProduct
  title = 'angular practice'
  products: IProduct[] = data
}
