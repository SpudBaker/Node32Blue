webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\r\n    <span class=\"unSupportedScreenSizes\">\r\n      <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n        <mat-icon>menu</mat-icon>\r\n      </button>\r\n    </span>\r\n    <span class=\"fill-remaining-space\">32 Blue</span>\r\n    <span><img src=\"./assets/32BlueLogo.png\" height=\"50\" align=\"right\"></span>\r\n</mat-toolbar>\r\n<mat-menu #appMenu=\"matMenu\">\r\n        <button mat-menu-item routerLink = \"home\"> Home </button>\r\n        <button mat-menu-item routerLink = \"company\"> Company </button>\r\n        <button mat-menu-item routerLink = \"services\"> Services </button>\r\n        <button mat-menu-item routerLink = \"technology\"> Technology </button>\r\n        <button mat-menu-item routerLink = \"method\"> Method </button>\r\n        <button mat-menu-item routerLink = \"examples\"> Examples </button>\r\n        <button mat-menu-item routerLink = \"references\"> References </button>\r\n        <button mat-menu-item routerLink = \"contact\"> Contact </button>\r\n</mat-menu>\r\n<!-- primary content -->\r\n  <div class=\"fill-content\" class=\"unSupportedScreenSizes\"><router-outlet></router-outlet></div>\r\n  <div class=\"supportedScreenSizes\">This web page is not suitable for viewing on a screen width less than 600 pixels in width</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_Http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pageNotFound_pageNotFound_component__ = __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__technology_technology_component__ = __webpack_require__("../../../../../src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__method_method_component__ = __webpack_require__("../../../../../src/app/method/method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__examples_examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__references_references_component__ = __webpack_require__("../../../../../src/app/references/references.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_8__company_company_component__["a" /* CompanyComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_11__services_services_component__["a" /* ServicesComponent */] },
    { path: 'technology', component: __WEBPACK_IMPORTED_MODULE_12__technology_technology_component__["a" /* TechnologyComponent */] },
    { path: 'method', component: __WEBPACK_IMPORTED_MODULE_13__method_method_component__["a" /* MethodComponent */] },
    { path: 'examples', component: __WEBPACK_IMPORTED_MODULE_14__examples_examples_component__["a" /* ExamplesComponent */] },
    { path: 'references', component: __WEBPACK_IMPORTED_MODULE_15__references_references_component__["a" /* ReferencesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__technology_technology_component__["a" /* TechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__method_method_component__["a" /* MethodComponent */],
                __WEBPACK_IMPORTED_MODULE_14__examples_examples_component__["a" /* ExamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__references_references_component__["a" /* ReferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_Http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n    <mat-tab label=\"32 Blue\">\r\n        <div class=\"tab-content\">\r\n            The limited company was formed in 2017 by Richard Baker, BSc(Hons), Prince 2 practitioner and ITIL expert. \r\n            Richard has worked in IT for 20 years in both Blue Chip and SME organisations most recently as Head of Operations. \r\n            <br/>\r\n            <br/>\r\n            The characteristics that set 32 Blue apart are:<br/> \r\n            <ul>\r\n                <li>Use of enterpise standard open-source technology</li>\r\n                <li>Customer engagement is key</li>\r\n                <li>Solutions must not be just functionally rich but must also be responsive, available, and trouble free allowing for satisfied and effective users</li>\r\n                <li>Quality is vital</li>\r\n                <li>A transparent cost and delivery model with appropriate project management</li>\r\n            </ul>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/company/company.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CompanyComponent = (function () {
    function CompanyComponent() {
    }
    CompanyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-company',
            template: __webpack_require__("../../../../../src/app/company/company.component.html")
        })
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"Sales\">\r\n                <div class=\"tab-content\">\r\n                        Please e-mail sales@32blue.co.uk providing contact details.<br/><br/>\r\n\r\n                        Thank you for you interest!\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
        })
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/examples/examples.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"Overview\">\r\n        `       <div class=\"tab-content\">\r\n                        Selecting the 'Airports' tab will demonstrate sample data being retreived from a database on the cloud server.<br/><br/>\r\n                        By default airports in the UK are listed. Use the dropdown to select another country (e.g Ukraine) noting fast response times resulting from the lightweight architecture. <br/><br/>\r\n                        In reality this is an example of poor design as far too much data can be returned. For example selecting the United States results in a list of circa 5000 records. An optimised search mechansim is a better solution. However for demonstration purposes all 5000 records will be presented albeit with a slower response time (circa 10 seconds on 4G network connection).<br/><br/>\r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Airports\">\r\n                <div class=\"tab-content\">\r\n                        <div align='center'>\r\n                                <mat-form-field>\r\n                                        <mat-select (MatSelectChange)=\"callAirportsService()\" placeholder=\"Country\" [(ngModel)]='selectedCountry'(ngModelChange)=\"countryChange()\">\r\n                                                <mat-option *ngFor=\"let country of getCountries()\" value={{country.code}}>\r\n                                                        {{ country.name }}\r\n                                                </mat-option>\r\n                                        </mat-select>\r\n                                </mat-form-field>\r\n                                <mat-form-field>\r\n                                        <input matInput (keyup)=\"applyIcaoFilter($event.target.value)\" placeholder=\"ICAO/Name Filter\">\r\n                                </mat-form-field>\r\n                              \r\n                                <mat-table #table [dataSource]=\"dataSource\">\r\n                              \r\n                                  <!-- icao Column -->\r\n                                  <ng-container matColumnDef=\"icao\">\r\n                                    <mat-header-cell *matHeaderCellDef> ICAO </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let element\"> {{element.icao}} </mat-cell>\r\n                                  </ng-container>\r\n                              \r\n                                  <!-- Name Column -->\r\n                                  <ng-container matColumnDef=\"name\">\r\n                                    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n                                  </ng-container>\r\n                              \r\n                                  <!-- City Column -->\r\n                                  <ng-container matColumnDef=\"city\">\r\n                                    <mat-header-cell *matHeaderCellDef> City </mat-header-cell>\r\n                                    <mat-cell *matCellDef=\"let element\"> {{element.city}} </mat-cell>\r\n                                  </ng-container>\r\n                              \r\n                                  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n                                  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n                                </mat-table>\r\n                              </div>\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExamplesComponent = (function () {
    function ExamplesComponent(http) {
        this.http = http;
        this.displayedColumns = ['icao', 'name', 'city'];
        this.inputAltitude = 1000;
        this.baseUrl = 'http://blue32.herokuapp.com';
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */](this.ELEMENT_DATA);
        this.selectedCountry = 'GB';
        this.callAirportsService();
    }
    ExamplesComponent.prototype.applyIcaoFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ExamplesComponent.prototype.countryChange = function () {
        this.callAirportsService();
    };
    ExamplesComponent.prototype.callAirportsService = function () {
        var _this = this;
        var t = this;
        t.dataSource = null;
        return this.http
            .get(this.baseUrl + '/samples/airports/' + '?' + 'countryCode=' + this.selectedCountry + '&' + 'elevation=' + '0')
            .catch(function (e) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["a" /* Observable */].throw(e);
        })
            .subscribe(function (c) {
            t.ELEMENT_DATA = c;
            t.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatTableDataSource */](_this.ELEMENT_DATA);
        });
    };
    ExamplesComponent.prototype.getCountries = function () {
        return countries;
    };
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/examples/examples.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ExamplesComponent);
    return ExamplesComponent;
}());

var countries = [
    { 'name': 'Afghanistan', 'code': 'AF' },
    { 'name': 'Åland Islands', 'code': 'AX' },
    { 'name': 'Albania', 'code': 'AL' },
    { 'name': 'Algeria', 'code': 'DZ' },
    { 'name': 'American Samoa', 'code': 'AS' },
    { 'name': 'AndorrA', 'code': 'AD' },
    { 'name': 'Angola', 'code': 'AO' },
    { 'name': 'Anguilla', 'code': 'AI' },
    { 'name': 'Antarctica', 'code': 'AQ' },
    { 'name': 'Antigua and Barbuda', 'code': 'AG' },
    { 'name': 'Argentina', 'code': 'AR' },
    { 'name': 'Armenia', 'code': 'AM' },
    { 'name': 'Aruba', 'code': 'AW' },
    { 'name': 'Australia', 'code': 'AU' },
    { 'name': 'Austria', 'code': 'AT' },
    { 'name': 'Azerbaijan', 'code': 'AZ' },
    { 'name': 'Bahamas', 'code': 'BS' },
    { 'name': 'Bahrain', 'code': 'BH' },
    { 'name': 'Bangladesh', 'code': 'BD' },
    { 'name': 'Barbados', 'code': 'BB' },
    { 'name': 'Belarus', 'code': 'BY' },
    { 'name': 'Belgium', 'code': 'BE' },
    { 'name': 'Belize', 'code': 'BZ' },
    { 'name': 'Benin', 'code': 'BJ' },
    { 'name': 'Bermuda', 'code': 'BM' },
    { 'name': 'Bhutan', 'code': 'BT' },
    { 'name': 'Bolivia', 'code': 'BO' },
    { 'name': 'Bosnia and Herzegovina', 'code': 'BA' },
    { 'name': 'Botswana', 'code': 'BW' },
    { 'name': 'Bouvet Island', 'code': 'BV' },
    { 'name': 'Brazil', 'code': 'BR' },
    { 'name': 'British Indian Ocean Territory', 'code': 'IO' },
    { 'name': 'Brunei Darussalam', 'code': 'BN' },
    { 'name': 'Bulgaria', 'code': 'BG' },
    { 'name': 'Burkina Faso', 'code': 'BF' },
    { 'name': 'Burundi', 'code': 'BI' },
    { 'name': 'Cambodia', 'code': 'KH' },
    { 'name': 'Cameroon', 'code': 'CM' },
    { 'name': 'Canada', 'code': 'CA' },
    { 'name': 'Cape Verde', 'code': 'CV' },
    { 'name': 'Cayman Islands', 'code': 'KY' },
    { 'name': 'Central African Republic', 'code': 'CF' },
    { 'name': 'Chad', 'code': 'TD' },
    { 'name': 'Chile', 'code': 'CL' },
    { 'name': 'China', 'code': 'CN' },
    { 'name': 'Christmas Island', 'code': 'CX' },
    { 'name': 'Cocos (Keeling) Islands', 'code': 'CC' },
    { 'name': 'Colombia', 'code': 'CO' },
    { 'name': 'Comoros', 'code': 'KM' },
    { 'name': 'Congo', 'code': 'CG' },
    { 'name': 'Congo, The Democratic Republic of the', 'code': 'CD' },
    { 'name': 'Cook Islands', 'code': 'CK' },
    { 'name': 'Costa Rica', 'code': 'CR' },
    { 'name': 'Cote DIvoire', 'code': 'CI' },
    { 'name': 'Croatia', 'code': 'HR' },
    { 'name': 'Cuba', 'code': 'CU' },
    { 'name': 'Cyprus', 'code': 'CY' },
    { 'name': 'Czech Republic', 'code': 'CZ' },
    { 'name': 'Denmark', 'code': 'DK' },
    { 'name': 'Djibouti', 'code': 'DJ' },
    { 'name': 'Dominica', 'code': 'DM' },
    { 'name': 'Dominican Republic', 'code': 'DO' },
    { 'name': 'Ecuador', 'code': 'EC' },
    { 'name': 'Egypt', 'code': 'EG' },
    { 'name': 'El Salvador', 'code': 'SV' },
    { 'name': 'Equatorial Guinea', 'code': 'GQ' },
    { 'name': 'Eritrea', 'code': 'ER' },
    { 'name': 'Estonia', 'code': 'EE' },
    { 'name': 'Ethiopia', 'code': 'ET' },
    { 'name': 'Falkland Islands (Malvinas)', 'code': 'FK' },
    { 'name': 'Faroe Islands', 'code': 'FO' },
    { 'name': 'Fiji', 'code': 'FJ' },
    { 'name': 'Finland', 'code': 'FI' },
    { 'name': 'France', 'code': 'FR' },
    { 'name': 'French Guiana', 'code': 'GF' },
    { 'name': 'French Polynesia', 'code': 'PF' },
    { 'name': 'French Southern Territories', 'code': 'TF' },
    { 'name': 'Gabon', 'code': 'GA' },
    { 'name': 'Gambia', 'code': 'GM' },
    { 'name': 'Georgia', 'code': 'GE' },
    { 'name': 'Germany', 'code': 'DE' },
    { 'name': 'Ghana', 'code': 'GH' },
    { 'name': 'Gibraltar', 'code': 'GI' },
    { 'name': 'Greece', 'code': 'GR' },
    { 'name': 'Greenland', 'code': 'GL' },
    { 'name': 'Grenada', 'code': 'GD' },
    { 'name': 'Guadeloupe', 'code': 'GP' },
    { 'name': 'Guam', 'code': 'GU' },
    { 'name': 'Guatemala', 'code': 'GT' },
    { 'name': 'Guernsey', 'code': 'GG' },
    { 'name': 'Guinea', 'code': 'GN' },
    { 'name': 'Guinea-Bissau', 'code': 'GW' },
    { 'name': 'Guyana', 'code': 'GY' },
    { 'name': 'Haiti', 'code': 'HT' },
    { 'name': 'Heard Island and Mcdonald Islands', 'code': 'HM' },
    { 'name': 'Holy See (Vatican City State)', 'code': 'VA' },
    { 'name': 'Honduras', 'code': 'HN' },
    { 'name': 'Hong Kong', 'code': 'HK' },
    { 'name': 'Hungary', 'code': 'HU' },
    { 'name': 'Iceland', 'code': 'IS' },
    { 'name': 'India', 'code': 'IN' },
    { 'name': 'Indonesia', 'code': 'ID' },
    { 'name': 'Iran, Islamic Republic Of', 'code': 'IR' },
    { 'name': 'Iraq', 'code': 'IQ' },
    { 'name': 'Ireland', 'code': 'IE' },
    { 'name': 'Isle of Man', 'code': 'IM' },
    { 'name': 'Israel', 'code': 'IL' },
    { 'name': 'Italy', 'code': 'IT' },
    { 'name': 'Jamaica', 'code': 'JM' },
    { 'name': 'Japan', 'code': 'JP' },
    { 'name': 'Jersey', 'code': 'JE' },
    { 'name': 'Jordan', 'code': 'JO' },
    { 'name': 'Kazakhstan', 'code': 'KZ' },
    { 'name': 'Kenya', 'code': 'KE' },
    { 'name': 'Kiribati', 'code': 'KI' },
    { 'name': 'Korea North', 'code': 'KP' },
    { 'name': 'Korea South', 'code': 'KR' },
    { 'name': 'Kuwait', 'code': 'KW' },
    { 'name': 'Kyrgyzstan', 'code': 'KG' },
    { 'name': 'Lao', 'code': 'LA' },
    { 'name': 'Latvia', 'code': 'LV' },
    { 'name': 'Lebanon', 'code': 'LB' },
    { 'name': 'Lesotho', 'code': 'LS' },
    { 'name': 'Liberia', 'code': 'LR' },
    { 'name': 'Libyan Arab Jamahiriya', 'code': 'LY' },
    { 'name': 'Liechtenstein', 'code': 'LI' },
    { 'name': 'Lithuania', 'code': 'LT' },
    { 'name': 'Luxembourg', 'code': 'LU' },
    { 'name': 'Macao', 'code': 'MO' },
    { 'name': 'Macedonia', 'code': 'MK' },
    { 'name': 'Madagascar', 'code': 'MG' },
    { 'name': 'Malawi', 'code': 'MW' },
    { 'name': 'Malaysia', 'code': 'MY' },
    { 'name': 'Maldives', 'code': 'MV' },
    { 'name': 'Mali', 'code': 'ML' },
    { 'name': 'Malta', 'code': 'MT' },
    { 'name': 'Marshall Islands', 'code': 'MH' },
    { 'name': 'Martinique', 'code': 'MQ' },
    { 'name': 'Mauritania', 'code': 'MR' },
    { 'name': 'Mauritius', 'code': 'MU' },
    { 'name': 'Mayotte', 'code': 'YT' },
    { 'name': 'Mexico', 'code': 'MX' },
    { 'name': 'Micronesia', 'code': 'FM' },
    { 'name': 'Moldova', 'code': 'MD' },
    { 'name': 'Monaco', 'code': 'MC' },
    { 'name': 'Mongolia', 'code': 'MN' },
    { 'name': 'Montserrat', 'code': 'MS' },
    { 'name': 'Morocco', 'code': 'MA' },
    { 'name': 'Mozambique', 'code': 'MZ' },
    { 'name': 'Myanmar', 'code': 'MM' },
    { 'name': 'Namibia', 'code': 'NA' },
    { 'name': 'Nauru', 'code': 'NR' },
    { 'name': 'Nepal', 'code': 'NP' },
    { 'name': 'Netherlands', 'code': 'NL' },
    { 'name': 'Netherlands Antilles', 'code': 'AN' },
    { 'name': 'New Caledonia', 'code': 'NC' },
    { 'name': 'New Zealand', 'code': 'NZ' },
    { 'name': 'Nicaragua', 'code': 'NI' },
    { 'name': 'Niger', 'code': 'NE' },
    { 'name': 'Nigeria', 'code': 'NG' },
    { 'name': 'Niue', 'code': 'NU' },
    { 'name': 'Norfolk Island', 'code': 'NF' },
    { 'name': 'Northern Mariana Islands', 'code': 'MP' },
    { 'name': 'Norway', 'code': 'NO' },
    { 'name': 'Oman', 'code': 'OM' },
    { 'name': 'Pakistan', 'code': 'PK' },
    { 'name': 'Palau', 'code': 'PW' },
    { 'name': 'Palestinian Territory', 'code': 'PS' },
    { 'name': 'Panama', 'code': 'PA' },
    { 'name': 'Papua New Guinea', 'code': 'PG' },
    { 'name': 'Paraguay', 'code': 'PY' },
    { 'name': 'Peru', 'code': 'PE' },
    { 'name': 'Philippines', 'code': 'PH' },
    { 'name': 'Pitcairn', 'code': 'PN' },
    { 'name': 'Poland', 'code': 'PL' },
    { 'name': 'Portugal', 'code': 'PT' },
    { 'name': 'Puerto Rico', 'code': 'PR' },
    { 'name': 'Qatar', 'code': 'QA' },
    { 'name': 'Reunion', 'code': 'RE' },
    { 'name': 'Romania', 'code': 'RO' },
    { 'name': 'Russian Federation', 'code': 'RU' },
    { 'name': 'RWANDA', 'code': 'RW' },
    { 'name': 'Saint Helena', 'code': 'SH' },
    { 'name': 'Saint Kitts and Nevis', 'code': 'KN' },
    { 'name': 'Saint Lucia', 'code': 'LC' },
    { 'name': 'Saint Pierre and Miquelon', 'code': 'PM' },
    { 'name': 'Saint Vincent and the Grenadines', 'code': 'VC' },
    { 'name': 'Samoa', 'code': 'WS' },
    { 'name': 'San Marino', 'code': 'SM' },
    { 'name': 'Sao Tome and Principe', 'code': 'ST' },
    { 'name': 'Saudi Arabia', 'code': 'SA' },
    { 'name': 'Senegal', 'code': 'SN' },
    { 'name': 'Serbia and Montenegro', 'code': 'CS' },
    { 'name': 'Seychelles', 'code': 'SC' },
    { 'name': 'Sierra Leone', 'code': 'SL' },
    { 'name': 'Singapore', 'code': 'SG' },
    { 'name': 'Slovakia', 'code': 'SK' },
    { 'name': 'Slovenia', 'code': 'SI' },
    { 'name': 'Solomon Islands', 'code': 'SB' },
    { 'name': 'Somalia', 'code': 'SO' },
    { 'name': 'South Africa', 'code': 'ZA' },
    { 'name': 'South Georgia', 'code': 'GS' },
    { 'name': 'Spain', 'code': 'ES' },
    { 'name': 'Sri Lanka', 'code': 'LK' },
    { 'name': 'Sudan', 'code': 'SD' },
    { 'name': 'Suriname', 'code': 'SR' },
    { 'name': 'Svalbard and Jan Mayen', 'code': 'SJ' },
    { 'name': 'Swaziland', 'code': 'SZ' },
    { 'name': 'Sweden', 'code': 'SE' },
    { 'name': 'Switzerland', 'code': 'CH' },
    { 'name': 'Syrian Arab Republic', 'code': 'SY' },
    { 'name': 'Taiwan, Province of China', 'code': 'TW' },
    { 'name': 'Tajikistan', 'code': 'TJ' },
    { 'name': 'Tanzania, United Republic of', 'code': 'TZ' },
    { 'name': 'Thailand', 'code': 'TH' },
    { 'name': 'Timor-Leste', 'code': 'TL' },
    { 'name': 'Togo', 'code': 'TG' },
    { 'name': 'Tokelau', 'code': 'TK' },
    { 'name': 'Tonga', 'code': 'TO' },
    { 'name': 'Trinidad and Tobago', 'code': 'TT' },
    { 'name': 'Tunisia', 'code': 'TN' },
    { 'name': 'Turkey', 'code': 'TR' },
    { 'name': 'Turkmenistan', 'code': 'TM' },
    { 'name': 'Turks and Caicos Islands', 'code': 'TC' },
    { 'name': 'Tuvalu', 'code': 'TV' },
    { 'name': 'Uganda', 'code': 'UG' },
    { 'name': 'Ukraine', 'code': 'UA' },
    { 'name': 'United Arab Emirates', 'code': 'AE' },
    { 'name': 'United Kingdom', 'code': 'GB' },
    { 'name': 'United States', 'code': 'US' },
    { 'name': 'United States Minor Outlying Islands', 'code': 'UM' },
    { 'name': 'Uruguay', 'code': 'UY' },
    { 'name': 'Uzbekistan', 'code': 'UZ' },
    { 'name': 'Vanuatu', 'code': 'VU' },
    { 'name': 'Venezuela', 'code': 'VE' },
    { 'name': 'Viet Nam', 'code': 'VN' },
    { 'name': 'Virgin Islands, British', 'code': 'VG' },
    { 'name': 'Virgin Islands, U.S.', 'code': 'VI' },
    { 'name': 'Wallis and Futuna', 'code': 'WF' },
    { 'name': 'Western Sahara', 'code': 'EH' },
    { 'name': 'Yemen', 'code': 'YE' },
    { 'name': 'Zambia', 'code': 'ZM' },
    { 'name': 'Zimbabwe', 'code': 'ZW' }
];


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"About\">\r\n            <div class=\"tab-content\">\r\n                32 Blue build cost effective, reliable cloud applications specifically for the SME market.<br/><br/>\r\n                A typical scenario might be to port an existing Access or Excel application which is limited by performance, accessability, or complexity.<br><br>\r\n                Key features of 32 Blue applications are; \r\n\r\n                        <ul>\r\n                            <li>Compatable with all modern browsers and using the latest web technologies as designed by Google.</li>\r\n                            <li>Hosted in the Amazon Cloud</li>\r\n                            <li>Usable on both PC and tablets</li>\r\n                            <li>Data driven and custom functionality capable </li>\r\n                            <li>Secure</li>\r\n                            <li>Without software installation and licensing costs</li>\r\n                            <li>Capable of supporting any number of users simultaneously</li>\r\n                            <li>Optimised for speed and responsiveness allowing for a great user experience</li>\r\n                        </ul>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Site\">\r\n            <div class=\"tab-content\">\r\n                This site has been created by 32 Blue and is hosted on the Amazon Cloud.\r\n                Branding has been deliberately kept to a minimum for a simple, clean, easy to use User Interface.<br/><br/>\r\n                Please use the menu accessed on the top left of the screen for navigation (noting the speed of response). \r\n                Choosing the 'Examples' menu option demonstrates retreiving data from the server.<br/><br/>\r\n                The web page is designed to view on a PC or tablet.<br/><br/> \r\n            </div>\r\n        </mat-tab>\r\n</mat-tab-group>\r\n    \r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/method/method.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"Process\">\r\n                <div class=\"tab-content\">\r\n                        The methodology used is both lightweight and flexible (dependant on customer needs and project complexity). It can consist of the following stages potentially broken into phases (or 'Sprints');<br/><br/>\r\n                        <ol>\r\n                                <li>Definition of Objectives detailed in a simple document that describes success for the project in business terms.</li>\r\n                                <li>Production of 'Use-Cases', i.e 'who will be using the application and for what purpose'</li>\r\n                                <li>Data analysis, including bringing any existing data sources into the solution</li>\r\n                                <li>A 'Wire-frame' protype showing screen flows with example data </li>\r\n                                <li>Build and Test</li>\r\n                                <li>Customer Acceptance</li>\r\n                        </ol>   \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Documentation\">\r\n                <div class=\"tab-content\">\r\n                    Professionally written documentation is a given.<br/><br/>\r\n                    The set of documents can include Functional Specifications / Mock-ups, User Guides, Operational Procedures, Data Definitions.<br><br/>\r\n                    Format can be PDF or alternatively User Guides can be created with the application as on-line help.  \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Commercials\">\r\n                <div class=\"tab-content\">\r\n                        Simple hourly rates are available along with quoted fixed cost. <br/><br/>\r\n                        The prefered commercial arrangement is a reduced upfront cost with an ongoing usage based charge. This ensures both parties have a stake in the success of the project.              \r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/method/method.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MethodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MethodComponent = (function () {
    function MethodComponent() {
    }
    MethodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-method',
            template: __webpack_require__("../../../../../src/app/method/method.component.html")
        })
    ], MethodComponent);
    return MethodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pageNotFound/pageNotFound.component.html":
/***/ (function(module, exports) {

module.exports = "Page not found"

/***/ }),

/***/ "../../../../../src/app/pageNotFound/pageNotFound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.component.html")
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/references/references.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"SES\">\r\n                <div class=\"tab-content\">\r\n                        South East Solutions are a leading corporate surveillance company who approached 32 Blue for a \r\n                        automated solution to reduce time spent analysing videos. Some specific requirements\r\n                        meant off the shelf commercial software was not appropriate. After assessing the requirements it became clear that application performance\r\n                        was particularly important and to that end a proof of concept was sucessfully built to establish speed metrics.<br/><br/>\r\n                        The production application was then built going live in Q2 2017 and since then has performed without incident saving many man hours. \r\n                        An ability to capture output missed when the process was manually undertaken has also been demonstrated. <br/><br/>\r\n\r\n                        A quote from Chris Mills (Owner and Managing Director): \"We are delighted with the final product which is now an important part \r\n                        of our Business Operation. Communication was excellent throughout the project - unusually so for an IT company.\"\r\n\r\n                        \r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/references/references.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferencesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReferencesComponent = (function () {
    function ReferencesComponent() {
    }
    ReferencesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-references',
            template: __webpack_require__("../../../../../src/app/references/references.component.html")
        })
    ], ReferencesComponent);
    return ReferencesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n    <mat-tab label=\"Analysis\">\r\n        <div class=\"tab-content\">\r\n            A structured approach is used to identify what is required of an application to make it a success. <br/><br/>\r\n            First it is important to gain an understanding of the current business model and processes. Then, crucially, a problem statement (or opportunity) is defined.\r\n            This may be related to increased automation, data quality, process governance, management control or any other reason.<br/><br/>\r\n            Once a target business model is agreed the functional and data analysis takes place leading to a mock-up with working flows and links.\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Database\">\r\n        <div class=\"tab-content\">\r\n            Strong database design is key to ensuring a clearly defined structure that avoids duplicity ('one version of truth'), ensures consistancy, \r\n            is performant, and can be readily interrogated. <br/><br/>\r\n            Data migration from existing systems can be undertaken whether a relational database or text files / spreadsheets or any other source. <br/><br/>\r\n            Data cleaning and transformation is also possible.\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Web\">\r\n        <div class=\"tab-content\">\r\n            Web applications can become inordinately complex if not designed correctly. \r\n            32 Blue build with the most modern frameworks available allowing for levels of functionality and complexity \r\n            that would have been considered impossible without an Enterprise level budget only a few years ago.<br/><br/>\r\n            Use of industry standard Google based components ensures a slick user experience.    \r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__("../../../../../src/app/services/services.component.html")
        })
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/technology/technology.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\r\n        <mat-tab label=\"Database\">\r\n                <div class=\"tab-content\">\r\n                        32 Blue applications are built to operate with an open source MySql database (or a derivative) located on the Amazon cloud.<br/><br/>\r\n                        Users with appropriate permissions and knowledge can directly access the database to run queries and extracts.  \r\n\r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Web\">\r\n                <div class=\"tab-content\">\r\n                        <br/><br/>\r\n                        A 'Single Page Architecture' (SPA) built with the Angular framework allows for rich, responsive, and complex web applications.<br/><br/>   \r\n                        Presentation is kept separate from business logic and re-useable RESTful data services are utilised to connect to the database.<br/><br/>\r\n                        Node.js is the dominant open source Javascript runtime for servers and has become an industry standard for hosting web applications and services.<br/><br/>\r\n                        A secure password mechanism with users defined into roles can built into an applicaton.\r\n                        Alternatively it is possible to integrate with 3rd party authentication services like Google or Facebook.\r\n                \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Hosting\">\r\n                <div class=\"tab-content\">\r\n                        Deployed applications are hosted on Amazon cloud (at a minimal ongoing cost) bringing large enterprise levels of \r\n                        availability, performance and operational support including back-ups.<br/><br/>\r\n                        Users of 32 Blue applications do not require to host any hardware. All that is required is a PC or tablet with internet access. \r\n                        Similarly there are no software requirements other than a modern Internet Browser (e.g Chrome, Internet Explorer, Edge, or Firefox).<br/><br/>\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>\r\n                        \r\n"

/***/ }),

/***/ "../../../../../src/app/technology/technology.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnologyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TechnologyComponent = (function () {
    function TechnologyComponent() {
    }
    TechnologyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-technology',
            template: __webpack_require__("../../../../../src/app/technology/technology.component.html")
        })
    ], TechnologyComponent);
    return TechnologyComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map