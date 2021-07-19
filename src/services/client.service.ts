import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
	providedIn: 'root'
})
export class ClientService {

    constructor(private http: HttpClient) { }

    API = 'https://backend-lolita.herokuapp.com/';

    httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'accept': 'application/json'
		})
	};


    create(data){
		return this.http.post(this.API+"clientes", data, this.httpOptions);
	}

	delete(id: number) {
		return this.http.delete(this.API+"clientes/"+id,this.httpOptions);
	}

	findAll(): Observable<Client[]>{
		return this.http.get<Client[]>(this.API+"clientes/page",this.httpOptions);
	}
    
}