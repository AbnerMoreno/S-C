import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from "../../services/usuario.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public usuario = {
    nombre: '',
    pass: '',
  };

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    // let id = localStorage.getItem("idusuario")
  }

  login(){
    if(this.usuario.nombre != "" || this.usuario.pass != ""){
      this.usuarioService.listProduct(this.usuario).subscribe((resp:any) =>{
        if(resp.status != 0){
          localStorage.setItem("rol", resp.data);
          localStorage.setItem("idusuario", resp.id);
          this.router.navigate(['/']);
        }
      })
    }else{
      alert("debes llenar todos los campos")
    }
  }

}
