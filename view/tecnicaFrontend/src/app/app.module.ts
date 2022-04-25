import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { AdminComponent } from './pages/admin/admin.component';;
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { HomeComponent } from './pages/home/home/home.component';
import { CreatProductComponent } from './pages/creat-product/creat-product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    PedidosComponent,
    SolicitudesComponent,
    HomeComponent,
    CreatProductComponent,
    ListProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
