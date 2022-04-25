import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }
  creatProduct(creat: any){
    return this.http.post(`${environment.url}/api/pedidos/pedidoCreate`,creat);
  }

  listProduct(){
    return this.http.get(`${environment.url}/api/pedidos/pedidotGetList`);
  }

}
