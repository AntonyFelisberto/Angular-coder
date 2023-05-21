import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-read-product',
  templateUrl: './read-product.component.html',
  styleUrls: ['./read-product.component.css']
})
export class ReadProductComponent implements OnInit{

  products!:Product[]

  constructor(private productService:ProductService){}

  ngOnInit(): void {
    this.productService.read().subscribe(
      products => {
        this.products = products
        console.log(this.products)
      }
    )
  }


}
