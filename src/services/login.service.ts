import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import  { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class LoginService {

	state: Boolean = true;

	constructor(private http: HttpClient, public jwtHelper: JwtHelperService) { }

	isAuthenticated(): Boolean {
		
		const token = localStorage.getItem('token');

		if (this.jwtHelper.isTokenExpired(token)) {
			return true;
		}

		return false;
		
	}

	login(data) {
		return this.http.post('http://localhost:8080/login', data);
	}

}