import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { AdminComponent } from './pages/admin/admin.component';;
import { ProductoComponent } from './pages/producto/producto.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    ProductoComponent,
    PedidosComponent,
    SolicitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
