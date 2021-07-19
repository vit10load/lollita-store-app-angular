import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import {ProductService} from '../../services/product.service';
import { Label } from 'ng2-charts';

interface Product {
	id?: number;
	nome: string;
	preco: number;
	url: string;
	categoriaId: number;
  }

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	/** Based on the screen size, switch from standard to one column per row */

	public barChartOptions: ChartOptions = {
		responsive: true
	};

	public products: Product[] = [];

	show: Boolean;

	public barChartLabels: Label[] = ['JAN','FEB','MAR','ABR','MAI','JUN','JULL'];
	
	public barChartType: ChartType = 'line';
	public barChartLegend = true;
	public barChartPlugins = [];

	public barChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Pedidos' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Vendas' }
	];

	constructor(private breakpointObserver: BreakpointObserver, private productService: ProductService) {}


	ngOnInit() {
		this.productService.findAll().subscribe(res => {
			if (res.length == 0) {
				this.show = false;
				console.log(this.show)
				return;
			}
			this.products = res;
			this.show = true;
		})
	}

	
}
