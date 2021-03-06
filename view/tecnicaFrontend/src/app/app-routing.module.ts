import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "../app/pages/admin/admin.component";
import { PedidosComponent } from "../app/pages/pedidos/pedidos.component";
import { SolicitudesComponent } from "../app/pages/solicitudes/solicitudes.component";
import { ListProductsComponent } from "../app/pages/list-products/list-products.component";
import { CreatProductComponent } from "../app/pages/creat-product/creat-product.component";
import { LoginComponent } from "../app/pages/login/login.component";

import { ValidateclienteGuard } from "./guard/validatecliente.guard";


const routes: Routes = [
  {
    path: '',
    component: ListProductsComponent,
  },
  {
    path: 'Solicitudes',
    component: SolicitudesComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },
  {
    path: 'createPedido',
    component: CreatProductComponent,
    canActivate: [ValidateclienteGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
