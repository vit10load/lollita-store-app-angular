import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

interface Category {
	id: number,
	nome: string
}

@Injectable({
	providedIn: 'root'
})
export class CategoryService {

	API = "http://localhost:8080/";

	constructor(private http: HttpClient) { 

	}

	create(data){
		return this.http.post(this.API+"categorias", data);
	}

	delete(id: number) {
		return this.http.delete(this.API+"categorias/"+id);
	}

	findAll(): Observable<Category[]>{
		return this.http.get<Category[]>(this.API+"categorias");
	}
}
