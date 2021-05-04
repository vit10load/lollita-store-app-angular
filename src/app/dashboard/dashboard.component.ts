import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
	/** Based on the screen size, switch from standard to one column per row */

	public barChartOptions: ChartOptions = {
		responsive: true
	};


	public barChartLabels: Label[] = ['JAN','FEB','MAR','ABR','MAI','JUN','JULL'];
	
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;
	public barChartPlugins = [];

	public barChartData: ChartDataSets[] = [
		{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Pedidos' },
		{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Vendas' }
	];

	constructor(private breakpointObserver: BreakpointObserver) {}

	
}
