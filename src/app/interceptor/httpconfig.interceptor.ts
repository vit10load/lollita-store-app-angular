import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import {
	HttpInterceptor,
	HttpRequest,
	HttpResponse,
	HttpHandler,
	HttpEvent,
	HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ErrorDialogService } from '../error-dialog/errordialog.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

	constructor(public errorDialogService: ErrorDialogService, public route: Router, private toast: ToastrService) {

	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token: string = localStorage.getItem('token');

		if (token) {
			request = request.clone(
					{ 
						headers: request.headers.set('Authorization',"Bearer "+token),  	
					}
				);
		}

		request = request.clone({headers: request.headers.set('Access-Control-Allow-Origin', 'origin')})

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {

				if (event instanceof HttpResponse) {

					if (!(event.headers.get("Authorization") == undefined) && event.headers.get("Authorization").includes("Bearer ")) {
						localStorage.setItem("token",event.headers.get("Authorization").replace("Bearer ",""));
						localStorage.setItem("Perfil",event.headers.get("Perfil"));
						this.route.navigate(['home']);
					}
					
				}
				return event;

			}),catchError((error: HttpErrorResponse) => {

				let data = {};

				if (error.status == 201) {
					data = {
						reason: 'Sucesso!',
						status: error.status
					};
					this.toast.error("Tudo certo!!!!", error.statusText);
				}else {
					data = {
						reason: (error.error !== '') ? error.error.message : '',
						status: error.error.status,
					};

					if (error.error.errors != undefined) {
						this.toast.error("Erro e parada inesperada!!!!", error.error.errors[0].message);
					}else {
						this.toast.error("Erro e parada inesperada!!!!");
					}
					
				}

				return throwError(error);
			}));
	}
}