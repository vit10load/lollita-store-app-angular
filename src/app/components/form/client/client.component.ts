import { Component, Input, OnInit } from '@angular/core';
import { ClientService } from '../../../../services/client.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

interface Person {
	value: number;
	viewValue: string
}

interface Client {
    id?: number,
    nome: String,
    email: String,
    cpfOuCnpj: String,
    logradouro: String,
    numero: String,
    tipo: number,
    senha: String,
    cep: String
    telefone1: String
}

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

	@Input()
	novoCliente: Client = {
		nome: "",
		email: "",
		cpfOuCnpj: "",
		logradouro: "",
		numero: "",
		tipo: null,
		senha: "",
		cep: "",
		telefone1: ""
	};

	hide: boolean = true;

	confirmarSenha: String;

	persons: Person[] = [
		{value: 1, viewValue: 'Pessoa física'},
		{value: 2, viewValue: 'Pessoa Jurídica'}
	];

	constructor(private client: ClientService, private toast: ToastrService, private router: Router) { 

	}

	ngOnInit(): void {
	}

	addCliente() {
		if(this.verifyPasswordEquals(this.novoCliente.senha, this.confirmarSenha)){
			this.client.create(this.novoCliente).subscribe(res => {
				this.toast.success('Bem vindo a lolita! '+this.novoCliente.nome,"Ok");
				Object.assign(this.novoCliente, {});
			});
			this.router.navigate(['/']);
			return;
		}

		this.toast.error('Senha não confere...',"Erro de validação");
		
	}

	verifyPasswordEquals(password: String, confirmPassword: String): boolean{
		return (password==confirmPassword) ? true : false;
	}

}
