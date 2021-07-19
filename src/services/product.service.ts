import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

interface Product {
  id?: number;
  nome: string;
  preco: number;
  url: string;
  categoriaId: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  //https://backend-lolita.herokuapp.com/
  API = 'https://backend-lolita.herokuapp.com/';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      accept: 'application/json',
    }),
  };

  create(data) {
    return this.http.post(this.API + 'produtos/create', data, this.httpOptions);
  }

  delete(id: number) {
    return this.http.delete(this.API + 'produtos/' + id, this.httpOptions);
  }

  findAll(): Observable<Product[]> {
    return this.http.get<[]>(this.API + 'produtos/all', this.httpOptions);
  }
}
