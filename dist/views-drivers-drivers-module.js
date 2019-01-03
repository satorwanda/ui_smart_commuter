(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-drivers-drivers-module"],{

/***/ "./src/app/views/drivers/drivers-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/drivers/drivers-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DriversRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversRoutingModule", function() { return DriversRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newdriver_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newdriver.component */ "./src/app/views/drivers/newdriver.component.ts");
/* harmony import */ var _managedrivers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managedrivers.component */ "./src/app/views/drivers/managedrivers.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Drivers'
        },
        children: [
            {
                path: '',
                redirectTo: 'manage-drivers'
            },
            {
                path: 'new-driver',
                component: _newdriver_component__WEBPACK_IMPORTED_MODULE_3__["NewDriverComponent"],
                data: {
                    title: 'New Driver'
                }
            },
            {
                path: 'manage-drivers',
                component: _managedrivers_component__WEBPACK_IMPORTED_MODULE_4__["ManageDriversComponent"],
                data: {
                    title: 'Drivers Management'
                }
            }
        ]
    }
];
var DriversRoutingModule = /** @class */ (function () {
    function DriversRoutingModule() {
    }
    DriversRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DriversRoutingModule);
    return DriversRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/drivers/drivers.module.ts":
/*!*************************************************!*\
  !*** ./src/app/views/drivers/drivers.module.ts ***!
  \*************************************************/
/*! exports provided: DriversModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriversModule", function() { return DriversModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newdriver_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newdriver.component */ "./src/app/views/drivers/newdriver.component.ts");
/* harmony import */ var _managedrivers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./managedrivers.component */ "./src/app/views/drivers/managedrivers.component.ts");
/* harmony import */ var _drivers_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drivers-routing.module */ "./src/app/views/drivers/drivers-routing.module.ts");




//new bus

//Manage buses


var DriversModule = /** @class */ (function () {
    function DriversModule() {
    }
    DriversModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _drivers_routing_module__WEBPACK_IMPORTED_MODULE_6__["DriversRoutingModule"],
            ],
            declarations: [
                _newdriver_component__WEBPACK_IMPORTED_MODULE_4__["NewDriverComponent"],
                _managedrivers_component__WEBPACK_IMPORTED_MODULE_5__["ManageDriversComponent"]
            ]
        })
    ], DriversModule);
    return DriversModule;
}());



/***/ }),

/***/ "./src/app/views/drivers/managedrivers.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/drivers/managedrivers.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-lg-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          <i class=\"fa fa-male\"></i> All drivers\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <table class=\"table table-bordered table-striped table-sm\">\r\n            <thead>\r\n              <tr>\r\n                <th>No</th>\r\n                <th>Names</th>\r\n                <th>ID Number</th>\r\n                <th>Driving License</th>\r\n                <th>Phone number</th>\r\n                <th>Address</th>\r\n                <th colspan=\"2\">Modify</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td style=\"text-align:center\"><i class=\"fa fa-pencil\"></i></td>\r\n                <td style=\"text-align:center\"><i class=\"fa fa-remove\"></i></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <nav>\r\n            <ul class=\"pagination\">\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n              <li class=\"page-item active\">\r\n                <a class=\"page-link\" href=\"#\">1</a>\r\n              </li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n              <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n            </ul>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--/.col-->\r\n  </div>"

/***/ }),

/***/ "./src/app/views/drivers/managedrivers.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/drivers/managedrivers.component.ts ***!
  \**********************************************************/
/*! exports provided: ManageDriversComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageDriversComponent", function() { return ManageDriversComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageDriversComponent = /** @class */ (function () {
    function ManageDriversComponent() {
    }
    ManageDriversComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./managedrivers.component.html */ "./src/app/views/drivers/managedrivers.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageDriversComponent);
    return ManageDriversComponent;
}());



/***/ }),

/***/ "./src/app/views/drivers/newdriver.component.html":
/*!********************************************************!*\
  !*** ./src/app/views/drivers/newdriver.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <strong>NEW DRIVER REGISTRATION </strong>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <form action=\"\" method=\"post\" class=\"form-horizontal\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"col-md-2 col-form-label\" for=\"driver-fname\">Firstname</label>\r\n                    <div class=\"col-md-4\">\r\n                      <input type=\"text\" id=\"driver-fname\" name=\"Dfname\" class=\"form-control\" placeholder=\"Driver's firstname\" autocomplete=\"driver-fname\">\r\n                      </div>\r\n                      <label class=\"col-md-2 col-form-label\" for=\"driver-lname\">Lastname</label>\r\n                      <div class=\"col-md-4\">\r\n                        <input type=\"text\" id=\"driver-lname\" name=\"Dlname\" class=\"form-control\" placeholder=\"Driver's lastname\" autocomplete=\"driver-lname\">\r\n                    </div>\r\n                  </div>\r\n                <div class=\"form-group row\">\r\n                <label class=\"col-md-2 col-form-label\" for=\"driver-id\">ID Number</label>\r\n                <div class=\"col-md-4\">\r\n                    <input type=\"number\" id=\"driver-ID\" name=\"DID\" class=\"form-control\" placeholder=\"Driver's ID Number\" autocomplete=\"driver-ID\">\r\n                </div>\r\n                <label class=\"col-md-2 col-form-label\" for=\"bus-type\">Driving License</label>\r\n                <div class=\"col-md-4\">\r\n                        <select id=\"driver-license\" name=\"DLicense\" class=\"form-control\">\r\n                                <option value=\"\" disabled>--Select category--</option>\r\n                                <option value=\"A\">A</option>\r\n                                <option value=\"B\">B</option>\r\n                                <option value=\"C\">C</option>\r\n                                <option value=\"D\">D</option>\r\n                                <option value=\"E\">E</option>\r\n                                <option value=\"F\">F</option>\r\n                                \r\n                            </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label class=\"col-md-2 col-form-label\" for=\"driver-phone\">Phone number</label>\r\n                <div class=\"col-md-4\">\r\n                  <input type=\"number\" id=\"driver-phone\" name=\"Dphone\" class=\"form-control\" placeholder=\"Driver's phone number\" autocomplete=\"driver-phone\">\r\n                  </div>\r\n                  <label class=\"col-md-2 col-form-label\" for=\"driver-address\">Address</label>\r\n                  <div class=\"col-md-4\">\r\n                    <textarea id=\"textarea-input\" name=\"Daddress\" rows=\"9\" class=\"form-control\" placeholder=\"Driver's address\"></textarea>\r\n                </div>\r\n              </div>\r\n              \r\n            </form>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n            <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n          </div>\r\n        </div>\r\n    \r\n    </div>"

/***/ }),

/***/ "./src/app/views/drivers/newdriver.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/drivers/newdriver.component.ts ***!
  \******************************************************/
/*! exports provided: NewDriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewDriverComponent", function() { return NewDriverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewDriverComponent = /** @class */ (function () {
    function NewDriverComponent() {
    }
    NewDriverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./newdriver.component.html */ "./src/app/views/drivers/newdriver.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewDriverComponent);
    return NewDriverComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-drivers-drivers-module.js.map