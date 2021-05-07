import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	
	constructor(public auth: LoginService, public router: Router, public toast: ToastrService){

	}

	canActivate(): boolean {
		/**
		 * Se nao esta autenticado
		 */
		if (this.auth.isNotAuthenticated()) {
			this.toast.error("Acesso negado!", "Ops!");
			this.router.navigate(['']);
			return false;
		}
		this.toast.success("Login efetuado com sucesso!",":)");
		return true;
	}
	
}
