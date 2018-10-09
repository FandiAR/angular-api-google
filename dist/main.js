(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/person/person.module": [
		"./src/app/views/person/person.module.ts",
		"views-person-person-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/_nav.ts":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
var navItems = [
    {
        title: true,
        name: "Person List"
    },
    {
        name: "ACTORS",
        url: "/person",
        icon: "icon-user",
        children: [
            {
                name: "International",
                icon: "icon-globe",
                children: [
                    {
                        name: "Tom Cruise",
                        url: "/person/tom-cruise",
                        icon: "icon-people"
                    },
                    {
                        name: "Taylor Swift",
                        url: "/person/taylor-swift",
                        icon: "icon-people"
                    },
                    {
                        name: 'Arnold S',
                        url: '/person/arnold',
                        icon: 'icon-people'
                    }
                ]
            },
            {
                name: "Indonesia",
                icon: "icon-map",
                children: [
                    {
                        name: "Iwan Fals",
                        url: "/person/iwan-fals",
                        icon: "icon-people"
                    },
                    {
                        name: "Slank",
                        url: "/person/slank",
                        icon: "icon-people"
                    },
                    {
                        name: "Ahmad Dhani",
                        url: "/person/ahmad-dhani",
                        icon: "icon-people"
                    }
                ]
            }
        ]
    },
    {
        name: "SCIENTIST",
        url: "/person",
        icon: "icon-emotsmile",
        children: [
            {
                name: "International",
                icon: "icon-globe",
                children: [
                    {
                        name: "Tom Cruise",
                        url: "/person/tom-cruise",
                        icon: "icon-people"
                    },
                    {
                        name: "Taylor Swift",
                        url: "/person/taylor-swift",
                        icon: "icon-people"
                    },
                    {
                        name: "Arnold S",
                        url: "/person/arnold",
                        icon: "icon-people"
                    }
                ]
            },
            {
                name: "Indonesia",
                icon: "icon-map",
                children: [
                    {
                        name: "Iwan Fals",
                        url: "/person/iwan-fals",
                        icon: "icon-people"
                    },
                    {
                        name: "Slank",
                        url: "/person/slank",
                        icon: "icon-people"
                    },
                    {
                        name: "Ahmad Dhani",
                        url: "/person/ahmad-dhani",
                        icon: "icon-people"
                    }
                ]
            }
        ]
    },
    {
        name: "POLITICIAN",
        url: "/person",
        icon: "icon-eyeglass",
        children: [
            {
                name: "International",
                icon: "icon-globe",
                children: [
                    {
                        name: "Tom Cruise",
                        url: "/person/tom-cruise",
                        icon: "icon-people"
                    },
                    {
                        name: "Taylor Swift",
                        url: "/person/taylor-swift",
                        icon: "icon-people"
                    },
                    {
                        name: "Arnold S",
                        url: "/person/arnold",
                        icon: "icon-people"
                    }
                ]
            },
            {
                name: "Indonesia",
                icon: "icon-map",
                children: [
                    {
                        name: "Iwan Fals",
                        url: "/person/iwan-fals",
                        icon: "icon-people"
                    },
                    {
                        name: "Slank",
                        url: "/person/slank",
                        icon: "icon-people"
                    },
                    {
                        name: "Ahmad Dhani",
                        url: "/person/ahmad-dhani",
                        icon: "icon-people"
                    }
                ]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'body',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/angular */ "./node_modules/@coreui/angular/fesm5/coreui-angular.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};

// Import containers

var APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutComponent"]
];

// Import routing module

// Import 3rd party components




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["AppAsideModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["AppBreadcrumbModule"].forRoot(),
                _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["AppFooterModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["AppHeaderModule"],
                _coreui_angular__WEBPACK_IMPORTED_MODULE_6__["AppSidebarModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__["PerfectScrollbarModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_9__["TabsModule"].forRoot(),
                _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ].concat(APP_CONTAINERS),
            providers: [{
                    provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"],
                    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"]
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ "./src/app/containers/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Import Containers

var routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'person',
                loadChildren: './views/person/person.module#PersonModule'
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/containers/default-layout/default-layout.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [fixed]=\"true\" [navbarBrandFull]=\"{src: 'assets/img/brand/errai.png', width: 89, height: 25, alt: 'Errai Logo'}\"\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/errai.png', width: 30, height: 30, alt: 'Errai Logo'}\"\n  [sidebarToggler]=\"'lg'\" [asideMenuToggler]=\"'lg'\">\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar [fixed]=\"true\" [display]=\"'lg'\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"sidebarMinimized\"></app-sidebar-nav>\n    <app-sidebar-minimizer></app-sidebar-minimizer>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n</div>\n<app-footer>\n  <span><a href=\"https://toughcode.blogspot.com\">Vandaime</a> &copy; 2018 creativeLabs.</span>\n  <span class=\"ml-auto\">Powered by <a href=\"https://toughcode.blogspot.com\">Vandaime for Angular</a></span>\n</app-footer>"

/***/ }),

/***/ "./src/app/containers/default-layout/default-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../_nav */ "./src/app/_nav.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DefaultLayoutComponent = /** @class */ (function () {
    function DefaultLayoutComponent() {
        var _this = this;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_1__["navItems"];
        this.sidebarMinimized = true;
        this.element = document.body;
        this.changes = new MutationObserver(function (mutations) {
            _this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
        });
        this.changes.observe(this.element, {
            attributes: true
        });
    }
    DefaultLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./default-layout.component.html */ "./src/app/containers/default-layout/default-layout.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DefaultLayoutComponent);
    return DefaultLayoutComponent;
}());



/***/ }),

/***/ "./src/app/containers/default-layout/index.ts":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "./src/app/containers/default-layout/default-layout.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "./src/app/containers/index.ts":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "./src/app/containers/default-layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ERRAI\errai-pasifik\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map