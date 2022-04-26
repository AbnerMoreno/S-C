import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidateclienteGuard implements CanActivate {
  constructor(private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      var rol:any = localStorage.getItem("rol");
      // roles 1 admin 2 cliente 3 restaurante
      if (rol === "3") {
        this.router.navigate(['/pedidos']);
        return false;
      } else {
        return true;
      }
  }
  
}
