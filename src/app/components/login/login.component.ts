import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	hide = true;

	@Input()
	mail: string = '';
	@Input()
	pass: string = '';

	data: Object;

	constructor(private loginService: LoginService) {

	}

	ngOnInit(): void {
	}

	attemptLogin(): void {

		this.data = {
			email: this.mail,
			senha: this.pass
		};

		this.loginService.login(this.data).subscribe(response => {
			console.log(response);
		});
	}

}
