(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./portfolio-details/portfolio-details.component */ "./src/app/portfolio-details/portfolio-details.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'explore', component: _explore_explore_component__WEBPACK_IMPORTED_MODULE_4__["ExploreComponent"] },
    { path: 'portfolio-details', component: _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_5__["PortfolioDetailsComponent"] },
    { path: 'portfolio', component: _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_6__["PortfolioComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start page-wrapper -->\r\n<div class=\"page-wrapper\">\r\n  <!-- start preloader -->\r\n  <div class=\"preloader\">\r\n    <div class=\"sk-fading-circle\">\r\n      <div class=\"sk-circle1 sk-circle\"></div>\r\n      <div class=\"sk-circle2 sk-circle\"></div>\r\n      <div class=\"sk-circle3 sk-circle\"></div>\r\n      <div class=\"sk-circle4 sk-circle\"></div>\r\n      <div class=\"sk-circle5 sk-circle\"></div>\r\n      <div class=\"sk-circle6 sk-circle\"></div>\r\n      <div class=\"sk-circle7 sk-circle\"></div>\r\n      <div class=\"sk-circle8 sk-circle\"></div>\r\n      <div class=\"sk-circle9 sk-circle\"></div>\r\n      <div class=\"sk-circle10 sk-circle\"></div>\r\n      <div class=\"sk-circle11 sk-circle\"></div>\r\n      <div class=\"sk-circle12 sk-circle\"></div>\r\n    </div>\r\n  </div>\r\n  <!-- end preloader -->\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>\r\n<!-- end of page-wrapper -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'stockaladdin';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fusioncharts/fusioncharts.widgets */ "./node_modules/fusioncharts/fusioncharts.widgets.js");
/* harmony import */ var fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _layout_default_default_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/default/default.component */ "./src/app/layout/default/default.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _explore_explore_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./explore/explore.component */ "./src/app/explore/explore.component.ts");
/* harmony import */ var _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio-details/portfolio-details.component */ "./src/app/portfolio-details/portfolio-details.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/charts/charts.component */ "./src/app/components/charts/charts.component.ts");




// Import angular-fusioncharts

// Import FusionCharts library and chart modules

// For Powercharts , Widgets, and Maps
// import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';

// import * as Maps from 'fusioncharts/fusioncharts.maps';
// To know more about suites,
// read this https://www.fusioncharts.com/dev/getting-started/plain-javascript/install-using-plain-javascript
// For Map definition files
// import * as World from 'fusioncharts/maps/fusioncharts.world';

// Pass the fusioncharts library and chart modules
angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_5__, fusioncharts_fusioncharts_widgets__WEBPACK_IMPORTED_MODULE_6__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_7__);











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                _shared_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _layout_default_default_component__WEBPACK_IMPORTED_MODULE_11__["DefaultComponent"],
                _explore_explore_component__WEBPACK_IMPORTED_MODULE_13__["ExploreComponent"],
                _portfolio_details_portfolio_details_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioDetailsComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_15__["PortfolioComponent"],
                _components_charts_charts_component__WEBPACK_IMPORTED_MODULE_18__["ChartsComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_4__["FusionChartsModule"]],
            providers: [_services_api_service__WEBPACK_IMPORTED_MODULE_16__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/charts/charts.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fusioncharts width=\"98%\" height=\"250\" type=\"AngularGauge\" dataFormat=\"JSON\" [dataSource]=\"dataSource\"\n  (initialized)=\"initialized($event)\">\n</fusioncharts>\n"

/***/ }),

/***/ "./src/app/components/charts/charts.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/charts/charts.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcnRzL2NoYXJ0cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/charts/charts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/charts/charts.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsComponent", function() { return ChartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsComponent = /** @class */ (function () {
    // @Input('gaugeChart2') dataSource: any;
    function ChartsComponent() {
        this.dataSource = {
            chart: {
                caption: '',
                lowerLimit: '0',
                upperLimit: '100',
                showValue: '1',
                numberSuffix: '%',
                theme: 'fusion',
                showToolTip: '0'
            },
            // Gauge Data
            colorRange: {
                color: [
                    {
                        minValue: '0',
                        maxValue: '100',
                        code: '#F2726F'
                    },
                ]
            },
            dials: {
                dial: [
                    {
                        value: 68
                    }
                ]
            }
        };
    }
    ChartsComponent.prototype.ngOnInit = function () {
    };
    ChartsComponent.prototype.initialized = function ($event) {
        console.log('Initialized');
        this.chart = $event.chart; // Storing the chart instance
    };
    ChartsComponent.prototype.updateGaugeValue = function (data) {
        var _this = this;
        console.log('Update', data);
        setTimeout(function () {
            console.log(_this.chart);
            _this.chart.setChartAttribute({ caption: data.caption });
            _this.chart.feedData('&value=' + data.value);
        }, 200);
    };
    ChartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charts',
            template: __webpack_require__(/*! ./charts.component.html */ "./src/app/components/charts/charts.component.html"),
            styles: [__webpack_require__(/*! ./charts.component.scss */ "./src/app/components/charts/charts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartsComponent);
    return ChartsComponent;
}());



/***/ }),

/***/ "./src/app/explore/explore.component.html":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-padding\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row \">\n\t\t\t\t<div class=\"col-md-12\">\t\t\t\t\n\t\t\t\t\t<div id=\"sta-tabs1\">\n\t\t\t\t\t\t  <ul class=\"nav nav-tabs\">\n\n\t\t\t\t\t\t  \t<li class=\"active col-md-1\">\n\t\t\t\t\t\t  \t\t<a href=\"#trends\" id=\"hideFilter\" data-toggle=\"tab\">Trends</a>\n\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t  \t<li class=\"col-md-2\">\n\t\t\t\t\t\t  \t\t<a href=\"#all-portfolios\" id=\"displayFilter\" data-toggle=\"tab\">All Portfolios</a>\n\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t  \t<li class=\"col-md-3 col-xs-12 exploreFilters\" style=\"display: none;\">\n\t\t\t\t\t\t  \t\t<select class=\"form-control custom-select\">\n\t\t\t\t\t\t\t\t    <option>Min. Investment</option>\n\t\t\t\t\t\t\t\t    <option>Medium</option>\n\t\t\t\t\t\t\t\t    <option>Large</option>\n\t\t\t\t\t\t\t\t</select> \n\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t  \t<li class=\"col-md-3 col-xs-12 exploreFilters\" style=\"display: none;\">\n\t\t\t\t\t\t  \t\t<select class=\"form-control custom-select\">\n\t\t\t\t\t\t\t\t    <option>More Filters</option>\n\t\t\t\t\t\t\t\t    <option>Medium</option>\n\t\t\t\t\t\t\t\t    <option>Large</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t  \t<li class=\"col-md-3 col-xs-12 exploreFilters\" style=\"display: none;\">\n\t\t\t\t\t\t  \t\t<div class=\"main\">  \n\t\t\t\t\t\t\t\t  <!-- Actual search box -->\n\t\t\t\t\t\t\t\t  <div class=\"has-feedback has-search\">\n\t\t\t\t\t\t\t\t    <span class=\"glyphicon glyphicon-search form-control-feedback\"></span>\n\t\t\t\t\t\t\t\t    <input type=\"text\" class=\"form-control custom-select\" placeholder=\"Search For Keywords\">\n\t\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  \t</li>\n\t\t\t\t\t\t  </ul>\n\t\t\t\t\t\t  <div class=\"tab-content \">\n\t\t\t\t\t\t  \n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"tab-pane active\" id=\"trends\">\n\t\t\t\t\t\t\t<div class=\"tabsTitle blueTitle\">\n\t\t\t\t\t\t\t\t<h3>Newly Added</h3>\n\t\t\t\t\t\t\t\t<span>Curated by experienced professional at Stock Aladdin</span>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t  <div class=\"newAdded-slider mb50 mt-60\">\n\t\t\t\t\t\t\t\t<div class=\"item shadow-grid\">\n\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/high-growth.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>High Growth</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>5%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11.57 14.35\" style=\"width:10px;margin-right:10px;\"><defs><style>.cls-1{fill:#000;width:10px;}</style></defs><title>Asset 39</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M11.4,3.2a.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H9.39A3.66,3.66,0,0,1,8.32,6.81,4.6,4.6,0,0,1,5.6,8a2.69,2.69,0,0,1,.91.52,6.37,6.37,0,0,1,.91,1L10,13.1a.86.86,0,0,1,.2.52.67.67,0,0,1-.23.51.8.8,0,0,1-.55.21A.9.9,0,0,1,8.71,14L5.54,9.65A3.91,3.91,0,0,0,4.38,8.49a3,3,0,0,0-1.46-.31H.79A.84.84,0,0,1,.2,8a.73.73,0,0,1,0-1,.84.84,0,0,1,.58-.18H4.51q3.06,0,3.22-2.58H.6a.6.6,0,0,1-.42-.17A.57.57,0,0,1,0,3.63.54.54,0,0,1,.18,3.2.62.62,0,0,1,.6,3h7Q7.15,1.19,4.51,1.19H.6A.6.6,0,0,1,.18,1,.57.57,0,0,1,0,.58.54.54,0,0,1,.18.16.62.62,0,0,1,.6,0H11a.61.61,0,0,1,.43.16.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H8.16A3,3,0,0,1,9.29,3H11A.61.61,0,0,1,11.4,3.2Z\"/></g></g></svg><span>1,000</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"item shadow-grid\">\n\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/tax-saver.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Tax Saver</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>1.65%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11.57 14.35\" style=\"width:10px;margin-right:10px;\"><defs><style>.cls-1{fill:#000;width:10px;}</style></defs><title>Asset 39</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M11.4,3.2a.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H9.39A3.66,3.66,0,0,1,8.32,6.81,4.6,4.6,0,0,1,5.6,8a2.69,2.69,0,0,1,.91.52,6.37,6.37,0,0,1,.91,1L10,13.1a.86.86,0,0,1,.2.52.67.67,0,0,1-.23.51.8.8,0,0,1-.55.21A.9.9,0,0,1,8.71,14L5.54,9.65A3.91,3.91,0,0,0,4.38,8.49a3,3,0,0,0-1.46-.31H.79A.84.84,0,0,1,.2,8a.73.73,0,0,1,0-1,.84.84,0,0,1,.58-.18H4.51q3.06,0,3.22-2.58H.6a.6.6,0,0,1-.42-.17A.57.57,0,0,1,0,3.63.54.54,0,0,1,.18,3.2.62.62,0,0,1,.6,3h7Q7.15,1.19,4.51,1.19H.6A.6.6,0,0,1,.18,1,.57.57,0,0,1,0,.58.54.54,0,0,1,.18.16.62.62,0,0,1,.6,0H11a.61.61,0,0,1,.43.16.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H8.16A3,3,0,0,1,9.29,3H11A.61.61,0,0,1,11.4,3.2Z\"/></g></g></svg> <span>2,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t  <div class=\"tabsTitle blueTitle\">\n\t\t\t\t\t\t\t\t<h3>Trending</h3>\n\t\t\t\t\t\t\t\t<span>Most popular portfolios based on investments done by our clients</span>\n\t\t\t\t\t\t\t </div>\t\n\t\t\t\t\t\t\t  <div class=\"trending-slider mb50 mt-60\">\n\t\t\t\t\t\t\t\t<div class=\"item shadow-grid\">\n\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/balanced.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Balanced</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>10.3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11.57 14.35\" style=\"width:10px;margin-right:10px;\"><defs><style>.cls-1{fill:#000;width:10px;}</style></defs><title>Asset 39</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M11.4,3.2a.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H9.39A3.66,3.66,0,0,1,8.32,6.81,4.6,4.6,0,0,1,5.6,8a2.69,2.69,0,0,1,.91.52,6.37,6.37,0,0,1,.91,1L10,13.1a.86.86,0,0,1,.2.52.67.67,0,0,1-.23.51.8.8,0,0,1-.55.21A.9.9,0,0,1,8.71,14L5.54,9.65A3.91,3.91,0,0,0,4.38,8.49a3,3,0,0,0-1.46-.31H.79A.84.84,0,0,1,.2,8a.73.73,0,0,1,0-1,.84.84,0,0,1,.58-.18H4.51q3.06,0,3.22-2.58H.6a.6.6,0,0,1-.42-.17A.57.57,0,0,1,0,3.63.54.54,0,0,1,.18,3.2.62.62,0,0,1,.6,3h7Q7.15,1.19,4.51,1.19H.6A.6.6,0,0,1,.18,1,.57.57,0,0,1,0,.58.54.54,0,0,1,.18.16.62.62,0,0,1,.6,0H11a.61.61,0,0,1,.43.16.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H8.16A3,3,0,0,1,9.29,3H11A.61.61,0,0,1,11.4,3.2Z\"/></g></g></svg> <span>7,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"item shadow-grid\">\n\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/retirement.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<h3>Retirement</h3>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 11.57 14.35\" style=\"width:10px;margin-right:10px;\"><defs><style>.cls-1{fill:#000;width:10px;}</style></defs><title>Asset 39</title><g id=\"Layer_2\" data-name=\"Layer 2\"><g id=\"Layer_1-2\" data-name=\"Layer 1\"><path class=\"cls-1\" d=\"M11.4,3.2a.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H9.39A3.66,3.66,0,0,1,8.32,6.81,4.6,4.6,0,0,1,5.6,8a2.69,2.69,0,0,1,.91.52,6.37,6.37,0,0,1,.91,1L10,13.1a.86.86,0,0,1,.2.52.67.67,0,0,1-.23.51.8.8,0,0,1-.55.21A.9.9,0,0,1,8.71,14L5.54,9.65A3.91,3.91,0,0,0,4.38,8.49a3,3,0,0,0-1.46-.31H.79A.84.84,0,0,1,.2,8a.73.73,0,0,1,0-1,.84.84,0,0,1,.58-.18H4.51q3.06,0,3.22-2.58H.6a.6.6,0,0,1-.42-.17A.57.57,0,0,1,0,3.63.54.54,0,0,1,.18,3.2.62.62,0,0,1,.6,3h7Q7.15,1.19,4.51,1.19H.6A.6.6,0,0,1,.18,1,.57.57,0,0,1,0,.58.54.54,0,0,1,.18.16.62.62,0,0,1,.6,0H11a.61.61,0,0,1,.43.16.56.56,0,0,1,.17.42.59.59,0,0,1-.6.6H8.16A3,3,0,0,1,9.29,3H11A.61.61,0,0,1,11.4,3.2Z\"/></g></g></svg> <span>20,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"tab-pane\" id=\"all-portfolios\">\n\t\t\t\t\t\t\t  <div class=\"\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/dividend.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Dividend - Smart Beta</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/red-perc-down.svg\" alt> <span class=\"color-red\">8.59%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>9,000</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/equity.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Equity &amp; Gold</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>10.65%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>10,000</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/tax-saver.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Tax Saver</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>1.65%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>2,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/electric-mobility.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Electric Mobility</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>20,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/high-growth.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>High Growth</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>5%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>1,000</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/low-risk.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Low Risk</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>10.3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>7,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/agriculture.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Agriculture</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/red-perc-down.svg\" alt> <span class=\"color-red\">1.3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>1,000</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<a [routerLink]=\"['/portfolio-details']\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-6 mb30 widget\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"shadow-grid\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"grid\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineIconTitle\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"icon\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img src=\"assets/images/icons/retirement.svg\" alt>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h3>Retirement</h3>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t\t\t\t\t\t\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"inlineBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"returnBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Returns 1Y</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"perc\"><img src=\"assets/images/icons/green-perc-up.svg\" alt> <span>3%</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"min-amtBox\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"title\"><h4>Min. Amount</h4></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"price\"><img src=\"assets/images/icons/rupee.svg\" alt> <span>2,500</span></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<div class=\"col-md-12 text-center\">\n\t\t\t\t\t\t\t\t\t\t<h4><a href=\"#\">Load more portfolios <i class=\"fas fa-angle-down\"></i></a></h4>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    </section>   \n    \n    <section class=\"section section-padding gradient-blue pt140 hidethis\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row \">\n\t\t\t\t<div class=\"col-md-5 col-sm-6 col-md-offset-1\">\n\t\t\t\t\t<div class=\"create-portfolio-box\">\n\t\t\t\t\t\t<div class=\"image\"><img src=\"assets/images/icons/portfolio.svg\" alt></div>\n\t\t\t\t\t\t<div class=\"clearfix mb30\"></div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<p>Create and Invest in a portfolio within 1 click</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"btns\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"roundedBorderBtn\">Create Portfolio</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"clearfix\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-5 col-sm-6\">\n\t\t\t\t\t<div class=\"see-all-portfolio-box\">\n\t\t\t\t\t\t<div class=\"image\"><img src=\"assets/images/icons/all-portfolio.svg\" alt></div>\n\t\t\t\t\t\t<div class=\"clearfix mb30\"></div>\n\t\t\t\t\t\t<div class=\"description\">\n\t\t\t\t\t\t\t<p>Didn’t find the portfolio you were looking for?</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"btns\">\n\t\t\t\t\t\t\t<a href=\"#\" class=\"roundedBorderBtn\">See all Portfolios</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    </section>\n\t<div class=\"clearfix\"></div>\n    \n    <section class=\"faqsection section-padding brdbtnEEE hidethis\">\n\t<div class=\"\">\n      <div class=\"container\">\n        <div class=\" chooseSameCol\">\n          <div class=\"col col-lg-12 col-md-12\">\n            <div class=\"row\">\n              <div class=\"\">\n                <div class=\"sectionTitle blueTitle\">\n                  <h3>Your Questions</h3>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col col-lg-12\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"stk-accordian\">\n                  <div class=\"panel-group\" id=\"accordion\">\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span class=\"blueArrow blueArrow-menu-down\"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"><span class=\"blueArrow blueArrow-menu-down\"></span>Incididunt ut labore et dolore magna aliqua</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"><span class=\"blueArrow blueArrow-menu-down\"></span>Sed do eiusmod tempor incididunt</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\"><span class=\"blueArrow blueArrow-menu-down\"></span>Elit, sed do eiusmod tempor incididunt</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseFour\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"stk-accordian\">\n                  <div class=\"panel-group\" id=\"accordion1\">\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseFive\"><span class=\"blueArrow blueArrow-menu-down\"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseFive\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseSix\"><span class=\"blueArrow blueArrow-menu-down\"></span>Incididunt ut labore et dolore magna aliqua</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseSix\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseSeven\"><span class=\"blueArrow blueArrow-menu-down\"></span>Sed do eiusmod tempor incididunt</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"panel panel-default\">\n                      <div class=\"panel-heading\">\n                        <span class=\"panel-title\">\n                        <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseEight\"><span class=\"blueArrow blueArrow-menu-down\"></span>Elit, sed do eiusmod tempor incididunt</a>\n                        </span>\n                      </div>\n                      <div id=\"collapseEight\" class=\"panel-collapse collapse\">\n                        <div class=\"panel-body\">\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n    </div>\n    </section>"

/***/ }),

/***/ "./src/app/explore/explore.component.scss":
/*!************************************************!*\
  !*** ./src/app/explore/explore.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/explore/explore.component.ts":
/*!**********************************************!*\
  !*** ./src/app/explore/explore.component.ts ***!
  \**********************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExploreComponent = /** @class */ (function () {
    function ExploreComponent() {
    }
    ExploreComponent.prototype.ngOnInit = function () {
    };
    ExploreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.component.html */ "./src/app/explore/explore.component.html"),
            styles: [__webpack_require__(/*! ./explore.component.scss */ "./src/app/explore/explore.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExploreComponent);
    return ExploreComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- start of hero -->\r\n    <section class=\"hero\">\r\n      <div class=\"hero-slider\">\r\n        <div class=\"slide\">\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"slide-content\">\r\n                <div class=\"col col-lg-5 col-sm-7 slide-caption\">\r\n                  <div class=\"vertical-middle\">\r\n                    <div class=\"slide-title\">\r\n                      <h2>\r\n                        Invest with Aladdin <br />for your\r\n                        <div class=\"typeWriter-wrap\">\r\n                          <div class=\"type-wrap\">\r\n                            <span id=\"typing1\" style=\"white-space:pre;\"></span>\r\n                          </div>\r\n                        </div>\r\n                      </h2>\r\n                    </div>\r\n                    <div class=\"slide-subtitle\">\r\n                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                        labore et dolore magna aliqua.</p>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                    <div class=\"btns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col col-lg-7 col-sm-5 slide-img hiddenMobile\">\r\n                  <div class=\"vertical-middle\">\r\n                    <div class=\"slider-pic\">\r\n                      <img src=\"assets/images/banner/home-banner1.png\" alt>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </section>\r\n    <!-- end of hero slider -->\r\n    <section class=\"chooseection section-padding brdbtnEEE addHeight\">\r\n      <div class=\"vmContainer\">\r\n        <div class=\"container\">\r\n          <div class=\"row  chooseSameCol\">\r\n            <div class=\"col col-lg-12 col-md-12 mb30\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"sectionTitle\">\r\n                    <h2>Choose what suits you</h2>\r\n                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor\r\n                      incididunt ut labore et dolore magna aliqua.</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-10 col-md-10 sameCol\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"chooseGrid\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/high-growth.svg\" alt>\r\n                    </div>\r\n                    <h4>High Growth</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                    <div class=\"btns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"chooseGrid\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/tax-saver.svg\" alt>\r\n                    </div>\r\n                    <h4>Tax Saver</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                    <div class=\"btns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"chooseGrid\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/balanced.svg\" alt>\r\n                    </div>\r\n                    <h4>Balanced</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                    <div class=\"btns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-2 col-md-2 sameCol\">\r\n              <div class=\"vertical-middle\">\r\n                <div class=\"chsExploreBtn\">\r\n                  <a href=\"#\" class=\"exploreBtn\">Explore <img src=\"assets/images/icons/explore-arrow.svg\" alt></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"aboutUsection section-padding brdbtnEEE addHeight\">\r\n      <div class=\"vmContainer\">\r\n        <div class=\"container\">\r\n          <div class=\"row  chooseSameCol\">\r\n            <div class=\"col col-lg-12 col-md-12 mb30\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"sectionTitle text-center blackText\">\r\n                    <h2>You heard about Us</h2>\r\n                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor\r\n                      incididunt ut labore et dolore magna aliqua.</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-12 col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"abtGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/intelligent.svg\" alt>\r\n                    </div>\r\n                    <h4>Intelligent</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"abtGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/complexity-simplified.svg\" alt>\r\n                    </div>\r\n                    <h4>Complexity Simplified</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"abtGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/easytouse.svg\" alt>\r\n                    </div>\r\n                    <h4>Easy to Use</h4>\r\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                      labore et dolore magna aliqua.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"grey-section section-padding brdbtnEEE addHeight\">\r\n      <div class=\"vmContainer\">\r\n        <div class=\"container\">\r\n          <div class=\"row sameHeight\">\r\n            <div class=\"col col-md-6 sameCol\">\r\n              <div class=\"vertical-middle\">\r\n                <div class=\"sectionTitle blackText mb30\">\r\n                  <h2>Let us help you start</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\r\n                    et dolore magna aliqua.</p>\r\n                </div>\r\n                <div class=\"cta-text\">\r\n                  <ul class=\"circleList\">\r\n                    <li>Lorem ipsum dolor sit amet</li>\r\n                    <li> consectetur adipiscing elit</li>\r\n                    <li> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>\r\n                    <li> consectetur adipiscing elit</li>\r\n                  </ul>\r\n                </div>\r\n                <div class=\"investBtn\">\r\n                  <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-md-6 sameCol hiddenMobile\">\r\n              <div class=\"img-holder\">\r\n                <img src=\"assets/images/let-help-start.svg\" alt>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- end container -->\r\n    </section>\r\n    <!-- start testimonials-section -->\r\n    <section class=\"testimonialssection section-padding brdbtnEEE addHeight\">\r\n      <div class=\"vmContainer\">\r\n        <div class=\"container\">\r\n          <div class=\"row  chooseSameCol\">\r\n            <div class=\"col col-lg-12 col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"sectionTitle text-center\">\r\n                    <h2>Our Customers</h2>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-8 col-lg-offset-2 col-sm-10 col-sm-offset-1\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"testimonials-grids testimonials-slider\">\r\n                    <div class=\"grid\">\r\n                      <div class=\"quote\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                          labore et dolore magna aliqua.</p>\r\n                      </div>\r\n                      <div class=\"client-info\">\r\n                        <div class=\"client-pic\">\r\n                          <img src=\"assets/images/markZ.jpg\" alt>\r\n                        </div>\r\n                        <h5>Mark Zuckerberg</h5>\r\n                        <span>Founder, Facebook</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"grid\">\r\n                      <div class=\"quote\">\r\n                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\r\n                          labore et dolore magna aliqua.</p>\r\n                      </div>\r\n                      <div class=\"client-info\">\r\n                        <div class=\"client-pic\">\r\n                          <img src=\"assets/images/markZ.jpg\" alt>\r\n                        </div>\r\n                        <h5>Mark Zuckerberg</h5>\r\n                        <span>Founder, Facebook</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <!-- end testimonials-section -->\r\n    <section class=\"pricingsection section-padding greyBg brdbtnEEE addHeight\">\r\n      <div class=\"vmContainer\">\r\n        <div class=\"container\">\r\n          <div class=\"row  chooseSameCol\">\r\n            <div class=\"col col-lg-12 col-md-12 mb30\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"sectionTitle text-center blackText\">\r\n                    <h2>Benefits &amp; Pricing</h2>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-12 col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"pricingGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/earlybird.svg\" alt>\r\n                    </div>\r\n                    <h3>Early Bird</h3>\r\n                    <span class=\"priceSubheading\">Invest &#8377; 5000+</span>\r\n                    <hr class=\"dividerGrey\" />\r\n                    <ul>\r\n                      <li>Persoanlized portfolio</li>\r\n                      <li>Expert fiancial advice</li>\r\n                      <li>Auto-rebalancing</li>\r\n                      <li>Auto-deposits</li>\r\n                      <li>Dividend reinvesting</li>\r\n                    </ul>\r\n                    <div class=\"pricingBtns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"pricingGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/experienced.svg\" alt>\r\n                    </div>\r\n                    <h3>Experienced</h3>\r\n                    <span class=\"priceSubheading\">Invest &#8377; 50000+</span>\r\n                    <hr class=\"dividerGrey\" />\r\n                    <ul>\r\n                      <li>Persoanlized portfolio</li>\r\n                      <li>Expert fiancial advice</li>\r\n                      <li>Auto-rebalancing</li>\r\n                      <li>Auto-deposits</li>\r\n                      <li>Dividend reinvesting</li>\r\n                    </ul>\r\n                    <div class=\"pricingBtns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <div class=\"pricingGrid text-center\">\r\n                    <div class=\"icon\">\r\n                      <img src=\"assets/images/icons/professional.svg\" alt>\r\n                    </div>\r\n                    <h3>Professional</h3>\r\n                    <span class=\"priceSubheading\">Invest &#8377; 500000+</span>\r\n                    <hr class=\"dividerGrey\" />\r\n                    <ul>\r\n                      <li>Persoanlized portfolio</li>\r\n                      <li>Expert fiancial advice</li>\r\n                      <li>Auto-rebalancing</li>\r\n                      <li>Auto-deposits</li>\r\n                      <li>Dividend reinvesting</li>\r\n                    </ul>\r\n                    <div class=\"pricingBtns\">\r\n                      <a href=\"#\" class=\"theme-btn\">Invest Now</a>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n    <section class=\"faqsection section-padding brdbtnEEE\">\r\n      <div class=\"\">\r\n        <div class=\"container\">\r\n          <div class=\" chooseSameCol\">\r\n            <div class=\"col col-lg-12 col-md-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                  <div class=\"sectionTitle text-center blackText mb30\">\r\n                    <h2>Frequently Asked Questions</h2>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col col-lg-12\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"stk-accordian\">\r\n                    <div class=\"panel-group\" id=\"accordion\">\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span> Lorem ipsum dolor sit amet, consectetur\r\n                              adipiscing elit.</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseOne\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Incididunt ut labore et dolore magna\r\n                              aliqua</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Sed do eiusmod tempor incididunt</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseThree\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Elit, sed do eiusmod tempor incididunt</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseFour\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                  <div class=\"stk-accordian\">\r\n                    <div class=\"panel-group\" id=\"accordion1\">\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseFive\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span> Lorem ipsum dolor sit amet, consectetur\r\n                              adipiscing elit.</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseFive\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseSix\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Incididunt ut labore et dolore magna\r\n                              aliqua</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseSix\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseSeven\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Sed do eiusmod tempor incididunt</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseSeven\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"panel panel-default\">\r\n                        <div class=\"panel-heading\">\r\n                          <span class=\"panel-title\">\r\n                            <a data-toggle=\"collapse\" data-parent=\"#accordion1\" href=\"#collapseEight\"><span\r\n                                class=\"blueArrow blueArrow-menu-down\"></span>Elit, sed do eiusmod tempor incididunt</a>\r\n                          </span>\r\n                        </div>\r\n                        <div id=\"collapseEight\" class=\"panel-collapse collapse\">\r\n                          <div class=\"panel-body\">\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt\r\n                              ut labore et dolore magna aliqua</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a('#typing1', {
            strings: ['World Tour', 'Dream House', 'Kid\'s Education', 'Retirement'],
            typeSpeed: 150,
            backSpeed: 30,
            showCursor: true,
            cursorChar: '',
            loop: true
        });
        console.log(typed);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/default/default.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  default works!\n</p>\n"

/***/ }),

/***/ "./src/app/layout/default/default.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/default/default.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kZWZhdWx0L2RlZmF1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/default/default.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/default/default.component.ts ***!
  \*****************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layout/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layout/default/default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container portfolio-container\">\n  <div class=\"row\">\n    <div class=\"col-md-12 mt30 mb30 portfolio\">\n      <div class=\"shadow-grid\">\n        <div class=\"grid grid-custom\">\n          <div class=\"col-md-7 col-sm-12 col-xs-12\">\n            <div class=\"inlineIconTitle\">\n              <div class=\"icon\">\n                <img src=\"assets/images/icons/dividend.svg\" alt=\"\">\n              </div>\n              <div class=\"title\">\n                <h3>Dividend - Smart Beta</h3>\n              </div>\n            </div>\n            <div class=\"description\">\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\n            </div>\n            <div style=\"display: block;float: left;\">\n              <ul>\n                <li>High Risk</li>\n                <li>Large Cap</li>\n                <li>Short Term</li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"col-md-5 col-sm-12 col-xs-12\">\n            <div class=\"inlineBox text-right-desktop\">\n              <div class=\"returnBox\">\n                <div class=\"title\">\n                  <h4>Daily Change</h4>\n                </div>\n                <div class=\"perc\"><img src=\"assets/images/icons/red-perc-down.svg\" alt=\"\"> <span\n                    class=\"color-red\">8.59%</span></div>\n              </div>\n              <div class=\"min-amtBox\">\n                <div class=\"title\">\n                  <h4>Returns 1Y</h4>\n                </div>\n                <div class=\"perc\"><img src=\"assets/images/icons/red-perc-down.svg\" alt=\"\"> <span\n                    class=\"color-red\">8.59%</span></div>\n              </div>\n              <div class=\"col-md-12 min-amt\">\n                <p>Minimum Investment Amount</p>\n                <p>&#x20B9; 10,000</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div id=\"sta-tabs1\">\n        <ul class=\"nav nav-tabs tab-border\">\n          <li class=\"active\">\n            <a href=\"#overview\" data-toggle=\"tab\">Overview</a>\n          </li>\n          <li class=\"\">\n            <a href=\"#stocks-weights\" data-toggle=\"tab\">Stock & Weights</a>\n          </li>\n          <li class=\"\">\n            <a href=\"#news\" data-toggle=\"tab\">News & Press</a>\n          </li>\n        </ul>\n        <div class=\"tab-content\">\n          <div class=\"tab-pane active\" id=\"overview\">\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"tabsTitle\">\n                  <h3>Why this portfolio?</h3>\n                  <!-- <span>Curated by experienced professional at Stock Aladdin</span> -->\n                </div>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n                  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n              </div>\n              <div class=\"col-md-4 text-center right-sidebar\">\n                <div class=\"shadow-grid\">\n                  <div class=\"grid\">\n                    <h4>Enter Invesment Amount</h4>\n                    <input type=\"text\" name=\"amount\">\n                    <ul>\n                      <li><input type=\"button\" name=\"1000\" value=\"+ &#x20B9; 1000\"></li>\n                      <li><input type=\"button\" name=\"5000\" value=\"+ &#x20B9; 50000\"></li>\n                      <li><input type=\"button\" name=\"10000\" value=\"+ &#x20B9; 10,000\"></li>\n                    </ul>\n                    <button type=\"submit\" class=\"investnowBtn mt-30\">Invest Now</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mt30\">\n              <div class=\"col-md-8\">\n                <div class=\"chart-container\">\n                  <canvas id=\"myChart\"></canvas>\n                </div>\n              </div>\n              <div class=\"col-md-4 right-sidebar1\">\n                <div class=\"shadow-grid\">\n                  <div class=\"grid\">\n                    <h4>Similar Portfolios</h4>\n                    <ul>\n                      <li><img src=\"assets/images/icons/equity.svg\"><a href=\"#\">Equity & Gold</a></li>\n                      <li><img src=\"assets/images/icons/agriculture.svg\"><a href=\"#\">Agriculture</a></li>\n                      <li><img src=\"assets/images/icons/high-growth.svg\"><a href=\"#\">High Growth</a></li>\n                    </ul>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-4 right-sidebar2 mt30 mb30\">\n                <div class=\"shadow-grid\">\n                  <div class=\"grid\">\n                    <p>Didn't find this Portfolio interesting? <br> Worry not we've got you covered!</p>\n                    <a href=\"#\" class=\"investnowBtn\">See all Portfolios</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"stocks-weights\">\n            <div class=\"row table-data\">\n              <div class=\"col-md-7\">\n                <div class=\"table-responsive mb30\">\n                  <table>\n                    <thead>\n                      <tr>\n                        <th>Weight</th>\n                        <th>Segment & Stocks</th>\n                        <th>Returns 1Y</th>\n                      </tr>\n                    </thead>\n                  </table>\n                </div>\n                <div class=\"table-responsive mb30\">\n                  <table>\n                    <thead>\n                      <tr data-toggle=\"collapse\" data-target=\"#demo1\">\n                        <th>17%</th>\n                        <th>Communication Services</th>\n                        <th><img src=\"assets/images/icons/green-perc-up.svg\"> 9.50%</th>\n                      </tr>\n                    </thead>\n                    <tbody id=\"demo1\" class=\"collapse in\">\n                      <tr>\n                        <td>10%</td>\n                        <td><a [routerLink]=\"['/portfolio']\">ABC</a></td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 9.50%</td>\n                      </tr>\n                      <tr>\n                        <td>3%</td>\n                        <td><a [routerLink]=\"['/portfolio']\">DEF</a></td>\n                        <td class=\"color-red\"><img src=\"assets/images/icons/red-perc-down.svg\"> 3.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td><a [routerLink]=\"['/portfolio']\">GHI</a></td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 0.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td>JKL</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 2.50%</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"table-responsive mb30\">\n                  <table>\n                    <thead>\n                      <tr data-toggle=\"collapse\" data-target=\"#demo2\">\n                        <th>33%</th>\n                        <th>Health Care</th>\n                        <th class=\"color-red\"><img src=\"assets/images/icons/red-perc-down.svg\"> 20%</th>\n                      </tr>\n                    </thead>\n                    <tbody id=\"demo2\" class=\"collapse in\">\n                      <tr>\n                        <td>10%</td>\n                        <td><a [routerLink]=\"['/portfolio']\">ABC</a></td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 9.50%</td>\n                      </tr>\n                      <tr>\n                        <td>3%</td>\n                        <td>DEF</td>\n                        <td class=\"color-red\"><img src=\"assets/images/icons/red-perc-down.svg\"> 3.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td>GHI</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 0.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td>JKL</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 2.50%</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"table-responsive mb30\">\n                  <table>\n                    <thead>\n                      <tr data-toggle=\"collapse\" data-target=\"#demo3\">\n                        <th>42%</th>\n                        <th>Consumer Discretionery</th>\n                        <th><img src=\"assets/images/icons/green-perc-up.svg\"> 20%</th>\n                      </tr>\n                    </thead>\n                    <tbody id=\"demo3\" class=\"collapse in\">\n                      <tr>\n                        <td>10%</td>\n                        <td>ABC</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 9.50%</td>\n                      </tr>\n                      <tr>\n                        <td>3%</td>\n                        <td>DEF</td>\n                        <td class=\"color-red\"><img src=\"assets/images/icons/red-perc-down.svg\"> 3.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td>GHI</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 0.50%</td>\n                      </tr>\n                      <tr>\n                        <td>2%</td>\n                        <td>JKL</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 2.50%</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <div class=\"table-responsive mb30\">\n                  <table>\n                    <thead>\n                      <tr data-toggle=\"collapse\" data-target=\"#demo4\">\n                        <th>8%</th>\n                        <th>Energy</th>\n                        <th><img src=\"assets/images/icons/green-perc-up.svg\"> 8.59%</th>\n                      </tr>\n                    </thead>\n                    <tbody id=\"demo4\" class=\"collapse in\">\n                      <tr>\n                        <td>10%</td>\n                        <td>ABC</td>\n                        <td><img src=\"assets/images/icons/green-perc-up.svg\"> 9.50%</td>\n                      </tr>\n                      <tr>\n                        <td>3%</td>\n                        <td>DEF</td>\n                        <td class=\"color-red\"><img src=\"assets/images/icons/red-perc-down.svg\"> 3.50%</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"pie-container\">\n                  <canvas id=\"mypie\" width=\"220\" height=\"250\"></canvas>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby1kZXRhaWxzL3BvcnRmb2xpby1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portfolio-details/portfolio-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/portfolio-details/portfolio-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PortfolioDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioDetailsComponent", function() { return PortfolioDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioDetailsComponent = /** @class */ (function () {
    function PortfolioDetailsComponent() {
    }
    PortfolioDetailsComponent.prototype.ngOnInit = function () {
    };
    PortfolioDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio-details',
            template: __webpack_require__(/*! ./portfolio-details.component.html */ "./src/app/portfolio-details/portfolio-details.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-details.component.scss */ "./src/app/portfolio-details/portfolio-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioDetailsComponent);
    return PortfolioDetailsComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container portfolio-container mb30\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mt30 mb30 portfolio\">\r\n      <div class=\"shadow-grid\" *ngIf=\"portfolioData && portfolioData.basic_data\">\r\n        <div class=\"grid grid-custom\">\r\n          <div class=\"col-md-7 col-sm-12 col-xs-12\">\r\n            <!-- <div class=\"inlineIconTitle\"> -->\r\n            <!-- <div class=\"icon\">\r\n                          <img src=\"assets/images/icons/dividend.svg\" alt=\"\">\r\n                        </div> -->\r\n            <div class=\"title\">\r\n              <h3>{{(basicData && basicData?.co_name)? basicData?.co_name: ''}}</h3>\r\n              <h4>{{(basicData && basicData?.industryname)? basicData?.industryname: ''}}</h4>\r\n            </div>\r\n            <!-- </div> -->\r\n            <div class=\"description\">\r\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec urna vel est consectetur.\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-5 col-sm-12 col-xs-12\">\r\n            <div class=\"inlineBox text-right-desktop\">\r\n              <div class=\"returnBox\">\r\n                <div class=\"title\">\r\n                  <h4>Latest Price</h4>\r\n                </div>\r\n                <div class=\"perc\">\r\n                  <img src=\"assets/images/icons/green-perc-up.svg\" alt=\"\">\r\n                  <span class=\"\">&#x20B9;\r\n                    {{(basicData && basicData?.latest_price)? basicData?.latest_price : ''}}</span></div>\r\n              </div>\r\n              <div class=\"returnBox\">\r\n                <div class=\"title\">\r\n                  <h4>Market Cap</h4>\r\n                </div>\r\n                <div class=\"perc\">\r\n                  <img src=\"assets/images/icons/green-perc-up.svg\" alt=\"\">\r\n                  <span class=\"\">&#x20B9;\r\n                    {{(basicData && basicData?.latest_market_cap)? basicData.latest_market_cap: ''}}</span></div>\r\n              </div>\r\n              <div class=\"col-md-12 min-amt\">\r\n                <p>Last Updated</p>\r\n                <p>{{(basicData && basicData?.date)? getDate(basicData.date): ''}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"row\"> -->\r\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n            <div class=\"title text-center my-title\">\r\n              <h3>52 Week</h3>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 col-xs-12 week52\">\r\n            <div class=\"shadow-grid\">\r\n              <div class=\"grid grid-custom\">\r\n                <div class=\"inlineBox\">\r\n                  <!-- <div class=\"title\"> -->\r\n                  <h4>BSE</h4>\r\n                  <!-- </div> -->\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"returnBox\">\r\n                      <div class=\"title\">\r\n                        <h4>High</h4>\r\n                      </div>\r\n                      <div class=\"perc\">\r\n                        <img src=\"assets/images/icons/green-perc-up.svg\" alt=\"\">\r\n                        <span class=\"color-green\">&#x20B9;\r\n                          {{(basicData && basicData?.fifty_two_week_high_bse)? basicData.fifty_two_week_high_bse: ''}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"returnBox\">\r\n                      <div class=\"title\">\r\n                        <h4>Low</h4>\r\n                      </div>\r\n                      <div class=\"perc\">\r\n                        <img src=\"assets/images/icons/red-perc-down.svg\" alt=\"\">\r\n                        <span class=\"color-red\">&#x20B9;\r\n                          {{(basicData && basicData?.fifty_two_week_low_bse)? basicData.fifty_two_week_low_bse: ''}}</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 col-xs-12 week52\">\r\n            <div class=\"shadow-grid\">\r\n              <div class=\"grid grid-custom\">\r\n                <div class=\"inlineBox\">\r\n                  <!-- <div class=\"title\"> -->\r\n                  <h4>NSE</h4>\r\n                  <!-- </div> -->\r\n                  <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n                    <div class=\"returnBox \">\r\n                      <div class=\"title\">\r\n                        <h4>High</h4>\r\n                      </div>\r\n                      <div class=\"perc\">\r\n                        <img src=\"assets/images/icons/green-perc-up.svg\" alt=\"\">\r\n                        <span class=\"color-green\">&#x20B9;\r\n                          {{(basicData && basicData?.fifty_two_week_high_nse)? basicData.fifty_two_week_high_nse: ''}}</span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"returnBox\">\r\n                      <div class=\"title\">\r\n                        <h4>Low</h4>\r\n                      </div>\r\n                      <div class=\"perc\">\r\n                        <img src=\"assets/images/icons/red-perc-down.svg\" alt=\"\">\r\n                        <span class=\"color-red\">&#x20B9;\r\n                          {{(basicData && basicData?.fifty_two_week_low_nse)? basicData.fifty_two_week_low_nse: ''}}</span>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- </div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 mt30 mb30 portfolio\">\r\n      <div class=\"shadow-grid guage\" *ngIf=\"portfolioData && portfolioData.basic_data\">\r\n        <div class=\"grid grid-custom\">\r\n          <div class=\"title my-title\">\r\n            <h3>Part of Indices</h3>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n            <app-charts #p11></app-charts>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-12 col-xs-12\">\r\n            <app-charts #q1b></app-charts>\r\n          </div>\r\n          <div class=\"col-md-6 table-responsive table-2\">\r\n            <h3>Peer Comparision</h3>\r\n            <table class=\"table table-hover\">\r\n              <thead *ngIf=\"portfolioData && portfolioData.peer_comparison.length>0\">\r\n                <tr>\r\n                  <th *ngFor=\"let key of objectKeys(portfolioData.peer_comparison[0])\">\r\n                    {{_shared.getLabel(this._shared.removeFirstWord(key, \"latest_\"))}}</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngIf=\"portfolioData && portfolioData.peer_comparison.length>0\">\r\n                <tr *ngFor=\"let peer of portfolioData.peer_comparison\">\r\n                  <td *ngFor=\"let key of objectKeys(portfolioData.peer_comparison[0])\">{{_shared.getFixed(peer[key])}}\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n         \r\n          <div class=\"col-md-6 table-responsive table-2\">\r\n            <h3>Other Data</h3>\r\n            <table class=\"table table-hover\">\r\n              <thead>\r\n                <tr>\r\n                  <td></td>\r\n                  <td *ngFor=\"let yr of otherDataCols\">{{yr.name}}</td>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let fld of otherDataField\">\r\n                  <th>{{fld.name}}</th>\r\n                  <td *ngFor=\"let yr of otherDataCols\">{{_shared.getFixed(otherData[fld.title][yr.title])}}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <!-- <div class=\"col-md-3 table-responsive\">\r\n              <h3>Validation Matrices</h3>\r\n              <table class=\"table table-hover\">\r\n                <thead *ngIf=\"portfolioData && portfolioData.validation_matrices\">\r\n                  <tr>\r\n                    <td></td>\r\n                    <td *ngFor=\"let vm of validationMCols\">{{vm.name}}</td>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let fld of validationMFields\">\r\n                    <th>{{fld.name}}</th>\r\n                    <td *ngFor=\"let vm of validationMCols\">\r\n                      {{_shared.getFixed(portfolioData.validation_matrices[vm.title+fld.title])}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <div class=\"row\">\r\n      <div class=\" shadow-grid\">\r\n        <div class=\"grid\">\r\n\r\n          <div class=\"col-md-6 table-responsive\">\r\n            <table class=\"table table-hover\">\r\n              \r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(_api, _shared) {
        this._api = _api;
        this._shared = _shared;
        this.gaugeChart1 = { caption: 'P11', color: '#F2726F', value: 0 };
        this.gaugeChart2 = { caption: 'Q1 B', color: '#F2726F', value: 0 };
        this.objectKeys = Object.keys;
        this.otherDataField = [];
        this.otherDataCols = [];
        this.validationMatrices = [];
        this.validationMCols = [{ title: 'latest_', name: 'Latest' }, { title: 'avg_', name: 'Average' }];
        this.validationMFields = [];
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.getPortfolio();
    };
    PortfolioComponent.prototype.getPortfolio = function () {
        var _this = this;
        this._api.getCompanyPortfolio({ co_code: '34' }).subscribe(function (response) {
            _this.portfolioData = response;
            _this.basicData = _this.portfolioData.basic_data;
            _this.otherData = _this.portfolioData.other_data;
            _this.validationMatrices = _this.portfolioData.validation_matrices;
            _this.gaugeChart1.value = parseInt((_this.portfolioData.part_of_indices.p11 * 100).toFixed(2), 10);
            _this.gaugeChart2.value = parseInt((_this.portfolioData.part_of_indices.q1b * 100).toFixed(2), 10);
            setTimeout(function () {
                _this._guageChart1.updateGaugeValue(_this.gaugeChart1);
                _this._guageChart2.updateGaugeValue(_this.gaugeChart2);
            }, 100);
            _this.objectKeys(_this.otherData).forEach(function (val, key) {
                console.log(key);
                _this.otherDataField.push({
                    title: val, name: _this._shared.getLabel(_this._shared.removeFirstWord(val, 'latest_'))
                });
            });
            _this.objectKeys(_this.otherData[_this.otherDataField[0].title]).reverse().forEach(function (val, key) {
                console.log(key);
                _this.otherDataCols.push({
                    title: val, name: _this._shared.getLabel(val)
                });
            });
            _this.validationMFields.push({ title: 'ev_per_ebitda', name: _this._shared.getLabel('ev_per_ebitda') }, { title: 'p_per_s', name: _this._shared.getLabel('p_per_s') }, { title: 'pe_ratio', name: _this._shared.getLabel('pe_ratio') }, { title: 'pb_ratio', name: _this._shared.getLabel('pb_ratio') });
            console.log(_this.otherDataField, _this.otherDataCols);
        });
    };
    PortfolioComponent.prototype.getDate = function (dt) {
        var d = new Date(dt);
        return (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear());
        // else return dt;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('p11'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioComponent.prototype, "_guageChart1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('q1b'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PortfolioComponent.prototype, "_guageChart2", void 0);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
        this.headers = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            })
        };
    }
    ApiService.prototype.GetRequest = function (Path) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/" + Path, this.headers);
    };
    ApiService.prototype.PostRequest = function (Path, data) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + "/" + Path, JSON.stringify(data), this.headers);
    };
    ApiService.prototype.getCompanyPortfolio = function (data) {
        return this.PostRequest('getCompanyPortFolio', data);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedService = /** @class */ (function () {
    function SharedService() {
    }
    SharedService.prototype.getLabel = function (keyword) {
        if (keyword) {
            keyword = keyword.split('_').join(' ');
            return this.capitalizeFirstLetter(keyword);
        }
        else {
            return keyword;
        }
    };
    SharedService.prototype.capitalizeFirstLetter = function (string) {
        if (string !== '') {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        else {
            return string;
        }
    };
    SharedService.prototype.removeFirstWord = function (field, val) {
        return field.replace(val, '');
    };
    SharedService.prototype.getFixed = function (num) {
        // let num1 = parseFloat(num);
        var n = (parseFloat(num) < 0) ? Math.floor(Math.abs(parseFloat(num)) * 100000) * -1 / 100000 : parseFloat(num).toFixed(4);
        n = (n !== 'NaN') ? n : '-';
        // console.log(num1, n);
        return (typeof num === 'string') ? num : n;
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- start site-footer -->\n<footer class=\"site-footer\">\n  <div class=\"upper-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col col-lg-5 col-md-5 col-sm-12\">\n          <div class=\"widget about-widget\">\n            <div class=\"logo widget-title\">\n              <img src=\"assets/images/footerLogo.svg\" alt>\n              <span>Stock Aladdin</span>\n            </div>\n            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et\n              dolore magna aliqua.</p>\n            <p>Contact us at : <a href=\"mailto:help@stockaladdin.com\">help@stockaladdin.com</a></p>\n            <div class=\"social-icons\">\n              <ul>\n                <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/icons/fb.svg\" alt></a></li>\n                <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/icons/linkedin1.svg\" alt></a></li>\n                <li><a href=\"#\" target=\"_blank\"><img src=\"assets/images/icons/twitter1.svg\" alt></a></li>\n              </ul>\n            </div>\n            <div class=\"copyright\">\n              <p>&copy; Copyright 2019-2020<br />\n                Stock Aladdin Pvt. Ltd.<br />\n                All Right Reserved</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div> <!-- end container -->\n  </div>\n</footer>\n\n<!-- end site-footer -->\n"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Start header -->\n<header id=\"header\" class=\"site-header header-style-2\">\n  <nav class=\"navigation navbar navbar-default\">\n    <div class=\"container\">\n      <div class=\"navbar-header\">\n        <button type=\"button\" class=\"open-btn\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        </button>\n        <a class=\"navbar-brand header-brand\" href=\"/\"><img src=\"assets/images/headerLogo.svg\" alt=\"\"> <span>Stock Aladdin</span></a>\n      </div>\n      <div id=\"navbar\" class=\"navbar-collapse collapse navbar-right navigation-holder\">\n        <button class=\"close-navbar\"><i class=\"ti-close\"></i></button>\n        <ul class=\"nav navbar-nav\">\n          <li >\n            <a [routerLink]=\"['/']\">Home</a>\n          </li>\n          <li >\n            <a [routerLink]=\"['/explore']\">Explore</a>\n          </li>\n          <!-- <li class=\"menu-item-has-children\">\n            <a href=\"#\">Explore</a>\n            <ul class=\"sub-menu\">\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Link</a>\n                <ul class=\"sub-menu\">\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                  <li><a href=\"#\">Link</a></li>\n                </ul>\n              </li>\n            </ul>\n          </li> -->\n          <li class=\"hideMob noHover\">\n            <a href=\"#\" class=\"search-toggle-btn\"><img src=\"assets/images/search.svg\" alt=\"\"></a>\n          </li>\n          <li class=\"noHover\"><a href=\"#\" class=\"headerBtn\"><div class=\"investnowBtn\">Invest Now</div></a></li>\n          <li class=\"noHover\"><a href=\"#\" class=\"headerBtn\"><div class=\"loginBtn\">Login</div></a></li>\n        </ul>\n      </div>\n      <!-- end of nav-collapse -->\n      <div class=\"side-info\">\n        <div class=\"header-search-form-wrapper\">\n          <button class=\"search-toggle-btn mobDisp\"><img src=\"assets/images/search.svg\" alt=\"\"></button>\n          <div class=\"header-search-form\">\n            <form>\n              <div>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search for a stock\">\n                <button type=\"submit\" class=\"searchArrow\"><img src=\"assets/images/search-arrow.svg\" alt=\"\"></button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <!-- end side menu -->\n    </div>\n    <!-- end of container -->\n  </nav>\n</header>\n<!-- end of header -->\n<div class=\"clearfix\"></div>"

/***/ }),

/***/ "./src/app/shared/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'https://api.sma.infi.cf/',
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    window.console.log = function () { };
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\projects\ng-sma\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map