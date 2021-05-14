import { HttpResponse } from '@angular/common/http';
import { TryCatchStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoryService } from '../../../../services/category.service';
import  { ToastrService } from 'ngx-toastr';

interface Category {
	id: number,
	nome: string
}


@Component({
	selector: 'app-category',
	templateUrl: './category.component.html',
	styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

	@Input()
	name: string;

	data: Category;

	typesOfShoes: string[] = [];

	catIdent: number[] = [];

	constructor(private categoryService: CategoryService, private toast: ToastrService) { }

	ngOnInit(): void {

		let index = 0;
		this.categoryService.findAll().subscribe(res => {
			console.log(res);

			res.map(response => {
				this.typesOfShoes[index] = response.nome;
				this.catIdent[index] = response.id;
				index++;
			})
		});

	}

	save(): boolean {
		this.data = {
			id: null,
			nome: this.name
		};

		this.categoryService.create(this.data).subscribe(res => {
			if (res === null) {
				this.toast.success("Categoria salva!","Categoria");
				this.ngOnInit();
			}else {
				this.toast.error("Aconteceu algum erro","Categoria");
			}
		});

		return true;
	}

	removeItem(shoes: string) {
		if (this.typesOfShoes.includes(shoes)) {
			
			const indexShoe = this.typesOfShoes.indexOf(shoes);

			this.categoryService.delete(this.catIdent[indexShoe]).subscribe(resp => {
				console.log(resp);
				if (resp == null) {
					this.toast.success("Categoria deletada","Categoria");
				}else {
					this.toast.error("Erro ao deletar categoria","Categoria");
				}
			})
			this.typesOfShoes.splice(indexShoe,1);
		}
	}

	cancel(): void {

	}

}
