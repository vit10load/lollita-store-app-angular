import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './components/form/client/client.component';
import {TableComponent} from './components/table/table.component';

const routes: Routes = [
	{
		path: "client/add",
		component: ClientComponent
	},
	{
		path: "clients",
		component: TableComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
