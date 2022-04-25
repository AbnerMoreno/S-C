import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";

@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.scss']
})
export class CreatProductComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  public creat: any = {
    name: '',
    description: '',
    price:''
  };


  ngOnInit(): void {
  }

  newProduct(){
    this.productsService.creatProduct(this.creat).subscribe((resp:any)=>{
    })
  }

}
