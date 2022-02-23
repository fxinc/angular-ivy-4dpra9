import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core'

declare var ScrollMagic: any
declare var $: any

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.sass'],
})

export class HomePageComponent implements OnInit, OnDestroy, AfterViewInit {

	constructor() {
	}


	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		
	}

	ngOnDestroy(): void {
	}

}
