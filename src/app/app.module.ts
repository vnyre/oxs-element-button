import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button.component';

@NgModule({
    declarations: [
        ButtonComponent,
    ],
    imports: [
        BrowserModule
    ],
    entryComponents: [ButtonComponent],
    providers: []
})
export class AppModule {
    constructor(private injector: Injector) {
      const customElement = createCustomElement(ButtonComponent, {injector: this.injector});
      customElements.define('oxs-element-button', customElement); }

    ngDoBootstrap() { }
}




