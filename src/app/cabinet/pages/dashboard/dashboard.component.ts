import { Component, OnDestroy, OnInit } from '@angular/core'
import { AuthService } from '../../../main/shared/services/auth.service'
import { FoundService } from '../../shared/services/found.service'
import { CategoryFundsInterface } from '../../shared/interfaces/categoryFundsInterface'
import { Subscription } from 'rxjs'

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit, OnDestroy {

	fundsList: CategoryFundsInterface[] = []
	fundsSub: Subscription = new Subscription()

	constructor(private authService: AuthService, private foundService: FoundService) {
	}

	ngOnInit(): void {
		this.fundsSub = this.foundService.getAll().subscribe((funds: CategoryFundsInterface[]) => {
			this.fundsList = funds
		})
	}
	
	ngOnDestroy(): void {
		if (this.fundsSub) {
			this.fundsSub.unsubscribe()
		}
	}


}
