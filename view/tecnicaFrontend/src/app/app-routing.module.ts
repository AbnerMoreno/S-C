import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "../app/pages/admin/admin.component";
import { PedidosComponent } from "../app/pages/pedidos/pedidos.component";
import { ProductoComponent } from "../app/pages/producto/producto.component";
import { SolicitudesComponent } from "../app/pages/solicitudes/solicitudes.component";

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
  },
  {
    path: 'restaurante',
    component: SolicitudesComponent,
  },
  {
    path: 'pedidos',
    component: PedidosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
