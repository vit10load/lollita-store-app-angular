import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {ToastrService} from 'ngx-toastr';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: LoginService, public router: Router, public toast: ToastrService) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    const allowedRoles = next.data.allowedRoles;
    const isAuthorized = this.auth.isAuthorized(allowedRoles);

    if (this.auth.isNotAuthenticated() || !isAuthorized) {
      this.toast.error('voçê não tem permissão!', 'Acesso negado!');
      localStorage.removeItem('Perfil');
      this.router.navigate([this.router.url]);
      return false;
    }
    return true;
  }

}
