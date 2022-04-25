import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {


  public list: any = []; 

  constructor(private  productsService: ProductsService) { }

  ngOnInit(): void {
    this.proveedoresGet();
  }

  proveedoresGet(){
    this.productsService.listProduct().subscribe((resp:any) =>{
      this.list = resp
    });
  }


}
