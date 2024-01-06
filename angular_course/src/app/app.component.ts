import { Component, OnInit } from '@angular/core';
import { IProduct } from "./models/product";
import { ProductsService } from "./services/products.service";
import { Observable, tap } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular practice'
  products$: Observable<IProduct[]>
  loading = false

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.products$ = this.productsService.getAll().pipe(
      tap(() => this.loading = false)
    )
  }
}
