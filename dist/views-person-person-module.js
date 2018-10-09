(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-person-person-module"],{

/***/ "./src/app/directives/safe.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/directives/safe.pipe.ts ***!
  \*****************************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'safe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonService = /** @class */ (function () {
    function PersonService(http) {
        this.http = http;
        this.API_KEY = 'AIzaSyDKa8xsK7fLSRtdOhZkEcxmp-o5DkFEaLY';
    }
    PersonService.prototype.getPerson = function (name) {
        var api = "https://kgsearch.googleapis.com/v1/entities:search?query=" + name + "&key=" + this.API_KEY + "&limit=1&indent=True";
        return this.http.get(api);
    };
    PersonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PersonService);
    return PersonService;
}());



/***/ }),

/***/ "./src/app/views/person/ahmad-dhani.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/person/ahmad-dhani.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Search Result\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-sm btn\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width:1%\">No.</th>\r\n                                <th>Title</th>\r\n                                <th>Link</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let person of data;\">\r\n                                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\r\n                                    <td>{{person.id}}</td>\r\n                                    <td>{{person.title}}</td>\r\n                                    <td>{{person.link}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Content\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/person/ahmad-dhani.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/person/ahmad-dhani.component.ts ***!
  \*******************************************************/
/*! exports provided: AhmadDhaniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AhmadDhaniComponent", function() { return AhmadDhaniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AhmadDhaniComponent = /** @class */ (function () {
    function AhmadDhaniComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    AhmadDhaniComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    AhmadDhaniComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("ahmad dhani").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Ahmad Dhani",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Ahmad Dhani",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    AhmadDhaniComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    AhmadDhaniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-ahmad-dhani",
            template: __webpack_require__(/*! ./ahmad-dhani.component.html */ "./src/app/views/person/ahmad-dhani.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], AhmadDhaniComponent);
    return AhmadDhaniComponent;
}());



/***/ }),

/***/ "./src/app/views/person/arnold.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/person/arnold.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Search Result\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-sm btn\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width:1%\">No.</th>\r\n                                <th>Title</th>\r\n                                <th>Link</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let person of data;\">\r\n                                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\r\n                                    <td>{{person.id}}</td>\r\n                                    <td>{{person.title}}</td>\r\n                                    <td>{{person.link}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Content\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/person/arnold.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/person/arnold.component.ts ***!
  \**************************************************/
/*! exports provided: ArnoldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArnoldComponent", function() { return ArnoldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ArnoldComponent = /** @class */ (function () {
    function ArnoldComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    ArnoldComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    ArnoldComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("arnold schwarzenegger").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Arnold Schwarzenegger",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Arnold Schwarzenegger",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    ArnoldComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    ArnoldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-arnold",
            template: __webpack_require__(/*! ./arnold.component.html */ "./src/app/views/person/arnold.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], ArnoldComponent);
    return ArnoldComponent;
}());



/***/ }),

/***/ "./src/app/views/person/iwan-fals.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/person/iwan-fals.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Search Result\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-sm btn\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width:1%\">No.</th>\r\n                                <th>Title</th>\r\n                                <th>Link</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let person of data;\">\r\n                                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\r\n                                    <td>{{person.id}}</td>\r\n                                    <td>{{person.title}}</td>\r\n                                    <td>{{person.link}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Content\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/person/iwan-fals.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/person/iwan-fals.component.ts ***!
  \*****************************************************/
/*! exports provided: IwanFalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IwanFalsComponent", function() { return IwanFalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IwanFalsComponent = /** @class */ (function () {
    function IwanFalsComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    IwanFalsComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    IwanFalsComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("iwan fals").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Iwan Fals",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Iwan Fals",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    IwanFalsComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    IwanFalsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-iwan-fals",
            template: __webpack_require__(/*! ./iwan-fals.component.html */ "./src/app/views/person/iwan-fals.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], IwanFalsComponent);
    return IwanFalsComponent;
}());



/***/ }),

/***/ "./src/app/views/person/person-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/person/person-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PersonRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonRoutingModule", function() { return PersonRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tom_cruise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tom-cruise.component */ "./src/app/views/person/tom-cruise.component.ts");
/* harmony import */ var _taylor_swift_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taylor-swift.component */ "./src/app/views/person/taylor-swift.component.ts");
/* harmony import */ var _arnold_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arnold.component */ "./src/app/views/person/arnold.component.ts");
/* harmony import */ var _iwan_fals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iwan-fals.component */ "./src/app/views/person/iwan-fals.component.ts");
/* harmony import */ var _slank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slank.component */ "./src/app/views/person/slank.component.ts");
/* harmony import */ var _ahmad_dhani_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ahmad-dhani.component */ "./src/app/views/person/ahmad-dhani.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: "",
        data: {
            title: "Person"
        },
        children: [
            {
                path: "tom-cruise",
                component: _tom_cruise_component__WEBPACK_IMPORTED_MODULE_2__["TomCruiseComponent"],
                data: {
                    title: "Tom Cruise"
                }
            },
            {
                path: "taylor-swift",
                component: _taylor_swift_component__WEBPACK_IMPORTED_MODULE_3__["TaylorSwiftComponent"],
                data: {
                    title: "Taylor Swift"
                }
            },
            {
                path: "arnold",
                component: _arnold_component__WEBPACK_IMPORTED_MODULE_4__["ArnoldComponent"],
                data: {
                    title: "Arnold Schwarzenegger"
                }
            },
            {
                path: "iwan-fals",
                component: _iwan_fals_component__WEBPACK_IMPORTED_MODULE_5__["IwanFalsComponent"],
                data: {
                    title: "Iwan Fals"
                }
            },
            {
                path: "slank",
                component: _slank_component__WEBPACK_IMPORTED_MODULE_6__["SlankComponent"],
                data: {
                    title: "Slank"
                }
            },
            {
                path: 'ahmad-dhani',
                component: _ahmad_dhani_component__WEBPACK_IMPORTED_MODULE_7__["AhmadDhaniComponent"],
                data: {
                    title: 'Ahmad Dhani'
                }
            }
        ]
    }
];
var PersonRoutingModule = /** @class */ (function () {
    function PersonRoutingModule() {
    }
    PersonRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PersonRoutingModule);
    return PersonRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/person/person.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/person/person.module.ts ***!
  \***********************************************/
/*! exports provided: PersonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonModule", function() { return PersonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tom_cruise_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tom-cruise.component */ "./src/app/views/person/tom-cruise.component.ts");
/* harmony import */ var _taylor_swift_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taylor-swift.component */ "./src/app/views/person/taylor-swift.component.ts");
/* harmony import */ var _arnold_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arnold.component */ "./src/app/views/person/arnold.component.ts");
/* harmony import */ var _iwan_fals_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iwan-fals.component */ "./src/app/views/person/iwan-fals.component.ts");
/* harmony import */ var _slank_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slank.component */ "./src/app/views/person/slank.component.ts");
/* harmony import */ var _ahmad_dhani_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ahmad-dhani.component */ "./src/app/views/person/ahmad-dhani.component.ts");
/* harmony import */ var _directives_safe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/safe.pipe */ "./src/app/directives/safe.pipe.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _person_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./person-routing.module */ "./src/app/views/person/person-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// person component






//safe pipe

// drop down

// person routing module

var PersonModule = /** @class */ (function () {
    function PersonModule() {
    }
    PersonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _person_routing_module__WEBPACK_IMPORTED_MODULE_10__["PersonRoutingModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot()],
            declarations: [
                _directives_safe_pipe__WEBPACK_IMPORTED_MODULE_8__["SafePipe"],
                _tom_cruise_component__WEBPACK_IMPORTED_MODULE_2__["TomCruiseComponent"],
                _taylor_swift_component__WEBPACK_IMPORTED_MODULE_3__["TaylorSwiftComponent"],
                _arnold_component__WEBPACK_IMPORTED_MODULE_4__["ArnoldComponent"],
                _iwan_fals_component__WEBPACK_IMPORTED_MODULE_5__["IwanFalsComponent"],
                _slank_component__WEBPACK_IMPORTED_MODULE_6__["SlankComponent"],
                _ahmad_dhani_component__WEBPACK_IMPORTED_MODULE_7__["AhmadDhaniComponent"]
            ]
        })
    ], PersonModule);
    return PersonModule;
}());



/***/ }),

/***/ "./src/app/views/person/slank.component.html":
/*!***************************************************!*\
  !*** ./src/app/views/person/slank.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Search Result\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-sm btn\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width:1%\">No.</th>\r\n                                <th>Title</th>\r\n                                <th>Link</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let person of data;\">\r\n                                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\r\n                                    <td>{{person.id}}</td>\r\n                                    <td>{{person.title}}</td>\r\n                                    <td>{{person.link}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Content\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/person/slank.component.ts":
/*!*************************************************!*\
  !*** ./src/app/views/person/slank.component.ts ***!
  \*************************************************/
/*! exports provided: SlankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlankComponent", function() { return SlankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SlankComponent = /** @class */ (function () {
    function SlankComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    SlankComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    SlankComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("slank").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Slank",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Slank",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    SlankComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    SlankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-slank",
            template: __webpack_require__(/*! ./slank.component.html */ "./src/app/views/person/slank.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], SlankComponent);
    return SlankComponent;
}());



/***/ }),

/***/ "./src/app/views/person/taylor-swift.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/person/taylor-swift.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Search Result\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <table class=\"table table-bordered table-striped table-hover table-sm btn\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th style=\"width:1%\">No.</th>\r\n                                <th>Title</th>\r\n                                <th>Link</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <ng-container *ngFor=\"let person of data;\">\r\n                                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\r\n                                    <td>{{person.id}}</td>\r\n                                    <td>{{person.title}}</td>\r\n                                    <td>{{person.link}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n    <!--/.row-->\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <i class=\"fa fa-align-justify\"></i> Content\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--/.col-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/person/taylor-swift.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/person/taylor-swift.component.ts ***!
  \********************************************************/
/*! exports provided: TaylorSwiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaylorSwiftComponent", function() { return TaylorSwiftComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaylorSwiftComponent = /** @class */ (function () {
    function TaylorSwiftComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    TaylorSwiftComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    TaylorSwiftComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("taylor swift").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Taylor Swift",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Taylor Swift",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    TaylorSwiftComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    TaylorSwiftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-taylor-swift",
            template: __webpack_require__(/*! ./taylor-swift.component.html */ "./src/app/views/person/taylor-swift.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], TaylorSwiftComponent);
    return TaylorSwiftComponent;
}());



/***/ }),

/***/ "./src/app/views/person/tom-cruise.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/person/tom-cruise.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Search Result\n        </div>\n        <div class=\"card-body\">\n          <table class=\"table table-bordered table-striped table-hover table-sm btn\">\n            <thead>\n              <tr>\n                <th style=\"width:1%\">No.</th>\n                <th>Title</th>\n                <th>Link</th>\n              </tr>\n            </thead>\n            <tbody>\n              <ng-container *ngFor=\"let person of data;\">\n                <tr *ngIf=\"person.link\" (click)=\"loadFrame(person)\">\n                  <td>{{person.id}}</td>\n                  <td>{{person.title}}</td>\n                  <td>{{person.link}}</td>\n                </tr>\n              </ng-container>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n  <!--/.row-->\n\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"fa fa-align-justify\"></i> Content\n        </div>\n        <div class=\"card-body\">\n          <iframe *ngIf=\"link\" id=\"myFrame\" [src]=\"link | safe\" style=\"height:380px;width:100%\"></iframe>\n        </div>\n      </div>\n    </div>\n    <!--/.col-->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/person/tom-cruise.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/person/tom-cruise.component.ts ***!
  \******************************************************/
/*! exports provided: TomCruiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomCruiseComponent", function() { return TomCruiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_person_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/person.service */ "./src/app/services/person.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TomCruiseComponent = /** @class */ (function () {
    function TomCruiseComponent(personService) {
        this.personService = personService;
        this.data = [];
    }
    TomCruiseComponent.prototype.ngOnInit = function () {
        this.getPerson();
    };
    TomCruiseComponent.prototype.getPerson = function () {
        var _this = this;
        this.personService.getPerson("tom cruise").subscribe(function (res) {
            // this.data = res;
            console.log("XXX test", res.itemListElement[0].result.detailedDescription.url, res.itemListElement[0].result.url);
            var url = [
                {
                    id: 1,
                    title: "Wikipedia - Tom Cruise",
                    link: res.itemListElement[0].result.detailedDescription.url
                },
                {
                    id: 2,
                    title: "Website - Tom Cruise",
                    link: res.itemListElement[0].result.url
                }
            ];
            _this.data = url;
        });
    };
    TomCruiseComponent.prototype.loadFrame = function (person) {
        this.link = person.link;
    };
    TomCruiseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-tom-cruise",
            template: __webpack_require__(/*! ./tom-cruise.component.html */ "./src/app/views/person/tom-cruise.component.html"),
            providers: [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]]
        }),
        __metadata("design:paramtypes", [_services_person_service__WEBPACK_IMPORTED_MODULE_1__["PersonService"]])
    ], TomCruiseComponent);
    return TomCruiseComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-person-person-module.js.map