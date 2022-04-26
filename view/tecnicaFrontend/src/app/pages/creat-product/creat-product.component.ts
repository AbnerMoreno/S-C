import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products/products.service";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-creat-product',
  templateUrl: './creat-product.component.html',
  styleUrls: ['./creat-product.component.scss']
})
export class CreatProductComponent implements OnInit {

  constructor(private productsService:ProductsService, private toastr: ToastrService) { }

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
