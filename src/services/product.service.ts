import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
	id: number,
	nome: string,
	preco: number,
	categoriaId?: number
}

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	API = "http://localhost:8080/";

	constructor(private http: HttpClient) { 

	}

	create(data){
		return this.http.post(this.API+"produtos/create", data);
	}

	delete(id: number) {
		return this.http.delete(this.API+"produtos/"+id);
	}

	findAll(): Observable<Product[]>{
		return this.http.get<[]>(this.API+"produtos/all");
	}
}
