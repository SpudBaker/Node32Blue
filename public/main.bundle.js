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

module.exports = "<mat-toolbar color=\"primary\">\n    <span>32 Blue</span>\n    <span class=\"fill-remaining-space\"></span>\n    <span><img src=\"./assets/32BlueLogo.png\" height=\"50\" align=\"bottom\"></span>\n</mat-toolbar>\n<mat-sidenav-container>\n<mat-sidenav mode=\"side\" opened=\"true\" disableClose>\n  <!-- sidenav content -->\n  <div>\n    <a mat-button class=\"button-width\" routerLink = \"home\">Home</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"company\">Company</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"services\">Services</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"technology\">Technology</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"method\">Method</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"examples\">Examples</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"references\">References</a><br/>\n    <a mat-button class=\"button-width\" routerLink = \"contact\">Contact</a><br/>\n  </div>\n</mat-sidenav>\n<!-- primary content -->\n  <div class=\"fill-content\"><router-outlet></router-outlet></div>\n</mat-sidenav-container>\n\n\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__company_company_component__ = __webpack_require__("../../../../../src/app/company/company.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pageNotFound_pageNotFound_component__ = __webpack_require__("../../../../../src/app/pageNotFound/pageNotFound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_services_component__ = __webpack_require__("../../../../../src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__technology_technology_component__ = __webpack_require__("../../../../../src/app/technology/technology.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__method_method_component__ = __webpack_require__("../../../../../src/app/method/method.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__examples_examples_component__ = __webpack_require__("../../../../../src/app/examples/examples.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__references_references_component__ = __webpack_require__("../../../../../src/app/references/references.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_6__company_company_component__["a" /* CompanyComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */] },
    { path: 'technology', component: __WEBPACK_IMPORTED_MODULE_10__technology_technology_component__["a" /* TechnologyComponent */] },
    { path: 'method', component: __WEBPACK_IMPORTED_MODULE_11__method_method_component__["a" /* MethodComponent */] },
    { path: 'examples', component: __WEBPACK_IMPORTED_MODULE_12__examples_examples_component__["a" /* ExamplesComponent */] },
    { path: 'references', component: __WEBPACK_IMPORTED_MODULE_13__references_references_component__["a" /* ReferencesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */] },
    { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__company_company_component__["a" /* CompanyComponent */],
                __WEBPACK_IMPORTED_MODULE_9__services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__technology_technology_component__["a" /* TechnologyComponent */],
                __WEBPACK_IMPORTED_MODULE_11__method_method_component__["a" /* MethodComponent */],
                __WEBPACK_IMPORTED_MODULE_12__examples_examples_component__["a" /* ExamplesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__references_references_component__["a" /* ReferencesComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pageNotFound_pageNotFound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatTabsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/company/company.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n    <mat-tab label=\"32 Blue\">\r\n        <div class=\"tab-content\">\r\n            The limited company was formed in 2017 by Richard Baker, BSc(Hons), Prince 2 practitioner and ITIL expert. \r\n            Richard has worked in IT for 20 years in Blue Chip and SME organisations most recently as a Head of IT. \r\n            <br/>\r\n            <br/>\r\n            The characteristics that set 32 Blue apart are:<br/> \r\n            <ul>\r\n                <li>Customer engagement is key</li>\r\n                <li>Solutions must not be just functionally rich but must also be responsive, available, and trouble free allowing for satisfied and effective users</li>\r\n                <li>Use of enterpise standard open-source technology</li>\r\n                <li>Quality is vital</li>\r\n                <li>A transparent cost and delivery model with appropriate project management</li>\r\n            </ul>\r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"Sales\">\r\n                <div class=\"tab-content\">\r\n                        Please e-mail sales@32blue.co.uk providing contact details.\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"Dynamic\">\r\n                <div class=\"tab-content\">\r\n                        Show large nested table of data\r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Data\">\r\n                <div class=\"tab-content\">\r\n                        Show graphs\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "../../../../../src/app/examples/examples.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-examples',
            template: __webpack_require__("../../../../../src/app/examples/examples.component.html")
        })
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"About\">\r\n            <div class=\"tab-content\">\r\n                Builder of cost effective, reliable applications for the SME market:\r\n                \r\n                    <ul>\r\n                        <li>Designed to run in a browser using the latest technologies</li>\r\n                        <li>Cloud based</li>\r\n                        <li>Optimised for both PC and tablets</li>\r\n                        <li>Highly functional and data driven</li>\r\n                        <li>Secure</li>\r\n                        <li>Without software installation and licensing costs</li>\r\n                        <li>Capable of supporting any number of users simultaneously</li>\r\n                        <li>Optimised for speed and responsiveness allowing for a great user experience</li>\r\n                    </ul>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n            </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Site\">\r\n            <div class=\"tab-content\">\r\n                This site has been created by 32 Blue and is hosted on the Amazon Cloud.<br/><br/>\r\n                Please use the left hand menu to navigate and note the speed of response. \r\n                Choosing the 'examples' menu option deomstrates retreiving data from the server.<br/><br/>\r\n                The web page is designed to view on a PC or tablet.<br/><br/> \r\n            </div>\r\n        </mat-tab>\r\n</mat-tab-group>\r\n    \r\n"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"Process\">\r\n                <div class=\"tab-content\">\r\n                        The methodology used is both lightweight and flexible (dependant on customer needs and project complexity). It can consist of the following stages potentially broken into phases (or 'Sprints');<br/><br/>\r\n                        <ol>\r\n                                <li>Definition of Objectives detailed in a simple document that describes success for the project in business terms.</li>\r\n                                <li>Production of 'Use-Cases', i.e 'who will be using the application and for what purpose'</li>\r\n                                <li>Data analysis - bringing any existing data sources into the solution</li>\r\n                                <li>A 'Wire-frame' protype showing screen flows with example data </li>\r\n                                <li>Build and Test</li>\r\n                                <li>Customer Acceptance</li>\r\n                        </ol>   \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Documentation\">\r\n                <div class=\"tab-content\">\r\n                    Professionally written documentation is a given.<br/><br/>\r\n                    The set of documents can include Functional Specifications / Mock-ups, User Guides, Operational Procedures, Data Definitions.<br><br/>\r\n                    Format can be PDF or alternatively User Guides can be created with the application as on-line help.  \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Commercials\">\r\n                <div class=\"tab-content\">\r\n                        Simple hourly rates are available along with quoted fixed cost. <br/><br/>\r\n                        The prefered commercial arrangement is a reduced upfront cost with an ongoing usage based charge. This ensures both parties have a stake in the success of the project.              \r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"SES\">\r\n                <div class=\"tab-content\">\r\n                        Stuff about SES\r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n    <mat-tab label=\"Analysis\">\r\n        <div class=\"tab-content\">\r\n            A structured approach is used to identify what is required of an application to make it a success. <br/><br/>\r\n            Initially it is gaining an understanding of the current business model and processes and crucially defining a problem statement or opportunity that requires addressing, \r\n            whether that be related to increased automation, data quality, process governance, management control or any other reason.<br/><br/>\r\n            Once a target business model is agreed the functional and data analysis takes place leading to a mock-up with working flows and links. \r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Database\">\r\n        <div class=\"tab-content\">\r\n            Strong database design is key to ensuring a clearly defined structure that avoids duplicity ('one version of truth'), ensures consistancy, \r\n            is performant, and can be readily interrogated. <br/><br/>\r\n            Data migration from existing systems can be undertaken whether a relational database or text files / spreadsheets or any other source. <br/><br/>\r\n            Data cleaning and transformation is also possible.\r\n        </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Web\">\r\n        <div class=\"tab-content\">\r\n            Web applications can become inordinately complex if not built and designed correctly. \r\n            32 Blue uses the most modern framework available allowing for levels of functionality and complexity \r\n            that would have been considered impossible without a serious budget only a few years ago.<br/><br/>\r\n            Use of industry standard Google based components ensures a slick user experience.    \r\n        </div>\r\n    </mat-tab>\r\n</mat-tab-group>"

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

module.exports = "<mat-tab-group class=\"demo-tab-group\">\r\n        <mat-tab label=\"Database\">\r\n                <div class=\"tab-content\">\r\n                        32 Blue by default will use an open source MySql database (or a derivative) located on the Amazon cloud.\r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Web\">\r\n                <div class=\"tab-content\">\r\n                        <br/><br/>\r\n                        32 Blue utilises a Single Page Architecture (SPA) built with the Angular framework allowing for rich, responsive, and complex web applications.<br/><br/>   \r\n                        Presentation is kept separate from business logic and re-useable RESTful data services are utilised to connect to the database.<br/><br/>\r\n                        Node.js is the dominant open source Javascript runtime for servers and has become an industry standard for hosting web applications and services.<br/><br/>\r\n                        A secure password mechanism with users defined into roles can built into an applicaton.\r\n                        Alternatively it is possible to integrate with 3rd party authentication services like Google or Facebook.\r\n                \r\n                </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Hosting\">\r\n                <div class=\"tab-content\">\r\n                        Deployed applications are hosted on Amazon cloud (at a minimal ongoing cost) bringing large enterprise levels of \r\n                        availability, performance and operational support including back-ups.<br/><br/>\r\n                        Users of 32 Blue applications do not require to host any hardware other than the PC or tablet with internet access. \r\n                        Similarly there are no software requirements other than a modern Internet Browser (e.g Chrome, Internet Explorer, Edge, or Firefox)  \r\n                </div>\r\n        </mat-tab>\r\n</mat-tab-group>\r\n                        \r\n"

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