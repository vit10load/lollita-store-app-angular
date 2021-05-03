import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';
import { ErrorDialogComponent } from './error-dialog/errordialog.component';
import { ErrorDialogService } from './error-dialog/errordialog.service';
import { LoginService } from '../services/login.service';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule } from "@angular/material/card";





@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		TableComponent,
		FooterComponent,
		ClientComponent,
		ErrorDialogComponent,
		LoginComponent
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
		MatCardModule
		
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		FormsModule,
		ReactiveFormsModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule
	],
	providers: [
		MatDatepickerModule,
		MatNativeDateModule,
		ErrorDialogService,
		LoginService,
		{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true}
	],
	entryComponents: [ErrorDialogComponent],
	bootstrap: [AppComponent]
})
export class AppModule { }
