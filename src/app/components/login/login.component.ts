import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

	constructor(private loginService: LoginService, private toast: ToastrService) {

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

	contact(): void {
		this.toast.warning("Administração!", "Fale diretamente com o administrador, por enquanto ainda nao temos servidor de email dedicado.");
	}

}
