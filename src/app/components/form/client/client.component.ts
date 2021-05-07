import { Component, OnInit } from '@angular/core';

interface Person {
	value: number;
	viewValue: string
}

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

	persons: Person[] = [
		{value: 1, viewValue: 'Pessoa física'},
		{value: 2, viewValue: 'Pessoa Jurídica'}
	];

	constructor() { }

	ngOnInit(): void {
	}

}
