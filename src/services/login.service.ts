import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import  { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginService {

	constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

	//https://backend-lolita.herokuapp.com
	API = 'https://backend-lolita.herokuapp.com/';
	
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'accept': 'application/json'
		})
	};

	isNotAuthenticated(): Boolean {
		
		const token = localStorage.getItem('token');

		if (this.jwtHelper.isTokenExpired(token)) {
			return true;
		}

		return false;
		
	}

	login(data) {
		return this.http.post(this.API+'login', data, this.httpOptions);
	}

	logout(): void {
		localStorage.removeItem('token');
	}

	isAuthorized(allowedRoles: string[]): boolean {
		
		const perfil = localStorage.getItem('Perfil');

		return allowedRoles.includes(perfil);
	}

}