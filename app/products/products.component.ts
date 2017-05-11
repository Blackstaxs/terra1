import {Component, OnInit} from '@angular/core';
import {Iproduct} from './products';
import {ProductService} from "./products.service";

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']
})

export class ProductComponent implements OnInit{

    pageTitle: string = 'List of orders!';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: Iproduct[] = [];

    constructor(private _productService: ProductService){

    }

    switchImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'List of orders: ' + message;
    }
 }

