import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

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

	constructor(public errorDialogService: ErrorDialogService, public route: Router) {
		
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token: string = localStorage.getItem('token');


		if (token) {
			request = request.clone({ headers: request.headers.set('Authorization',token) });
		}

		if (!request.headers.has('Content-Type')) {
			request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
		}

		request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

		return next.handle(request).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					
					localStorage.setItem("token",event.headers.get("Authorization"));
					
					console.log("Bearer inserido");

					if (localStorage.getItem("token") != null) {
						this.route.navigate(['home']);
					}
				}

				return event;

			}),catchError((error: HttpErrorResponse) => {

				let data = {};

				data = {
					reason: (error.error !== '') ? error.error.message : '',
					status: error.status
				};

				this.errorDialogService.openDialog(data);

				return throwError(error);
			}));
	}
}