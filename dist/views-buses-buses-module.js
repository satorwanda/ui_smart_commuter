(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-buses-buses-module"],{

/***/ "./src/app/views/buses/buses-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/buses/buses-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BusesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesRoutingModule", function() { return BusesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newbus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newbus.component */ "./src/app/views/buses/newbus.component.ts");
/* harmony import */ var _managebuses_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managebuses.component */ "./src/app/views/buses/managebuses.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Buses'
        },
        children: [
            {
                path: '',
                redirectTo: 'manage-buses'
            },
            {
                path: 'new-bus',
                component: _newbus_component__WEBPACK_IMPORTED_MODULE_3__["NewBusComponent"],
                data: {
                    title: 'New Bus'
                }
            },
            {
                path: 'manage-buses',
                component: _managebuses_component__WEBPACK_IMPORTED_MODULE_4__["ManageBusesComponent"],
                data: {
                    title: 'Buses Management'
                }
            }
        ]
    }
];
var BusesRoutingModule = /** @class */ (function () {
    function BusesRoutingModule() {
    }
    BusesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BusesRoutingModule);
    return BusesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/buses/buses.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/buses/buses.module.ts ***!
  \*********************************************/
/*! exports provided: BusesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusesModule", function() { return BusesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newbus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newbus.component */ "./src/app/views/buses/newbus.component.ts");
/* harmony import */ var _managebuses_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managebuses.component */ "./src/app/views/buses/managebuses.component.ts");
/* harmony import */ var _buses_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buses-routing.module */ "./src/app/views/buses/buses-routing.module.ts");




//new bus

//Manage buses


var BusesModule = /** @class */ (function () {
    function BusesModule() {
    }
    BusesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _buses_routing_module__WEBPACK_IMPORTED_MODULE_6__["BusesRoutingModule"],
            ],
            declarations: [
                _newbus_component__WEBPACK_IMPORTED_MODULE_4__["NewBusComponent"],
                _managebuses_component__WEBPACK_IMPORTED_MODULE_5__["ManageBusesComponent"]
            ]
        })
    ], BusesModule);
    return BusesModule;
}());



/***/ }),

/***/ "./src/app/views/buses/managebuses.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/buses/managebuses.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header\">\r\n              <i class=\"fa fa-bus\"></i> All buses\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <table class=\"table table-bordered table-striped table-sm\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No</th>\r\n                    <th>Date registered</th>\r\n                    <th>Plate Number</th>\r\n                    <th>Seats</th>\r\n                    <th>Type</th>\r\n                    <th>Make</th>\r\n                    <th colspan=\"2\">Modify</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td></td>\r\n                    <td style=\"text-align:center\"><i class=\"fa fa-pencil\"></i></td>\r\n                    <td style=\"text-align:center\"><i class=\"fa fa-remove\"></i></td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <nav>\r\n                <ul class=\"pagination\">\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                  <li class=\"page-item active\">\r\n                    <a class=\"page-link\" href=\"#\">1</a>\r\n                  </li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                </ul>\r\n              </nav>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!--/.col-->\r\n      </div>"

/***/ }),

/***/ "./src/app/views/buses/managebuses.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/buses/managebuses.component.ts ***!
  \******************************************************/
/*! exports provided: ManageBusesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBusesComponent", function() { return ManageBusesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageBusesComponent = /** @class */ (function () {
    function ManageBusesComponent() {
    }
    ManageBusesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./managebuses.component.html */ "./src/app/views/buses/managebuses.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageBusesComponent);
    return ManageBusesComponent;
}());



/***/ }),

/***/ "./src/app/views/buses/newbus.component.html":
/*!***************************************************!*\
  !*** ./src/app/views/buses/newbus.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>NEW BUS REGISTRATION </strong>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" class=\"form-horizontal\">\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-2 col-form-label\" for=\"bus-make\">Bus Make</label>\r\n                <div class=\"col-md-4\">\r\n                  <select id=\"bus-make\" name=\"bus-make\" class=\"form-control\">\r\n                        <option value=\"\" disabled>--Select make--</option>\r\n                        <option value=\"\">Bus Make</option>\r\n                        \r\n                    </select>\r\n                </div>\r\n                <label class=\"col-md-2 col-form-label\" for=\"bus-type\">Bus Type</label>\r\n                <div class=\"col-md-4\">\r\n                        <select id=\"bus-type\" name=\"bus-type\" class=\"form-control\">\r\n                                <option value=\"\" disabled>--Select type--</option>\r\n                                <option value=\"\">Bus type</option>\r\n                                \r\n                            </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-2 col-form-label\" for=\"bus-seats\">Number of seats</label>\r\n                <div class=\"col-md-4\">\r\n                  <input type=\"number\" id=\"bus-seats\" name=\"bus-seats\" class=\"form-control\" placeholder=\"Bus seats\" autocomplete=\"bus-seats\">\r\n                  </div>\r\n                  <label class=\"col-md-2 col-form-label\" for=\"Plate-number\">Plate number</label>\r\n                  <div class=\"col-md-4\">\r\n                    <input type=\"text\" id=\"Plate-number\" name=\"plate\" class=\"form-control\" placeholder=\"Enter Plate number\" autocomplete=\"plate-number\">\r\n                </div>\r\n              </div>\r\n              \r\n            </form>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n            <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n          </div>\r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/views/buses/newbus.component.ts":
/*!*************************************************!*\
  !*** ./src/app/views/buses/newbus.component.ts ***!
  \*************************************************/
/*! exports provided: NewBusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBusComponent", function() { return NewBusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewBusComponent = /** @class */ (function () {
    function NewBusComponent() {
    }
    NewBusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./newbus.component.html */ "./src/app/views/buses/newbus.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewBusComponent);
    return NewBusComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-buses-buses-module.js.map