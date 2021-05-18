import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button'
import { FooterComponent } from './template/footer/footer.component';
import { ClientComponent } from './components/form/client/client.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';
import { ErrorDialogService } from './error-dialog/errordialog.service';

import { LoginService } from '../services/login.service';
import { CategoryService } from '../services/category.service';

import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from "@angular/material/card";
import { JwtHelperService, JWT_OPTIONS } from "@auth0/angular-jwt";
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';	
import { LayoutModule } from '@angular/cdk/layout';	
import { ChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import {MatSelectModule} from '@angular/material/select';
import { CategoryComponent } from './components/form/category/category.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePtBr);





@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TableComponent,
		FooterComponent,
		ClientComponent,
		ErrorDialogComponent,
		LoginComponent,
		DashboardComponent,
		CategoryComponent,
		ProductFormComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatButtonModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatDialogModule,
		HttpClientModule,
		MatCardModule,
		MatGridListModule,
		MatMenuModule,
		LayoutModule,
		ChartsModule,
		ToastrModule.forRoot(),
		MatSelectModule,
		MatListModule,
		MatFileUploadModule
		
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule
	],
	providers: [
		MatDatepickerModule,
		MatNativeDateModule,
		ErrorDialogService,
		LoginService,
		JwtHelperService,
		CategoryService,
		{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
		{provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
		{provide: LOCALE_ID, useValue: 'pt-BR'}
	],
	entryComponents: [ErrorDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
