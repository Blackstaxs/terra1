import { Component } from '@angular/core';
import {ProductService} from "./products/products.service";

@Component({
    selector: 'kitchen-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
        
        <div><h1>-------</h1></div>
        <pm-products></pm-products>
        </div>
    `,
    providers: [ProductService]
})

export class AppComponent {
    pageTitle: string = 'Kitchen Orders';

}
