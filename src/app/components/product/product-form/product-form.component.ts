import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';

interface Product {
	id?: number,
	nome: string,
	preco: number,
	categoriaId?: number
}

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

	productName: string[] = [];
	productId: number[] = [];

	
	categoryName: string[] = [];
	categoryId: number[] =[];

	object: Product;

	constructor(private productService: ProductService, private categoryService: CategoryService) { }

	ngOnInit(): void {
		let index = 0;
		this.categoryService.findAll().subscribe(resp => {
			resp.map(data => {
				this.categoryName[index] = data.nome;
				this.categoryId[index] = data.id;
				index++;
			});
		});
	}

}
