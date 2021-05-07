import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ClientComponent } from './components/form/client/client.component';
import { LoginComponent } from "./components/login/login.component";
import {TableComponent} from './components/table/table.component';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

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
		canActivate: [AuthGuard]
	},
	{
		path: "register",
		component: ClientComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
	exports: [RouterModule]
})
export class AppRoutingModule { }
