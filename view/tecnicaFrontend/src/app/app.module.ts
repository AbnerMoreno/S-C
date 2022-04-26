import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { AdminComponent } from './pages/admin/admin.component';;
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { CreatProductComponent } from './pages/creat-product/creat-product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminComponent,
    PedidosComponent,
    SolicitudesComponent,
    CreatProductComponent,
    ListProductsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
