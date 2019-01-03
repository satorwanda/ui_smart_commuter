(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-lines-lines-module"],{

/***/ "./src/app/views/lines/lines-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/lines/lines-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LinesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesRoutingModule", function() { return LinesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _managelines_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managelines.component */ "./src/app/views/lines/managelines.component.ts");
/* harmony import */ var _manageprices_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manageprices.component */ "./src/app/views/lines/manageprices.component.ts");
/* harmony import */ var _linesschedulers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./linesschedulers.component */ "./src/app/views/lines/linesschedulers.component.ts");






var routes = [
    {
        path: '',
        data: {
            title: 'Lines'
        },
        children: [
            {
                path: '',
                redirectTo: 'manage-lines'
            },
            {
                path: 'manage-lines',
                component: _managelines_component__WEBPACK_IMPORTED_MODULE_3__["ManageLinesComponent"],
                data: {
                    title: 'Lines management'
                }
            },
            {
                path: 'prices',
                component: _manageprices_component__WEBPACK_IMPORTED_MODULE_4__["ManagePricesComponent"],
                data: {
                    title: 'Lines prices'
                }
            },
            {
                path: 'working-schedulers',
                component: _linesschedulers_component__WEBPACK_IMPORTED_MODULE_5__["LinesSchedulersComponent"],
                data: {
                    title: 'Working schedulers'
                }
            }
        ]
    }
];
var LinesRoutingModule = /** @class */ (function () {
    function LinesRoutingModule() {
    }
    LinesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LinesRoutingModule);
    return LinesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/lines/lines.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/lines/lines.module.ts ***!
  \*********************************************/
/*! exports provided: LinesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesModule", function() { return LinesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _managelines_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managelines.component */ "./src/app/views/lines/managelines.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _manageprices_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manageprices.component */ "./src/app/views/lines/manageprices.component.ts");
/* harmony import */ var _linesschedulers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./linesschedulers.component */ "./src/app/views/lines/linesschedulers.component.ts");
/* harmony import */ var _lines_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lines-routing.module */ "./src/app/views/lines/lines-routing.module.ts");









var LinesModule = /** @class */ (function () {
    function LinesModule() {
    }
    LinesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
                _lines_routing_module__WEBPACK_IMPORTED_MODULE_8__["LinesRoutingModule"],
            ],
            declarations: [
                _managelines_component__WEBPACK_IMPORTED_MODULE_4__["ManageLinesComponent"],
                _manageprices_component__WEBPACK_IMPORTED_MODULE_6__["ManagePricesComponent"],
                _linesschedulers_component__WEBPACK_IMPORTED_MODULE_7__["LinesSchedulersComponent"]
            ]
        })
    ], LinesModule);
    return LinesModule;
}());



/***/ }),

/***/ "./src/app/views/lines/linesschedulers.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/lines/linesschedulers.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/lines/linesschedulers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/lines/linesschedulers.component.ts ***!
  \**********************************************************/
/*! exports provided: LinesSchedulersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesSchedulersComponent", function() { return LinesSchedulersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LinesSchedulersComponent = /** @class */ (function () {
    function LinesSchedulersComponent() {
    }
    LinesSchedulersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./linesschedulers.component.html */ "./src/app/views/lines/linesschedulers.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LinesSchedulersComponent);
    return LinesSchedulersComponent;
}());



/***/ }),

/***/ "./src/app/views/lines/managelines.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/lines/managelines.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Manage lines</p>"

/***/ }),

/***/ "./src/app/views/lines/managelines.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/lines/managelines.component.ts ***!
  \******************************************************/
/*! exports provided: ManageLinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageLinesComponent", function() { return ManageLinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageLinesComponent = /** @class */ (function () {
    function ManageLinesComponent() {
    }
    ManageLinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./managelines.component.html */ "./src/app/views/lines/managelines.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageLinesComponent);
    return ManageLinesComponent;
}());



/***/ }),

/***/ "./src/app/views/lines/manageprices.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/lines/manageprices.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Manage prices</p>"

/***/ }),

/***/ "./src/app/views/lines/manageprices.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/lines/manageprices.component.ts ***!
  \*******************************************************/
/*! exports provided: ManagePricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagePricesComponent", function() { return ManagePricesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManagePricesComponent = /** @class */ (function () {
    function ManagePricesComponent() {
    }
    ManagePricesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./manageprices.component.html */ "./src/app/views/lines/manageprices.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManagePricesComponent);
    return ManagePricesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-lines-lines-module.js.map