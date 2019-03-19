import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { CustomLoadingComponent } from './custom-loading/custom-loading.component';
import { CommonModule } from '@angular/common';
import { DevExtremeModule } from 'devextreme-angular';
import { Service } from './app.service';

@NgModule({
	declarations: [ AppComponent ],
	imports: [ BrowserModule, CommonModule, DevExtremeModule ],
	// entryComponents: [ CustomLoadingComponent ],
	providers: [ Service ],
	bootstrap: [ AppComponent ]
})
export class AppModule {
	// constructor(injector: Injector) {
	// 	const cutomLoadingElement = createCustomElement(
	// 		CustomLoadingComponent,
	// 		{ injector }
	// 	);
	// 	customElements.define('my-loader', cutomLoadingElement);
	// }
	// ngDoBootstrap() {}
}
