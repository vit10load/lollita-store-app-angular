import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	thirdLinkEnabled: boolean = true;

	constructor(private loginService: LoginService,
		 private toast: ToastrService,
		 private router: Router,
		 private location: Location) {

			this.ngOnInit();

		 }

	ngOnInit(): void {
		this.enableButtonLogout(this.router, this.location);
	}


	logOut(): void {
		this.loginService.logout();
		this.router.navigate(['']);
		this.toast.info("Voçê saiu do sistema!","Lolita");
		this.thirdLinkEnabled = false;
	}

	enableButtonLogout(router: Router, location: Location): void {
		router.events.subscribe((val) => {
			console.log(location.path());
			if ((location.path() != '')) {
				this.thirdLinkEnabled = false;
			}else {
				this.thirdLinkEnabled = true;
			}
		});
	}

}
