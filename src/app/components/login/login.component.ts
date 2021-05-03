import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hide = true;
	login: LoginService;
	mail: string = '';
	pass: string = '';
	data: Object;

	constructor(private loginService: LoginService) {
		this.login = loginService;
	}

	ngOnInit(): void {
	}

	attemptLogin(): void {
		this.data = {
			email: "vitoro580@gmail.com",
			senha: "1212444"
		};

		this.login.isAuthenticated(this.data);
	}

}
