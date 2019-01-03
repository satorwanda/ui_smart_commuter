(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-stations-stations-module"],{

/***/ "./src/app/views/stations/managestations.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/stations/managestations.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\r\n    <div class=\"col-md-12 mb-4\">\r\n        <!-- Nav tabs -->\r\n        <tabset>\r\n          <tab>\r\n            <ng-template tabHeading><i class=\"icon-note\"></i> New station </ng-template>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-header\">\r\n                        <strong>ADD NEW STATION </strong>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                        <form action=\"\" method=\"post\" class=\"form-horizontal\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"col-md-2 col-form-label\" for=\"station-latitude\">Latitude</label>\r\n                                <div class=\"col-md-4\">\r\n                                  <input type=\"text\" id=\"station-latitude\" name=\"latitude\" class=\"form-control\" placeholder=\"Station locational latitude\" autocomplete=\"station-latitude\">\r\n                                  </div>\r\n                                  <label class=\"col-md-2 col-form-label\" for=\"station-longitude\">Longitude</label>\r\n                                  <div class=\"col-md-4\">\r\n                                    <input type=\"text\" id=\"station-longitude\" name=\"longitude\" class=\"form-control\" placeholder=\"Station locational longitude\" autocomplete=\"station-longitude\">\r\n                                </div>\r\n                              </div>\r\n                            <div class=\"form-group row\">\r\n                            <label class=\"col-md-2 col-form-label\" for=\"station-name\">Name</label>\r\n                            <div class=\"col-md-4\">\r\n                                <input type=\"number\" id=\"station-name\" name=\"StationName\" class=\"form-control\" placeholder=\"Name of the station\" autocomplete=\"station-name\">\r\n                            </div>\r\n                            <label class=\"col-md-2 col-form-label\" for=\"bus-type\">Status</label>\r\n                            <div class=\"col-md-4\">\r\n                                    <select id=\"station-status\" name=\"StationStatus\" class=\"form-control\">\r\n                                            <option value=\"\" disabled>--Select station status--</option>\r\n                                            <option value=\"1\">Active</option>\r\n                                            <option value=\"0\">Inactive</option>\r\n                                            \r\n                                            \r\n                                        </select>\r\n                            </div>\r\n                          </div>\r\n                \r\n                          \r\n                        </form>\r\n                      </div>\r\n                      <div class=\"card-footer\">\r\n                        <button type=\"submit\" class=\"btn btn-sm btn-primary\"><i class=\"fa fa-dot-circle-o\"></i> Submit</button>\r\n                        <button type=\"reset\" class=\"btn btn-sm btn-danger\"><i class=\"fa fa-ban\"></i> Reset</button>\r\n                      </div>\r\n                    </div>\r\n                \r\n                </div>\r\n                </div>\r\n          </tab>\r\n          <tab>\r\n            <ng-template tabHeading><i class=\"icon-home\"></i> Registered stations </ng-template>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                  <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                      <i class=\"fa fa-institution\"></i> All stations\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                      <table class=\"table table-bordered table-striped table-sm\">\r\n                        <thead>\r\n                          <tr>\r\n                            <th>No</th>\r\n                            <th>Station name</th>\r\n                            <th>Latitude</th>\r\n                            <th>Longitude</th>\r\n                            <th>Locational address</th>\r\n                            <th>Status</th>\r\n                            <th colspan=\"2\">Modify</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td></td>\r\n                            <td style=\"text-align:center\"><i class=\"fa fa-pencil\"></i></td>\r\n                            <td style=\"text-align:center\"><i class=\"fa fa-remove\"></i></td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                      <nav>\r\n                        <ul class=\"pagination\">\r\n                          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\r\n                          <li class=\"page-item active\">\r\n                            <a class=\"page-link\" href=\"#\">1</a>\r\n                          </li>\r\n                          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n                          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n                          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n                          <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\r\n                        </ul>\r\n                      </nav>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--/.col-->\r\n              </div></tab>\r\n        </tabset>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/stations/managestations.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/stations/managestations.component.ts ***!
  \************************************************************/
/*! exports provided: ManageStationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageStationsComponent", function() { return ManageStationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ManageStationsComponent = /** @class */ (function () {
    function ManageStationsComponent() {
    }
    ManageStationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./managestations.component.html */ "./src/app/views/stations/managestations.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ManageStationsComponent);
    return ManageStationsComponent;
}());



/***/ }),

/***/ "./src/app/views/stations/stations-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/stations/stations-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: StationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsRoutingModule", function() { return StationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _managestations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managestations.component */ "./src/app/views/stations/managestations.component.ts");




var routes = [
    {
        path: '',
        data: {
            title: 'Stations'
        },
        children: [
            {
                path: '',
                redirectTo: 'manage-stations'
            },
            {
                path: 'manage-stations',
                component: _managestations_component__WEBPACK_IMPORTED_MODULE_3__["ManageStationsComponent"],
                data: {
                    title: 'Stations management'
                }
            }
        ]
    }
];
var StationsRoutingModule = /** @class */ (function () {
    function StationsRoutingModule() {
    }
    StationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], StationsRoutingModule);
    return StationsRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/stations/stations.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/stations/stations.module.ts ***!
  \***************************************************/
/*! exports provided: StationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationsModule", function() { return StationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _managestations_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./managestations.component */ "./src/app/views/stations/managestations.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _stations_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stations-routing.module */ "./src/app/views/stations/stations-routing.module.ts");




//Manage stations



var StationsModule = /** @class */ (function () {
    function StationsModule() {
    }
    StationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__["TabsModule"],
                _stations_routing_module__WEBPACK_IMPORTED_MODULE_6__["StationsRoutingModule"],
            ],
            declarations: [
                _managestations_component__WEBPACK_IMPORTED_MODULE_4__["ManageStationsComponent"]
            ]
        })
    ], StationsModule);
    return StationsModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-stations-stations-module.js.map