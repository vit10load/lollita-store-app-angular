import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import  { Router } from '@angular/router';

@Injectable()
export class LoginService {

	state: Boolean = true;

	constructor(private http: HttpClient) { }

	isAuthenticated(data) {
		//console.log("cehfksfkd");

		return this.http.post('http://localhost:8080/login', data).subscribe(re => {
			console.log(re);
		});
	}

}