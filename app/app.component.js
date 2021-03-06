"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var products_service_1 = require("./products/products.service");
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = 'Kitchen Orders';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'kitchen-app',
        template: "\n        <div><h1>{{pageTitle}}</h1>\n        \n        <div><h1>-------</h1></div>\n        <pm-products></pm-products>\n        </div>\n    ",
        providers: [products_service_1.ProductService]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map