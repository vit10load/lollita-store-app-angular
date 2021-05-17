import {
	Component,
	Input,
	OnInit,
} from '@angular/core';
import { ProductService } from '../../../../services/product.service';
import { CategoryService } from '../../../../services/category.service';
import  { ToastrService } from 'ngx-toastr';
import { formatCurrency } from '@angular/common';

interface Product {
	id?: number
	nome: string
	preco: string
	url: string
	categoriaId?: number
}

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
	productName: string[] = [];
	productId: number[] = [];

	@Input()
	nome: string;
	@Input()
	cat: string;
	@Input()
	price: number;

	categoryName: string[] = [];
	categoryId: number[] = [];

	source: string = '';

	object: Product;

	@Input()
	file: File;

	constructor(
		private productService: ProductService,
		private categoryService: CategoryService,
		private toast: ToastrService
	) {}

	ngOnInit(): void {
		let index = 0;
		this.categoryService.findAll().subscribe((resp) => {
			resp.map((data) => {
				this.categoryName[index] = data.nome;
				this.categoryId[index] = data.id;
				index++;
			});
		});
	}

	getTextFromImage(file: File[]) {
		if (file[0] === undefined) {
			this.toast.error("Favor selecionar uma imagem...");
			return;
		}else {
			let fileName = file[0].name;
			console.log("entrou...");

			this.source = "https://cloud-lolita.s3.us-east.cloud-object-storage.appdomain.cloud/"+fileName;
		}
	
	}

	checkSourceUrlFromImage(): boolean {
		
		return (this.source.includes('https') ? true : false);
	}

	getIndexCategoryByName(name: string): number {
		for (let index = 0; index < this.categoryName.length; index++) {
				if (this.categoryName[index] === name) {
						return this.categoryId[index];
						break;
				}
		}
	}

	create() {
		
		let index = this.getIndexCategoryByName(this.cat);
		// {style: 'currency', currency: 'BRL'}).format(this.price)

		if (this.checkSourceUrlFromImage()) {
				this.object = {
					nome: this.nome,
					preco: formatCurrency(this.price,'pt-BR','BRL'),
					url: this.source,
					categoriaId: index
				}
				console.log(this.object);
				/*this.productService.create(this.object).subscribe(res => {
					console.log(res);
				});*/

		}else {
				this.toast.error("Crie a URL da imagem / verifique as informações","Erro ao processar");
		}
	}
}
