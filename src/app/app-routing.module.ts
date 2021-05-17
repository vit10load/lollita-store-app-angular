import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClientComponent } from './components/form/client/client.component';
import { LoginComponent } from "./components/login/login.component";
import {TableComponent} from './components/table/table.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './components/form/category/category.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';

const routes: Routes = [
	{
		path: "",
		component: LoginComponent
	},
	{
		path: "client/add",
		component: ClientComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "clients",
		component: TableComponent,
		canActivate: [AuthGuard]
	},
	{
		path: "home",
		component: DashboardComponent,
		canActivate: [AuthGuard],
		data: {
			allowedRoles: ['ROLE_ADMIN','ROLE_CLIENTE']
		}
	},
	{
		path: "register",
		component: ClientComponent
	},
	{
		path: "category/add",
		component: CategoryComponent,
		canActivate: [AuthGuard],
		data: {
			allowedRoles: ['ROLE_ADMIN']
		}
	},
	{
		path: "product/add",
		component: ProductFormComponent,
		canActivate: [AuthGuard],
		data: {
			allowedRoles: ['ROLE_ADMIN']
		}
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
