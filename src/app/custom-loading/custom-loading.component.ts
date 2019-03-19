import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'app-custom-loading',
	templateUrl: './custom-loading.component.html',
	styleUrls: [ './custom-loading.component.css' ],
	encapsulation: ViewEncapsulation.Emulated
})
export class CustomLoadingComponent implements OnInit {
	@Input() name;
	constructor() {}

	ngOnInit() {}
}
