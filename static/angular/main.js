(self["webpackChunkvestibule"] = self["webpackChunkvestibule"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel/panel.component */ 4464);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);



class AppComponent {
    constructor() {
        this.title = 'vestibule';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "vestibule-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_0__.PanelComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["#main-container[_ngcontent-%COMP%] {\n  margin-left: 18rem;\n  padding-top: 2.6rem;\n  height: calc(100vh - 2.6rem);\n  overflow: hidden;\n}\n\n@media only screen and (max-width: 480px) {\n  #main-container[_ngcontent-%COMP%] {\n    margin-left: 1rem;\n    padding-top: 3rem;\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQUNGO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDE4cmVtO1xuICBwYWRkaW5nLXRvcDogMi42cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyLjZyZW0pO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNtYWluLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gICAgcGFkZGluZy10b3A6IDNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ 4464);
/* harmony import */ var _panel_services_status_services_status_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel/services-status/services-status.component */ 4837);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _shows_shows_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shows/shows.module */ 2023);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie-service */ 5602);
/* harmony import */ var _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authentication/token.interceptor */ 2520);
/* harmony import */ var _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./torrents/torrents.module */ 2792);
/* harmony import */ var _find_find_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./find/find.module */ 3170);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _dashboard_show_preview_show_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/show-preview/show-preview.component */ 165);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _movies_movies_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./movies/movies.module */ 1832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2316);


















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_13__.CookieService,
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS,
            useClass: _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_6__.TokenInterceptor,
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _shows_shows_module__WEBPACK_IMPORTED_MODULE_4__.ShowsModule,
            _movies_movies_module__WEBPACK_IMPORTED_MODULE_11__.MoviesModule,
            _find_find_module__WEBPACK_IMPORTED_MODULE_8__.FindModule,
            _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_7__.TorrentsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__.PanelComponent,
        _panel_services_status_services_status_component__WEBPACK_IMPORTED_MODULE_3__.ServicesStatusComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__.DashboardComponent,
        _dashboard_show_preview_show_preview_component__WEBPACK_IMPORTED_MODULE_9__.ShowPreviewComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _shows_shows_module__WEBPACK_IMPORTED_MODULE_4__.ShowsModule,
        _movies_movies_module__WEBPACK_IMPORTED_MODULE_11__.MoviesModule,
        _find_find_module__WEBPACK_IMPORTED_MODULE_8__.FindModule,
        _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_7__.TorrentsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__.SharedModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule] }); })();


/***/ }),

/***/ 5973:
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ 5602);


class AuthenticationService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    getCSRFToken() {
        return this.cookieService.get('csrftoken');
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__.CookieService)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2520:
/*!*****************************************************!*\
  !*** ./src/app/authentication/token.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 5973);


class TokenInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                'X-CSRFToken': this.authService.getCSRFToken()
            }
        });
        return next.handle(request);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows/shows.service */ 3722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _show_preview_show_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-preview/show-preview.component */ 165);
/* harmony import */ var _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/poster-strip/poster-strip.component */ 5894);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 1258);






function DashboardComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DashboardComponent_ng_container_0_div_6_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const show_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r5.showInPreview = show_r4; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "vestibule-poster-strip", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("palette", show_r4.palette_list)("width", "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](show_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](show_r4.next_episode);
} }
function DashboardComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "vestibule-show-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Upcoming Episodes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DashboardComponent_ng_container_0_div_6_Template, 9, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("previewShow", ctx_r0.showInPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.upcomingEpisodesShows);
} }
function DashboardComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "This is where you'll see all the upcoming episodes for your subscribed Shows,");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "but it seems you don't have any subscriptions yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Try finding a new show on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", "/find/results");
} }
class DashboardComponent {
    constructor(showsService) {
        this.showsService = showsService;
    }
    ngOnInit() {
        this.showsService.listShowsByUpcomingEpisodes().subscribe(data => {
            this.upcomingEpisodesShows = data;
            this.showInPreview = this.upcomingEpisodesShows[0];
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["vestibule-dashboard"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["noShows", ""], [3, "previewShow"], [1, "dashboard-model-wrapper"], [1, "dashboard-model-title"], [1, "dashboard-model-entries"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [1, "dashboard-model-entry"], [1, "show-data"], [3, "palette", "width"], [1, "show-title"], [1, "show-next-episode-line"], [1, "no-shows"], [3, "routerLink"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DashboardComponent_ng_container_0_Template, 7, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, DashboardComponent_ng_template_1_Template, 10, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.upcomingEpisodesShows.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _show_preview_show_preview_component__WEBPACK_IMPORTED_MODULE_1__.ShowPreviewComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_2__.PosterStripComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".bullet[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.dashboard-model-wrapper[_ngcontent-%COMP%] {\n  margin: 4rem 0 5rem;\n}\n\n.dashboard-model-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #a4a5a0;\n}\n\n.dashboard-model-entries[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n}\n\n.dashboard-model-entries[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 16rem;\n  margin-right: 1.2rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]:hover   .show-title[_ngcontent-%COMP%] {\n  transform: translate(4px, 0);\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 0.7rem 0;\n  transition: 0.3s;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  font-weight: 400;\n  color: #747470;\n  margin: 0 0 0.5rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%]   .season-status[_ngcontent-%COMP%] {\n  font-weight: 200;\n  display: inline-block;\n  height: 1.2rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-wrapper[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  background-color: #babbb140;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  font-weight: 300;\n  color: #747470;\n  padding: 0.2rem 0.5rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%]   .season-status[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n\n.no-shows[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: #33333360;\n  margin-top: 6rem;\n}\n\n.no-shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.no-shows[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSxjQ0lXO0FETGI7O0FBSUE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFJRTtFQUNFLDRCQUFBO0FBRko7O0FBT0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFRSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzNCWTtFRDRCWixrQkFBQTtBQU5OOztBQVFNO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBTlI7O0FBU007RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFWSjs7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3BEYztFRHFEZCxzQkFBQTtBQVhKOztBQWFJO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBWE47O0FBY0k7RUFDRSxnQkFBQTtBQVpOOztBQWlCQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWRGOztBQWdCRTtFQUNFLGNBQUE7QUFkSjs7QUFpQkU7RUFDRSxjQUFBO0FBZkoiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5idWxsZXQge1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4uZGFzaGJvYXJkLW1vZGVsLXdyYXBwZXIge1xuICBtYXJnaW46IDRyZW0gMCA1cmVtO1xufVxuXG4uZGFzaGJvYXJkLW1vZGVsLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgY29sb3I6ICR1bnNlbGVjdGVkO1xufVxuXG4uZGFzaGJvYXJkLW1vZGVsLWVudHJpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmRhc2hib2FyZC1tb2RlbC1lbnRyeSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDE2cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcblxuICAmOmhvdmVyIC5zaG93LXRpdGxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDApO1xuICB9XG5cbiAgLnNob3ctZGF0YSB7XG5cbiAgICAuc2hvdy10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgbWFyZ2luOiAwLjdyZW0gMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuXG4gICAgLnNob3ctbmV4dC1lcGlzb2RlLWxpbmUge1xuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW07XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWFzb24tc3RhdHVzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2hvdy1yZWNlbnQtYWN0aXZpdHktd3JhcHBlciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYmIxNDA7XG4gIH1cblxuICAuc2hvdy1yZWNlbnQtYWN0aXZpdHktbGluZSB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5zZWFzb24tc3RhdHVzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxuICB9XG59XG5cbi5uby1zaG93cyB7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiAjMzMzMzMzNjA7XG4gIG1hcmdpbi10b3A6IDZyZW07XG5cbiAgcCB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 165:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/show-preview/show-preview.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPreviewComponent": () => (/* binding */ ShowPreviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ 7841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/torrent-download-status/torrent-download-status.component */ 7666);





function ShowPreviewComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r0.show.poster_link, "')");
} }
function ShowPreviewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "vestibule-torrent-download-status", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const torrent_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("S", torrent_r2.season, " E", torrent_r2.episode, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("showTorrent", ctx_r1.torrentToShowTorrent(torrent_r2));
} }
const _c0 = function (a1) { return ["/shows", a1]; };
class ShowPreviewComponent {
    constructor(panelBackgroundService) {
        this.panelBackgroundService = panelBackgroundService;
    }
    set previewShow(newShow) {
        this.show = newShow;
        if (this.show) {
            this.panelBackgroundService.changeBackground(this.show.poster_link);
            this.primaryColor = `rgb(${this.show.palette_list.primary.join(',')})`;
        }
        else {
            this.panelBackgroundService.defaultBackground();
            this.primaryColor = undefined;
        }
    }
    get color() {
        return `rgb(${this.show.palette_list.primary[0]}, ${this.show.palette_list.primary[1]}, ${this.show.palette_list.primary[2]})`;
    }
    ngOnInit() {
    }
    torrentToShowTorrent(torrent) {
        return {
            torrentId: torrent.id,
            showTitle: this.show.title,
            seasonNumber: torrent.season,
            episodeNumber: torrent.episode,
            publicationTime: torrent.publication_time,
            feed: torrent.feed,
            quality: torrent.quality,
            sourceType: torrent.source_type,
            torrentTitle: torrent.title,
            torrentLink: torrent.title,
            isStandaloneTorrent: false,
            downloadStatus: torrent.download_status,
            percentDone: torrent.percent_done
        };
    }
}
ShowPreviewComponent.ɵfac = function ShowPreviewComponent_Factory(t) { return new (t || ShowPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_0__.PanelBackgroundService)); };
ShowPreviewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShowPreviewComponent, selectors: [["vestibule-show-preview"]], inputs: { previewShow: "previewShow" }, decls: 16, vars: 14, consts: [["id", "preview-wrap"], [1, "poster-wrap"], ["class", "poster", 3, "style", 4, "ngIf"], [1, "details-wrap"], [1, "show-title"], [1, "details"], [1, "status"], [1, "next-episode-line"], [1, "season-status-line"], [1, "subscription-link", 3, "routerLink"], [1, "torrents"], ["class", "torrent-wrap", 4, "ngFor", "ngForOf"], [1, "poster"], [1, "torrent-wrap"], [1, "title"], [3, "showTorrent"]], template: function ShowPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ShowPreviewComponent_div_2_Template, 1, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "See Subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ShowPreviewComponent_div_15_Template, 4, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx.primaryColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.show == null ? null : ctx.show.poster_link);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.show.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.show.next_episode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.show.next_episode_season_status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMapInterpolate1"]("border-bottom: 3px solid ", ctx.primaryColor, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c0, ctx.show.imdb_id));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.show.recent_torrents_active);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _shared_torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_1__.TorrentDownloadStatusComponent], styles: ["#preview-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  padding-top: 0.9rem;\n  margin-bottom: 3rem;\n  flex-direction: row;\n}\n\n.poster-wrap[_ngcontent-%COMP%] {\n  transition: background-color 0.1s linear;\n  position: relative;\n  border-radius: 0.2rem;\n}\n\n.poster-wrap[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 18rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 0.2rem;\n}\n\n.details-wrap[_ngcontent-%COMP%] {\n  padding-left: 3rem;\n  padding-top: 1.5rem;\n  position: relative;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .show-title[_ngcontent-%COMP%] {\n  font-size: 2em;\n  font-weight: 500;\n  margin-bottom: 1.5rem;\n  word-break: break-word;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subscription-link[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  position: absolute;\n  bottom: 2rem;\n  border-bottom: 3px solid #a4a5a0;\n  padding-bottom: 5px;\n  opacity: 0.6;\n  transition: 0.3s linear;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subscription-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin-right: 3rem;\n  width: 17rem;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .next-episode-line[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 400;\n  color: #747470;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .season-status-line[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 200;\n  color: #747470;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .torrents[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #747470;\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .torrents[_ngcontent-%COMP%]   .torrent-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 0.3rem;\n  border-radius: 0.6rem;\n  background-color: rgba(164, 165, 160, 0.2);\n}\n\n.details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .torrents[_ngcontent-%COMP%]   .torrent-wrap[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  cursor: default;\n  width: 3.5rem;\n  font-size: 0.9em;\n  padding: 0 0.4rem;\n  text-align: center;\n  color: #747470;\n}\n\n@media only screen and (max-width: 480px) {\n  #preview-wrap[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .poster-wrap[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n    height: 15rem;\n    width: 10rem;\n  }\n\n  .details-wrap[_ngcontent-%COMP%] {\n    padding: 0;\n    width: 100%;\n    text-align: center;\n  }\n  .details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .subscription-link[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    margin-right: 0;\n  }\n  .details-wrap[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   .season-status-line[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUlFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtFO0VBQ0UsYUFBQTtBQUhKOztBQUtJO0VBQ0UsY0N4Qk87RUR5QlAsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUhOOztBQUtNO0VBQ0UsVUFBQTtBQUhSOztBQU9JO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBTE47O0FBT007RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MzQ1U7QURzQ2xCOztBQVFNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDakRVO0FEMkNsQjs7QUFVSTtFQUNFLGdCQUFBO0VBQ0EsY0N2RFk7QUQrQ2xCOztBQVVNO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQ0M1RGlCO0FEb0R6Qjs7QUFVUTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0NyRVE7QUQ2RGxCOztBQWVBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLG1CQUFBO0VBWkY7O0VBZ0JFO0lBQ0UsYUFBQTtJQUNBLFlBQUE7RUFiSjs7RUFpQkE7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0VBZEY7RUFnQkU7SUFDRSx1QkFBQTtFQWRKO0VBZ0JJO0lBQ0UsZ0JBQUE7RUFkTjtFQWdCSTtJQUNFLGVBQUE7RUFkTjtFQWdCTTtJQUNFLG1CQUFBO0VBZFI7QUFDRiIsImZpbGUiOiJzaG93LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuI3ByZXZpZXctd3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiAwLjlyZW07XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5wb3N0ZXItd3JhcCB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4xcyBsaW5lYXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuXG4gIC5wb3N0ZXIge1xuICAgIHdpZHRoOiAxMnJlbTtcbiAgICBoZWlnaHQ6IDE4cmVtO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICB9XG59XG5cbi5kZXRhaWxzLXdyYXAge1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAuc2hvdy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gIC5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnN1YnNjcmlwdGlvbi1saW5rIHtcbiAgICAgIGNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMnJlbTtcbiAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkdW5zZWxlY3RlZDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XG4gICAgICB3aWR0aDogMTdyZW07XG5cbiAgICAgIC5uZXh0LWVwaXNvZGUtbGluZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgICAgfVxuXG4gICAgICAuc2Vhc29uLXN0YXR1cy1saW5lIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvcnJlbnRzIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcblxuICAgICAgLnRvcnJlbnQtd3JhcCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5zZWxlY3RlZC10cmFuc3BhcmVudDtcblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgcGFkZGluZzogMCAwLjRyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgI3ByZXZpZXctd3JhcCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLnBvc3Rlci13cmFwIHtcbiAgICAucG9zdGVyIHtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgICB3aWR0aDogMTByZW07XG4gICAgfVxuICB9XG5cbiAgLmRldGFpbHMtd3JhcCB7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgLnN1YnNjcmlwdGlvbi1saW5rIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgIH1cbiAgICAgIC5zdGF0dXMge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG5cbiAgICAgICAgLnNlYXNvbi1zdGF0dXMtbGluZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 8929:
/*!*************************************************************!*\
  !*** ./src/app/find/find-results/find-results.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindResultsComponent": () => (/* binding */ FindResultsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 1618);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 5105);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shows/shows.service */ 3722);
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ 7841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/pipes/plural-pipe.pipe */ 3773);









function FindResultsComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resultsMsg_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](resultsMsg_r4);
} }
function FindResultsComponent_div_6_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 18);
} }
const _c0 = function (a0, a1) { return { selected: a0, subscribed: a1 }; };
function FindResultsComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FindResultsComponent_div_6_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const result_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.setPreviewShow(result_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FindResultsComponent_div_6_div_2_div_4_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r6 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](5, _c0, result_r6 === ctx_r5.previewShow, result_r6.subscribed));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r5.getPosterStyle(result_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", result_r6.subscribed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r6.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](result_r6.title);
} }
function FindResultsComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FindResultsComponent_div_6_div_2_Template, 10, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.searchResults);
} }
function FindResultsComponent_div_7_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r10.previewShow.year, " ");
} }
function FindResultsComponent_div_7_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r11.previewShow.network, " ");
} }
function FindResultsComponent_div_7_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "pluralPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 1, ctx_r12.previewShow.number_of_seasons, "Season"), "");
} }
function FindResultsComponent_div_7_ng_container_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.addAction);
} }
function FindResultsComponent_div_7_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FindResultsComponent_div_7_ng_container_15_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r17.subscribeToShow(ctx_r17.previewShow); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FindResultsComponent_div_7_ng_container_15_span_3_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.addAction);
} }
const _c1 = function (a1) { return ["/shows", a1]; };
function FindResultsComponent_div_7_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "See Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c1, ctx_r15.previewShow.imdb_id));
} }
function FindResultsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FindResultsComponent_div_7_span_5_Template, 5, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FindResultsComponent_div_7_span_6_Template, 5, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FindResultsComponent_div_7_span_7_Template, 4, 4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "IMDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, FindResultsComponent_div_7_ng_container_15_Template, 4, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, FindResultsComponent_div_7_ng_template_16_Template, 3, 3, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](17);
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.previewShow.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.previewShow.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.previewShow.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.previewShow.number_of_seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.previewShow.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("href", ctx_r3.previewShow.imdb_link, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r3.previewShow.subscribed)("ngIfElse", _r14);
} }
class FindResultsComponent {
    constructor(router, fb, showsService, panelBackgroundService) {
        this.router = router;
        this.fb = fb;
        this.showsService = showsService;
        this.panelBackgroundService = panelBackgroundService;
        this.searchResults = [];
        this.term = '';
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.searchTerm$ = this.searchTerm.asObservable();
        this.loading = false;
        this.searchMode = true;
        this.addLoading = false;
        this.addError = false;
        this.resultsMessage = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject('');
        this.findForm = this.fb.group({
            term: ['', []]
        });
    }
    ngOnInit() {
        var _a;
        this.searchOutput = this.searchTerm$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounce)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.interval)(600)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)((searchTerm) => {
            if (searchTerm.length === 0) {
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)({ shows: { subscribed: [], unsubscribed: [] } });
            }
            this.loading = true;
            return this.showsService.searchShowByTitle(searchTerm);
        }));
        this.searchOutput.subscribe((data) => {
            this.searchResults = data.shows.subscribed.concat(data.shows.unsubscribed);
            if (this.searchResults.length === 1) {
                this.previewShow = this.searchResults[0];
                this.panelBackgroundService.changeBackground(this.previewShow.large_poster_path);
            }
            else {
                this.previewShow = undefined;
                this.panelBackgroundService.defaultBackground();
            }
            this.loading = false;
            if (this.searchResults.length === 0) {
                this.resultsMessage.next('Nothing found, try a different search');
            }
            else {
                this.resultsMessage.next('');
            }
        });
        if ((_a = history.state.data) === null || _a === void 0 ? void 0 : _a.term) {
            this.findForm.controls['term'].setValue(history.state.data.term);
            this.onSearchChange(history.state.data.term);
        }
        else {
            this.resultsMessage.next('Type to start a new search');
        }
    }
    onSearchChange(searchTerm) {
        this.searchTerm.next(searchTerm);
        if (searchTerm) {
            this.resultsMessage.next('');
        }
    }
    setPreviewShow(show) {
        var _a;
        if (((_a = this.previewShow) === null || _a === void 0 ? void 0 : _a.imdb_id) === show.imdb_id) {
            this.panelBackgroundService.defaultBackground();
            this.previewShow = undefined;
            return;
        }
        this.previewShow = show;
        this.previewShowEnriched = undefined;
        this.previewShowTorrents = undefined;
        this.panelBackgroundService.changeBackground(this.previewShow.large_poster_path);
        this.showsService.enrichShowInfo(show.imdb_id).subscribe(data => this.previewShowEnriched = data);
    }
    getPosterStyle(show) {
        const url = show.large_poster_path === 'http://image.tmdb.org/t/p/w500None' ? '/static/images/default_poster.svg' : show.large_poster_path;
        return {
            backgroundImage: `url('${url}')`
        };
    }
    subscribeToShow(show) {
        if (show.subscribed) {
            return;
        }
        this.addLoading = true;
        this.addAction = 'Subscribing to show...';
        this.showsService.subscribeToShow(show.imdb_id).subscribe(data => {
            this.addAction = 'Updating show info...';
            this.showsService.updateShowInfo(data.imdb_id).subscribe(data => {
                this.addAction = 'Searching for torrents...';
                this.showsService.findShowTorrents(data.imdb_id).subscribe(data => {
                    this.addLoading = false;
                    this.router.navigate(['/shows', data.imdb_id]);
                }, () => {
                    this.addLoading = false;
                    this.router.navigate(['/shows', data.imdb_id]);
                });
            }, () => {
                this.addAction = `Failed to subscribe to update show info`;
                this.addLoading = false;
                this.addError = true;
            });
        }, () => {
            this.addAction = `Failed to subscribe to '${show.title}'`;
            this.addLoading = false;
            this.addError = true;
        });
    }
}
FindResultsComponent.ɵfac = function FindResultsComponent_Factory(t) { return new (t || FindResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_1__.PanelBackgroundService)); };
FindResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FindResultsComponent, selectors: [["vestibule-find-results"]], decls: 8, vars: 8, consts: [[1, "find-form", 3, "formGroup"], ["alt", "Find", "src", "/static/images/find_icon.svg", 1, "find-icon"], ["formControlName", "term", "placeholder", "Find", 3, "input"], ["searchInput", ""], ["class", "result-message", 4, "ngIf"], ["class", "search-results", 4, "ngIf"], ["id", "preview-selected-show", 4, "ngIf"], [1, "result-message"], [1, "search-results"], [1, "results"], ["class", "search-result-wrapper", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "search-result-wrapper", 3, "ngClass", "click"], [1, "poster-preview"], [1, "poster-wrapper", 3, "ngStyle"], [1, "data"], ["class", "subscribed-mark", 4, "ngIf"], [1, "year"], [1, "show-title"], [1, "subscribed-mark"], ["id", "preview-selected-show"], [1, "title"], [1, "show-title-tags"], [4, "ngIf"], [1, "show-status-line"], [1, "show-imdb-link"], ["target", "_blank", 3, "href"], [1, "show-actions"], [4, "ngIf", "ngIfElse"], ["subscribed", ""], [1, "bullet"], [1, "action", "subscription", 3, "click"], ["class", "add-action", 4, "ngIf"], [1, "add-action"], [3, "routerLink"], [1, "action", "subscription"]], template: function FindResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function FindResultsComponent_Template_input_input_2_listener($event) { return ctx.onSearchChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FindResultsComponent_p_4_Template, 2, 1, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, FindResultsComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, FindResultsComponent_div_7_Template, 18, 8, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.findForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 6, ctx.resultsMessage));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.searchResults.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.previewShow);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgStyle, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe, _shared_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_2__.PluralPipePipe], styles: ["@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes pulse {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.find-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0.5rem 0 1rem 0;\n}\n.find-form[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n.find-form[_ngcontent-%COMP%]   .find-icon.loading[_ngcontent-%COMP%] {\n  animation: pulse 1s infinite;\n}\n.find-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 2em;\n  margin-top: -6px;\n}\n.result-message[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  font-size: 1.1em;\n  opacity: 0.4;\n}\n.imdb-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-weight: 100;\n  color: #a4a5a0;\n  transition: 0.2s;\n}\n.imdb-link[_ngcontent-%COMP%]:hover {\n  color: #ccab21;\n}\n.loading-enriched[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.loading-enriched[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 0.9rem;\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n.search-results[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\n.search-results[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  font-size: 0.9em;\n  color: #747470;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-y: auto;\n  height: 16rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0 0.5rem 0.5rem 0;\n  position: relative;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .poster-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper.selected[_ngcontent-%COMP%]   .poster-wrapper[_ngcontent-%COMP%] {\n  height: 15rem;\n  width: 10rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper.selected[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  opacity: 0;\n  top: 15.5rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper.selected[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .subscribed-mark[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .poster-wrapper[_ngcontent-%COMP%] {\n  height: 9rem;\n  width: 6rem;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: rgba(128, 128, 128, 0.3);\n  margin: 0.15rem 0.5rem 0 0;\n  border-radius: 0.2rem;\n  transition: 0.3s;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  opacity: 1;\n  width: 6rem;\n  position: absolute;\n  top: 9.5rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .subscribed-mark[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  width: 9px;\n  height: 9px;\n  background-color: #3f9359;\n  border-radius: 50%;\n  position: absolute;\n  right: 0;\n  top: 0.35rem;\n  opacity: 1;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  color: #747470;\n  font-size: 0.75em;\n  font-weight: 100;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-title[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n#preview-selected-show[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-top: 1rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: 15rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 0.3rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  margin: 0 0 1.5rem;\n  font-weight: 500;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-title-tags[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-status-line[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 20rem;\n  padding-bottom: 0.2rem;\n  margin-top: 1.5rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .add-action[_ngcontent-%COMP%] {\n  font-weight: 100;\n  display: inline-block;\n  margin-right: 1rem;\n  padding-top: 0.1rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  border-bottom: 3px solid;\n  padding-bottom: 5px;\n  font-size: 1.1em;\n  transition: 0.2s;\n  cursor: pointer;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.subscription[_ngcontent-%COMP%] {\n  border-color: #3f9359;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.subscription[_ngcontent-%COMP%]:hover {\n  color: #3f9359;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLHVCQUFBO0VBRE47RUFHRTtJQUNJLHlCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0U7SUFBTyxVQUFBO0VBRFA7RUFFQTtJQUFPLFlBQUE7RUFDUDtFQUFBO0lBQU8sVUFBQTtFQUdQO0FBQ0Y7QUFEQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUdGO0FBREU7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUdKO0FBREk7RUFDRSw0QkFBQTtBQUdOO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBRjtBQUdBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NqQ1c7RURrQ1gsZ0JBQUE7QUFBRjtBQUVFO0VBQ0UsY0FBQTtBQUFKO0FBSUE7RUFDRSxxQkFBQTtBQURGO0FBR0U7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUNBQUE7QUFESjtBQUtBO0VBQ0ksaUJBQUE7QUFGSjtBQUlFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDMURjO0FEd0RsQjtBQUtFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQUhKO0FBS0k7RUFDRSxhQUFBO0FBSE47QUFNSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0FBSk47QUFNTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUpSO0FBUVE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQU5WO0FBU1E7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQVBWO0FBU1U7RUFDRSxVQUFBO0FBUFo7QUFZTTtFQUNFLGVBQUE7QUFWUjtBQWFNO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQVhSO0FBY007RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBWlI7QUFjUTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtBQVpWO0FBZVE7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJDMUlHO0VEMklILGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFiVjtBQWdCUTtFQUNFLGNDM0lRO0VENElSLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkVjtBQWlCUTtFQUNFLGdCQUFBO0FBZlY7QUFzQkE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBbkJGO0FBcUJFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQW5CSjtBQXVCSTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXJCTjtBQXdCSTtFQUNFLHFCQUFBO0FBdEJOO0FBeUJJO0VBQ0UsZ0JBQUE7QUF2Qk47QUEwQkk7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBeEJOO0FBMEJNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUEyQk07RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXpCUjtBQTJCUTtFQUNFLHFCQ25ORztBRDBMYjtBQTJCVTtFQUNFLGNDdE5DO0FENkxiIiwiZmlsZSI6ImZpbmQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcHVsc2Uge1xuICAwJSAgIHsgb3BhY2l0eToxOyB9XG4gIDUwJSAgeyBvcGFjaXR5OjAuNTsgfVxuICAxMDAlIHsgb3BhY2l0eToxOyB9XG59XG5cbi5maW5kLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuNXJlbSAwIDFyZW0gMDtcblxuICAuZmluZC1pY29uIHtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuXG4gICAgJi5sb2FkaW5nIHtcbiAgICAgIGFuaW1hdGlvbjogcHVsc2UgMXMgaW5maW5pdGU7XG4gICAgfVxuICB9XG5cbiAgaW5wdXQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG4gIH1cbn1cblxuLnJlc3VsdC1tZXNzYWdlIHtcbiAgcGFkZGluZy10b3A6IDFyZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLmltZGItbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgY29sb3I6ICR1bnNlbGVjdGVkO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoMjA0LCAxNzEsIDMzKTtcbiAgfVxufVxuXG4ubG9hZGluZy1lbnJpY2hlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBpbWcge1xuICAgIGhlaWdodDogMC45cmVtO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzcGluO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwMG1zO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgfVxufVxuXG4uc2VhcmNoLXJlc3VsdHMge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gIH1cblxuICAucmVzdWx0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGhlaWdodDogMTZyZW07XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWFyY2gtcmVzdWx0LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBtYXJnaW46IDAgMC41cmVtIDAuNXJlbSAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxuICAgICAgLnBvc3Rlci1wcmV2aWV3IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIH1cblxuICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgIC5wb3N0ZXItd3JhcHBlciB7XG4gICAgICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0YSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB0b3A6IDE1LjVyZW07XG5cbiAgICAgICAgICAuc3Vic2NyaWJlZC1tYXJrIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5wb3N0ZXItd3JhcHBlciB7XG4gICAgICAgIGhlaWdodDogOXJlbTtcbiAgICAgICAgd2lkdGg6IDZyZW07XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjMpO1xuICAgICAgICBtYXJnaW46IDAuMTVyZW0gMC41cmVtIDAgMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgfVxuXG4gICAgICAuZGF0YSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHdpZHRoOiA2cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogOS41cmVtO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnNjcmliZWQtbWFyayB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC4xcztcbiAgICAgICAgICB3aWR0aDogOXB4O1xuICAgICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR2YWx1ZS10cnVlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgdG9wOiAwLjM1cmVtO1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAueWVhciB7XG4gICAgICAgICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjc1ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zaG93LXRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNwcmV2aWV3LXNlbGVjdGVkLXNob3cge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcblxuICAucG9zdGVyLXdyYXAge1xuICAgIHdpZHRoOiAxMHJlbTtcbiAgICBoZWlnaHQ6IDE1cmVtO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zcmVtO1xuICB9XG5cbiAgLmRhdGEge1xuICAgIC50aXRsZSB7XG4gICAgICBmb250LXNpemU6IDIuM3JlbTtcbiAgICAgIG1hcmdpbjogMCAwIDEuNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLnNob3ctdGl0bGUtdGFncyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLnNob3ctc3RhdHVzLWxpbmUge1xuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB9XG5cbiAgICAuc2hvdy1hY3Rpb25zIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuMnJlbTtcbiAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICAgICAgLmFkZC1hY3Rpb24ge1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMXJlbTtcbiAgICAgIH1cblxuICAgICAgLmFjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJi5zdWJzY3JpcHRpb24ge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWU7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkdmFsdWUtdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRtYWluLWNvbG9yOiAjZTNlNGRiO1xuJHNlY29uZGFyeS1jb2xvcjogI0M4QzlDMDtcbiR0cmFuc3BhcmVudC1saWdodDogI2UxZTJkNjY2O1xuJHRyYW5zcGFyZW50LWxpZ2h0LTI6ICNkMmQzYzc3NTtcbiRsaWdodC1ncmF5OiAjYzljYWM2O1xuJHRyYW5zcGFyZW50LXNlbWktbGlnaHQ6IHJnYmEoMjI1LCAyMjYsIDIxNCwgMC42NSk7XG4kdG9ycmVudC1ncmVlbjogIzUwYWQ2ZjtcbiR0b3JyZW50LWdyZWVuLWhvdmVyOiAjMmU3MjQzO1xuJHZhbHVlLXRydWUtaG92ZXI6ICMyMDZmMzg7XG4kdmFsdWUtdHJ1ZTogIzNmOTM1OTtcbiR2YWx1ZS1mYWxzZTogI0FGNEY2ODtcbiR2YWx1ZS1mYWxzZS1ob3ZlcjogIzk3Mjk0NTtcbiR2YWx1ZS1uZXV0cmFsOiAjMDA3MWJjO1xuJG1haW4tYmFjazogI2UzZTRkYjtcbiRtYWluLWJhY2stZGFyazogI2JmYmZiODtcbiRtYWluLWJhY2stZGFyay10cmFuc3BhcmVudDogcmdiYSgxOTEsIDE5MSwgMTg0LCAwLjUpO1xuJHVuc2VsZWN0ZWQ6ICNhNGE1YTA7XG4kdW5zZWxlY3RlZC1kYXJrOiAjNzQ3NDcwO1xuJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMTY0LCAxNjUsIDE2MCwgMC4yKTtcbiRza2lwOiAjZWRiZjNiO1xuJGJsYWNrOiAjMzMzO1xuJGxpZ2h0LXRleHQ6ICNkMmQzYzc7XG4iXX0= */"] });


/***/ }),

/***/ 998:
/*!*********************************************!*\
  !*** ./src/app/find/find-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindRoutingModule": () => (/* binding */ FindRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-results/find-results.component */ 8929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const routes = [
    { path: 'find/results', component: _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_0__.FindResultsComponent },
];
class FindRoutingModule {
}
FindRoutingModule.ɵfac = function FindRoutingModule_Factory(t) { return new (t || FindRoutingModule)(); };
FindRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FindRoutingModule });
FindRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FindRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3170:
/*!*************************************!*\
  !*** ./src/app/find/find.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FindModule": () => (/* binding */ FindModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _find_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-routing.module */ 998);
/* harmony import */ var _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-results/find-results.component */ 8929);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






class FindModule {
}
FindModule.ɵfac = function FindModule_Factory(t) { return new (t || FindModule)(); };
FindModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FindModule });
FindModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _find_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FindModule, { declarations: [_find_results_find_results_component__WEBPACK_IMPORTED_MODULE_1__.FindResultsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _find_routing_module__WEBPACK_IMPORTED_MODULE_0__.FindRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 595:
/*!*****************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-details.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsComponent": () => (/* binding */ MovieDetailsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var _movie_torrents_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-torrents.repository */ 798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie.service */ 706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ 7841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/loading-line/loading-line.component */ 820);
/* harmony import */ var _torrents_movie_torrent_movie_torrent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../torrents/movie-torrent/movie-torrent.component */ 853);












function MovieDetailsComponent_ng_container_0_vestibule_loading_line_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "vestibule-loading-line");
} }
function MovieDetailsComponent_ng_container_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r2.movie.poster_link, "')");
} }
function MovieDetailsComponent_ng_container_0_ng_container_20_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const director_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](director_r8);
} }
function MovieDetailsComponent_ng_container_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Directed By");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MovieDetailsComponent_ng_container_0_ng_container_20_p_4_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.movie.crew.directors);
} }
function MovieDetailsComponent_ng_container_0_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Runtime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.movie.runtime_text);
} }
function MovieDetailsComponent_ng_container_0_ng_container_22_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const production_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](production_r10);
} }
function MovieDetailsComponent_ng_container_0_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Studio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MovieDetailsComponent_ng_container_0_ng_container_22_p_4_Template, 2, 1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.movie.crew.production);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_1_vestibule_movie_torrent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "vestibule-movie-torrent", 30);
} if (rf & 2) {
    const torrent_r16 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("movieTorrent", torrent_r16)("primaryColor", ctx_r15.primaryColor);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Active");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MovieDetailsComponent_ng_container_0_div_31_ng_container_1_vestibule_movie_torrent_4_Template, 1, 2, "vestibule-movie-torrent", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movieTorrents_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", movieTorrents_r11.active);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_2_vestibule_movie_torrent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "vestibule-movie-torrent", 30);
} if (rf & 2) {
    const torrent_r19 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("movieTorrent", torrent_r19)("primaryColor", ctx_r18.primaryColor);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Matching Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MovieDetailsComponent_ng_container_0_div_31_ng_container_2_vestibule_movie_torrent_4_Template, 1, 2, "vestibule-movie-torrent", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movieTorrents_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", movieTorrents_r11.matching);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_3_vestibule_movie_torrent_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "vestibule-movie-torrent", 30);
} if (rf & 2) {
    const torrent_r22 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("movieTorrent", torrent_r22)("primaryColor", ctx_r21.primaryColor);
} }
function MovieDetailsComponent_ng_container_0_div_31_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Not Matching Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, MovieDetailsComponent_ng_container_0_div_31_ng_container_3_vestibule_movie_torrent_4_Template, 1, 2, "vestibule-movie-torrent", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const movieTorrents_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", movieTorrents_r11.notMatching);
} }
function MovieDetailsComponent_ng_container_0_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, MovieDetailsComponent_ng_container_0_div_31_ng_container_1_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, MovieDetailsComponent_ng_container_0_div_31_ng_container_2_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, MovieDetailsComponent_ng_container_0_div_31_ng_container_3_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movieTorrents_r11 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", movieTorrents_r11.active.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", movieTorrents_r11.matching.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", movieTorrents_r11.notMatching.length);
} }
const _c0 = function (a0, a1, a2) { return { active: a0, matching: a1, notMatching: a2 }; };
function MovieDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, MovieDetailsComponent_ng_container_0_vestibule_loading_line_12_Template, 1, 0, "vestibule-loading-line", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, MovieDetailsComponent_ng_container_0_div_17_Template, 1, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, MovieDetailsComponent_ng_container_0_ng_container_20_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, MovieDetailsComponent_ng_container_0_ng_container_21_Template, 6, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, MovieDetailsComponent_ng_container_0_ng_container_22_Template, 5, 1, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieDetailsComponent_ng_container_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r24.updateInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Update Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieDetailsComponent_ng_container_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r26.findTorrents(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Find Torrents");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MovieDetailsComponent_ng_container_0_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r27.unsubscribe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Unsubscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, MovieDetailsComponent_ng_container_0_div_31_Template, 4, 3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](34, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.movie.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMapInterpolate1"]("background-color: ", ctx_r0.primaryColor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.movie.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.movie.release_date_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.movie == null ? null : ctx_r0.movie.poster_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.movie.crew == null ? null : ctx_r0.movie.crew.directors);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.movie.runtime_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.movie.crew == null ? null : ctx_r0.movie.crew.production);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 12, ctx_r0.repo.activeTorrents$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 14, ctx_r0.repo.matchingTorrents$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](34, 16, ctx_r0.repo.notMatchingTorrents$)));
} }
class MovieDetailsComponent {
    constructor(route, router, movieService, repo, panelBackgroundService) {
        this.route = route;
        this.router = router;
        this.movieService = movieService;
        this.repo = repo;
        this.panelBackgroundService = panelBackgroundService;
        this.loading = false;
    }
    ngOnInit() {
        this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(params => {
            const tmdbId = params['tmdb_id'];
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([
                this.movieService.movieDetails(tmdbId),
                this.movieService.getMovieTorrents(tmdbId)
            ]);
        })).subscribe(([movie, _]) => {
            this.movie = movie;
            this.panelBackgroundService.changeBackground(movie.poster_link);
            this.primaryColor = `rgb(${movie.palette_list.primary.join(',')})`;
        });
    }
    updateInfo() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.movieService.updateMovieInfo(this.movie.tmdb_id).subscribe(movie => {
            this.loading = false;
            this.movie = movie;
        });
    }
    findTorrents() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.movieService.findMovieTorrents(this.movie.tmdb_id).subscribe(() => {
            this.loading = false;
        });
    }
    unsubscribe() {
        if (this.loading) {
            return;
        }
        this.loading = true;
        this.movieService.unsubscribeFromMovie(this.movie.tmdb_id).subscribe(() => {
            this.loading = false;
            this.router.navigate(['/movies']);
        });
    }
}
MovieDetailsComponent.ɵfac = function MovieDetailsComponent_Factory(t) { return new (t || MovieDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_movie_torrents_repository__WEBPACK_IMPORTED_MODULE_0__.MovieTorrentsRepository), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__.PanelBackgroundService)); };
MovieDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MovieDetailsComponent, selectors: [["vestibule-movie-details"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_movie_service__WEBPACK_IMPORTED_MODULE_1__.MovieService, _movie_torrents_repository__WEBPACK_IMPORTED_MODULE_0__.MovieTorrentsRepository])], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "wrapper"], [1, "header"], [1, "content"], [1, "header-content"], [1, "header-title"], [1, "header-divider"], [1, "status"], [1, "release-date"], [1, "main"], [1, "top"], [1, "data"], [1, "poster-wrap"], ["class", "poster", 3, "style", 4, "ngIf"], [1, "meta"], [1, "details"], [1, "actions"], [3, "click"], [1, "danger", 3, "click"], [1, "torrents-main"], ["class", "torrents", 4, "ngIf"], [1, "poster"], [1, "crew-position"], [1, "job"], ["class", "name", 4, "ngFor", "ngForOf"], [1, "name"], [1, "torrents"], [1, "torrents-list-title"], [1, "torrents-list"], [3, "movieTorrent", "primaryColor", 4, "ngFor", "ngForOf"], [3, "movieTorrent", "primaryColor"]], template: function MovieDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, MovieDetailsComponent_ng_container_0_Template, 35, 22, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.movie);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_3__.LoadingLineComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _torrents_movie_torrent_movie_torrent_component__WEBPACK_IMPORTED_MODULE_4__.MovieTorrentComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe], styles: [".wrapper[_ngcontent-%COMP%] {\n  margin-right: 4rem;\n  height: calc(100vh - 2.6rem);\n  display: flex;\n  flex-direction: column;\n}\n\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.header[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  color: #747470;\n  border: 1px solid;\n  border-radius: 0.2rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.2rem 0.5rem 0.25rem;\n  line-height: 1rem;\n  font-weight: 300;\n  margin-right: 1rem;\n}\n\n.header[_ngcontent-%COMP%]   .release-date[_ngcontent-%COMP%] {\n  color: #747470;\n  font-weight: 200;\n}\n\n.main[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 18rem;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%] {\n  transition: background-color 0.1s linear;\n  position: relative;\n  border-radius: 0.2rem;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 12rem;\n  height: 18rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 0.2rem;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%] {\n  padding: 1rem 0 1rem 2rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .crew-position[_ngcontent-%COMP%] {\n  margin: 0 3rem 2rem 0;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .crew-position[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.5rem 0.6rem;\n  line-height: 1em;\n  font-weight: 400;\n  font-size: 1em;\n  border-radius: 0.2rem;\n  cursor: pointer;\n  transition: 0.3s;\n  margin-right: 1rem;\n  background-color: #bfbfb8;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #747470;\n  color: white;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%] {\n  border: solid 1px #972945;\n  background-color: transparent;\n  color: #972945;\n}\n\n.main[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .meta[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button.danger[_ngcontent-%COMP%]:hover {\n  background-color: #AF4F68;\n  color: white;\n}\n\n.torrents-main[_ngcontent-%COMP%] {\n  margin-top: 4rem;\n  background-color: #c9cac669;\n  padding: 2rem;\n  border-radius: 0.2rem;\n  height: 25rem;\n}\n\n.torrents-main[_ngcontent-%COMP%]   .torrents[_ngcontent-%COMP%] {\n  height: 100%;\n  overflow: scroll;\n}\n\n.torrents-main[_ngcontent-%COMP%]   .torrents-list-title[_ngcontent-%COMP%] {\n  color: #747470;\n  margin-bottom: 1rem;\n}\n\n.torrents-main[_ngcontent-%COMP%]   .torrents-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURGOztBQUtFO0VBQ0UsOEJBQUE7QUFGSjs7QUFLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUU7RUFDRSxjQ0pjO0VES2QsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9FO0VBQ0UsY0NmYztFRGdCZCxnQkFBQTtBQUxKOztBQVNBO0VBQ0UsZ0JBQUE7QUFORjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVFJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQU5OOztBQVFNO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBTlY7O0FBUVU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBTlo7O0FBVU07RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBUlI7O0FBVVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFSVjs7QUFVVTtFQUNFLHFCQUFBO0FBUlo7O0FBVVk7RUFDRSxnQkFBQTtBQVJkOztBQWFRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBWFY7O0FBYVU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDcEZLO0FEeUVqQjs7QUFhWTtFQUNFLHlCQ3BGSTtFRHFGSixZQUFBO0FBWGQ7O0FBY1k7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0NqR007QURxRnBCOztBQWNjO0VBQ0UseUJDckdGO0VEc0dFLFlBQUE7QUFaaEI7O0FBc0JBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBbkJKOztBQXNCRTtFQUNFLGNDdEhjO0VEdUhkLG1CQUFBO0FBcEJKOztBQXVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQXJCSiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi53cmFwcGVyIHtcbiAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyLjZyZW0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uaGVhZGVyIHtcbiAgLmNvbnRlbnQge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxuXG4gIC5oZWFkZXItY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuc3RhdHVzIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW0gMC4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuXG4gIC5yZWxlYXNlLWRhdGUge1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cbn1cblxuLm1haW4ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gIC50b3Age1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgaGVpZ2h0OiAxOHJlbTtcblxuICAgICAgLnBvc3Rlci13cmFwIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG5cbiAgICAgICAgICAucG9zdGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMThyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLm1ldGEge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDAgMXJlbSAycmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgIC5jcmV3LXBvc2l0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAzcmVtIDJyZW0gMDtcblxuICAgICAgICAgICAgLmpvYiB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC42cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1iYWNrLWRhcms7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZGFuZ2VyIHtcbiAgICAgICAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggJHZhbHVlLWZhbHNlLWhvdmVyO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgY29sb3I6ICR2YWx1ZS1mYWxzZS1ob3ZlcjtcblxuICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50b3JyZW50cy1tYWluIHtcbiAgbWFyZ2luLXRvcDogNHJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M5Y2FjNjY5O1xuICBwYWRkaW5nOiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gIGhlaWdodDogMjVyZW07XG5cbiAgLnRvcnJlbnRzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuXG4gIC50b3JyZW50cy1saXN0LXRpdGxlIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLnRvcnJlbnRzLWxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 798:
/*!*******************************************************************!*\
  !*** ./src/app/movies/movie-details/movie-torrents.repository.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieTorrentsRepository": () => (/* binding */ MovieTorrentsRepository)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf */ 2435);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/elf-entities */ 9001);
/* harmony import */ var _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../torrents/torrent */ 3150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);




const { state, config } = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.createState)((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.withEntities)({ initialValue: [] }));
const store = new _ngneat_elf__WEBPACK_IMPORTED_MODULE_1__.Store({ name: 'movie-torrents', state, config });
class MovieTorrentsRepository {
    constructor() {
        this.matchingTorrents$ = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntitiesApply)({
            mapEntity: (t) => t,
            filterEntity: (t) => t.download_status === _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.NEVER_STARTED && t.profile_match
        }));
        this.notMatchingTorrents$ = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntitiesApply)({
            mapEntity: (t) => t,
            filterEntity: (t) => t.download_status === _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.NEVER_STARTED && !t.profile_match
        }));
        this.activeTorrents$ = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.selectAllEntitiesApply)({
            mapEntity: (t) => t,
            filterEntity: (t) => t.download_status !== _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.NEVER_STARTED
        }));
    }
    setTorrents(torrents) {
        store.update((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_2__.setEntities)(torrents));
    }
}
MovieTorrentsRepository.ɵfac = function MovieTorrentsRepository_Factory(t) { return new (t || MovieTorrentsRepository)(); };
MovieTorrentsRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MovieTorrentsRepository, factory: MovieTorrentsRepository.ɵfac });


/***/ }),

/***/ 706:
/*!*******************************************************!*\
  !*** ./src/app/movies/movie-details/movie.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieService": () => (/* binding */ MovieService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _movie_torrents_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-torrents.repository */ 798);




class MovieService {
    constructor(http, repo) {
        this.http = http;
        this.repo = repo;
    }
    movieDetails(tmdb_id) {
        return this.http.get(`api/movies/${tmdb_id}`);
    }
    unsubscribeFromMovie(tmdb_id) {
        return this.http.delete(`api/movies/${tmdb_id}`);
    }
    updateMovieInfo(tmdb_id) {
        return this.http.get(`api/movies/update_info/${tmdb_id}`);
    }
    getMovieTorrents(tmdb_id) {
        return this.http.get(`api/movies/torrents/${tmdb_id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(torrents => torrents.torrents), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(torrents => this.repo.setTorrents(torrents)));
    }
    findMovieTorrents(tmdb_id) {
        return this.http.get(`api/movies/find_torrents/${tmdb_id}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(torrents => torrents.torrents), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(torrents => this.repo.setTorrents(torrents)));
    }
}
MovieService.ɵfac = function MovieService_Factory(t) { return new (t || MovieService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_movie_torrents_repository__WEBPACK_IMPORTED_MODULE_0__.MovieTorrentsRepository)); };
MovieService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MovieService, factory: MovieService.ɵfac });


/***/ }),

/***/ 8582:
/*!*************************************************************!*\
  !*** ./src/app/movies/movies-list/movies-list.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesListComponent": () => (/* binding */ MoviesListComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 1143);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 639);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 9902);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 2663);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 1486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 1134);
/* harmony import */ var _shared_animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/animations/fadeInOut */ 196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _movies_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movies.service */ 149);
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ 7841);
/* harmony import */ var _movies_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../movies.repository */ 2729);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-line/loading-line.component */ 820);
/* harmony import */ var _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/poster-strip/poster-strip.component */ 5894);













function MoviesListComponent_vestibule_loading_line_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "vestibule-loading-line");
} }
function MoviesListComponent_a_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const movie_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMapInterpolate1"]("background-image: url('", movie_r3.poster_link, "')");
} }
const _c0 = function (a1) { return ["/movie", a1]; };
function MoviesListComponent_a_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function MoviesListComponent_a_7_Template_a_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const movie_r3 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.movieHover(movie_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MoviesListComponent_a_7_div_2_Template, 1, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "vestibule-poster-strip", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInOutAnimation", undefined)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, movie_r3.tmdb_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", movie_r3 == null ? null : movie_r3.poster_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "6rem")("palette", movie_r3.palette_list);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r3.release_date_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r3.status);
} }
function MoviesListComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 18);
} if (rf & 2) {
    const movie_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMapInterpolate1"]("background-image: url('", movie_r8.poster_link, "')");
} }
function MoviesListComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 24);
} }
function MoviesListComponent_div_10_vestibule_loading_line_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "vestibule-loading-line", 25);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "6rem");
} }
const _c1 = function (a0) { return { subscribing: a0 }; };
function MoviesListComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("mouseenter", function MoviesListComponent_div_10_Template_div_mouseenter_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const movie_r8 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.movieHover(movie_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MoviesListComponent_div_10_div_2_Template, 1, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MoviesListComponent_div_10_div_6_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MoviesListComponent_div_10_vestibule_loading_line_7_Template, 1, 1, "vestibule-loading-line", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MoviesListComponent_div_10_Template_div_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const movie_r8 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.addMovie(movie_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInOutAnimation", undefined)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c1, movie_r8.subscribing));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", movie_r8 == null ? null : movie_r8.poster_link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !movie_r8.subscribing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", movie_r8.subscribing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r8.release_date_text);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](movie_r8.subscribing ? "Subscribing" : "Subscribe");
} }
class MoviesListComponent {
    constructor(moviesService, panelBackgroundService, repo, router) {
        this.moviesService = moviesService;
        this.panelBackgroundService = panelBackgroundService;
        this.repo = repo;
        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.searching = false;
        this.subscribing = false;
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
        this.movies$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.combineLatest)([
            this.repo.$movies,
            this.filter.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(undefined))
        ]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(([movies, _]) => {
            var _a;
            movies = movies || [];
            if (!((_a = this.filter) === null || _a === void 0 ? void 0 : _a.value)) {
                return movies;
            }
            return movies.filter(movie => movie.title.toLocaleLowerCase().includes(this.filter.value.toLocaleLowerCase()));
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(movies => {
            if (movies.length) {
                this.panelBackgroundService.changeBackground(movies[0].poster_link);
            }
        }));
        this.unsubscribedMovies$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject([]);
    }
    ngOnInit() {
        this.moviesService.listMovies().subscribe();
        this.filter.valueChanges
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.debounceTime)(400), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.tap)(() => this.unsubscribedMovies$.next([])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(() => {
            var _a;
            if (((_a = this.filter) === null || _a === void 0 ? void 0 : _a.value) && this.filter.value.length > 1) {
                this.searching = true;
                return this.moviesService.searchMovie(this.filter.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.filter.valueChanges));
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)([]);
        }))
            .subscribe(movies => {
            this.searching = false;
            this.unsubscribedMovies$.next(movies);
        });
    }
    primaryColor(movie) {
        return `rgb(${movie.palette_list.primary.join(',')})`;
    }
    movieHover(movie) {
        this.panelBackgroundService.changeBackground(movie.poster_link);
    }
    addMovie(movie) {
        if (this.subscribing) {
            return;
        }
        movie.subscribing = true;
        this.subscribing = true;
        this.moviesService.subscribeToMovie(movie.tmdb_id).subscribe(() => {
            this.subscribing = false;
            movie.subscribing = false;
            this.router.navigate(['/movie', movie.tmdb_id]);
        }, () => {
            this.subscribing = false;
            movie.subscribing = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
}
MoviesListComponent.ɵfac = function MoviesListComponent_Factory(t) { return new (t || MoviesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_movies_service__WEBPACK_IMPORTED_MODULE_1__.MoviesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__.PanelBackgroundService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_movies_repository__WEBPACK_IMPORTED_MODULE_3__.MoviesRepository), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_18__.Router)); };
MoviesListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MoviesListComponent, selectors: [["vestibule-movies-list"]], decls: 12, vars: 8, consts: [[1, "movies-status-list"], [1, "header"], [1, "content"], ["placeholder", "Search Movies", "type", "text", 1, "filter", 3, "formControl"], [4, "ngIf"], [1, "lists"], [1, "movie-list"], ["class", "movie", 3, "routerLink", "mouseenter", 4, "ngFor", "ngForOf"], ["class", "movie unsubscribed", 3, "ngClass", "mouseenter", 4, "ngFor", "ngForOf"], [1, "movie", 3, "routerLink", "mouseenter"], [1, "poster-wrap"], ["class", "poster", 3, "style", 4, "ngIf"], [1, "data"], [1, "title"], [3, "width", "palette"], [1, "release-date"], [1, "release-data"], [1, "status"], [1, "poster"], [1, "movie", "unsubscribed", 3, "ngClass", "mouseenter"], ["class", "unsubscribed-poster-strip", 4, "ngIf"], [3, "width", 4, "ngIf"], [1, "subscribe", 3, "click"], [1, "action"], [1, "unsubscribed-poster-strip"], [3, "width"]], template: function MoviesListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, MoviesListComponent_vestibule_loading_line_4_Template, 1, 0, "vestibule-loading-line", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MoviesListComponent_a_7_Template, 12, 10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MoviesListComponent_div_10_Template, 13, 10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.searching);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 4, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](11, 6, ctx.unsubscribedMovies$));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _shared_loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_4__.LoadingLineComponent, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterLinkWithHref, _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__.PosterStripComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe], styles: [".movies-status-list[_ngcontent-%COMP%] {\n  margin-right: 4rem;\n}\n\n.header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.header[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n}\n\n.filter[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  font-size: 1.3em;\n  font-weight: 400;\n  line-height: 1.8rem;\n  width: 100%;\n}\n\n.lists[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  height: 75vh;\n  padding-bottom: 4rem;\n  overflow: auto;\n}\n\n.movie-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  grid-column-gap: 4rem;\n  column-gap: 4rem;\n}\n\n.movie[_ngcontent-%COMP%] {\n  margin-bottom: 4rem;\n  width: 21rem;\n  height: 13.5rem;\n  display: flex;\n  flex-direction: row;\n  cursor: pointer;\n}\n\n.movie[_ngcontent-%COMP%]:hover   .data[_ngcontent-%COMP%] {\n  background-color: #d2d3c7;\n}\n\n.movie[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%] {\n  transition: background-color 0.1s linear;\n  position: relative;\n  border-radius: 0.2rem;\n}\n\n.movie[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 9rem;\n  height: 13.5rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 0.2rem 0 0 0.2rem;\n}\n\n.movie[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  padding: 1rem;\n  position: relative;\n  flex: 1;\n  background-color: #d2d3c775;\n  border-radius: 0 0.2rem 0.2rem 0;\n  transition: 0.3s ease-in-out;\n}\n\n.movie[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.movie[_ngcontent-%COMP%]   .release-date[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-top: 1rem;\n}\n\n.movie[_ngcontent-%COMP%]   .release-data[_ngcontent-%COMP%] {\n  bottom: 1rem;\n  position: absolute;\n}\n\n.movie[_ngcontent-%COMP%]   .release-data[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  color: #747470;\n  border: 1px solid;\n  border-radius: 0.2rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.2rem 0.5rem 0.25rem;\n  line-height: 1rem;\n  font-weight: 300;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%] {\n  cursor: default;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]:hover   .data[_ngcontent-%COMP%], .movie.unsubscribed.subscribing[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  background-color: #d2d3c775;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]:hover   .data[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%], .movie.unsubscribed.subscribing[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%] {\n  background-color: #2e7243;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  background-color: #c9cac6;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%] {\n  transition: 0.3s;\n  width: -moz-fit-content;\n  width: fit-content;\n  background-color: #758e7c;\n  position: absolute;\n  bottom: 1rem;\n  height: 1.5rem;\n  border-radius: 0.2rem;\n  cursor: pointer;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.2rem 0.5rem 0.25rem;\n  line-height: 1rem;\n  font-weight: 400;\n  color: #e3e4db;\n}\n\n.movie.unsubscribed[_ngcontent-%COMP%]   .unsubscribed-poster-strip[_ngcontent-%COMP%] {\n  width: 6rem;\n  height: 3px;\n  background-color: #e3e4db;\n}\n\n.searching[_ngcontent-%COMP%] {\n  height: 8rem;\n  width: 8rem;\n  background-color: red;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtBQURGOztBQUdFO0VBQ0UsbUJBQUE7QUFESjs7QUFLQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFBQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLSTtFQUNFLHlCQzFCTztBRHVCYjs7QUFPRTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUxKOztBQU9JO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQ0FBQTtBQUxOOztBQVNFO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQ25Fa0I7RURvRWxCLGdDQUFBO0VBQ0EsNEJBQUE7QUFQSjs7QUFVRTtFQUNFLG1CQUFBO0FBUko7O0FBV0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBVEo7O0FBWUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFWSjs7QUFZSTtFQUNFLGNDeEVZO0VEeUVaLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBVk47O0FBY0U7RUFDRSxlQUFBO0FBWko7O0FBZ0JNO0VBQ0UsMkJDdEdjO0FEd0Z0Qjs7QUFnQlE7RUFDRSx5QkNyR1k7QUR1RnRCOztBQW1CSTtFQUNFLHlCQzlHTztBRDZGYjs7QUFtQk07RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUFqQlI7O0FBbUJRO0VBQ0UsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDbklHO0FEa0hiOztBQXNCSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJDM0lPO0FEdUhiOztBQTJCQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBeEJGIiwiZmlsZSI6Im1vdmllcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5tb3ZpZXMtc3RhdHVzLWxpc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDRyZW07XG59XG5cbi5oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XG4gIH1cbn1cblxuLmZpbHRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjhyZW07XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdHMge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBoZWlnaHQ6IDc1dmg7XG4gIHBhZGRpbmctYm90dG9tOiA0cmVtO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1vdmllLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbHVtbi1nYXA6IDRyZW07XG59XG5cbi5tb3ZpZSB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG4gIHdpZHRoOiAyMXJlbTtcbiAgaGVpZ2h0OiAxMy41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgLmRhdGEge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LXRleHQ7XG4gICAgfVxuICB9XG5cbiAgLnBvc3Rlci13cmFwIHtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMXMgbGluZWFyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG5cbiAgICAucG9zdGVyIHtcbiAgICAgIHdpZHRoOiA5cmVtO1xuICAgICAgaGVpZ2h0OiAxMy41cmVtO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW0gMCAwIDAuMnJlbTtcbiAgICB9XG4gIH1cblxuICAuZGF0YSB7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtbGlnaHQtMjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuMnJlbSAwLjJyZW0gMDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG5cbiAgLnJlbGVhc2UtZGF0ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICB9XG5cbiAgLnJlbGVhc2UtZGF0YSB7XG4gICAgYm90dG9tOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgIC5zdGF0dXMge1xuICAgICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgIHBhZGRpbmc6IDAuMnJlbSAwLjVyZW0gMC4yNXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG4gIH1cblxuICAmLnVuc3Vic2NyaWJlZCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmLnN1YnNjcmliaW5nIHtcbiAgICAgIC5kYXRhIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWxpZ2h0LTI7XG5cbiAgICAgICAgLnN1YnNjcmliZSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGF0YSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcblxuICAgICAgLnN1YnNjcmliZSB7XG4gICAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1OGU3YztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDFyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjJyZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAuYWN0aW9uIHtcbiAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMC4ycmVtIDAuNXJlbSAwLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnVuc3Vic2NyaWJlZC1wb3N0ZXItc3RyaXAge1xuICAgICAgd2lkdGg6IDZyZW07XG4gICAgICBoZWlnaHQ6IDNweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLnNlYXJjaGluZyB7XG4gIGhlaWdodDogOHJlbTtcbiAgd2lkdGg6IDhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"], data: { animation: [_shared_animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__.fadeInOutAnimation] } });


/***/ }),

/***/ 6829:
/*!*************************************************!*\
  !*** ./src/app/movies/movies-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesRoutingModule": () => (/* binding */ MoviesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 8582);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 595);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'movies', component: _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_0__.MoviesListComponent },
    { path: 'movie/:tmdb_id', component: _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_1__.MovieDetailsComponent }
];
class MoviesRoutingModule {
}
MoviesRoutingModule.ɵfac = function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); };
MoviesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 1832:
/*!*****************************************!*\
  !*** ./src/app/movies/movies.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesModule": () => (/* binding */ MoviesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies-routing.module */ 6829);
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies-list/movies-list.component */ 8582);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-details/movie-details.component */ 595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../torrents/torrents.module */ 2792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);









class MoviesModule {
}
MoviesModule.ɵfac = function MoviesModule_Factory(t) { return new (t || MoviesModule)(); };
MoviesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoviesRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_4__.TorrentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_1__.MoviesListComponent, _movie_details_movie_details_component__WEBPACK_IMPORTED_MODULE_3__.MovieDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _movies_routing_module__WEBPACK_IMPORTED_MODULE_0__.MoviesRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_4__.TorrentsModule] }); })();


/***/ }),

/***/ 2729:
/*!*********************************************!*\
  !*** ./src/app/movies/movies.repository.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesRepository": () => (/* binding */ MoviesRepository)
/* harmony export */ });
/* harmony import */ var _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngneat/elf */ 2435);
/* harmony import */ var _ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngneat/elf-entities */ 9001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



const { state, config } = (0,_ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.createState)((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.withEntities)({ initialValue: [] }));
const store = new _ngneat_elf__WEBPACK_IMPORTED_MODULE_0__.Store({ name: 'movies', state, config });
class MoviesRepository {
    constructor() {
        this.$movies = store.pipe((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.selectAllEntities)());
    }
    setMovies(movies) {
        store.update((0,_ngneat_elf_entities__WEBPACK_IMPORTED_MODULE_1__.setEntities)(movies.map(movie => {
            return Object.assign(Object.assign({}, movie), { id: movie.tmdb_id });
        })));
    }
}
MoviesRepository.ɵfac = function MoviesRepository_Factory(t) { return new (t || MoviesRepository)(); };
MoviesRepository.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MoviesRepository, factory: MoviesRepository.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 149:
/*!******************************************!*\
  !*** ./src/app/movies/movies.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesService": () => (/* binding */ MoviesService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8636);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _movies_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movies.repository */ 2729);




class MoviesService {
    constructor(http, repo) {
        this.http = http;
        this.repo = repo;
    }
    listMovies() {
        return this.http.get('api/movies/list').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)((movies) => {
            this.repo.setMovies(movies);
        }));
    }
    searchMovie(searchTerm) {
        return this.http.get(`api/movies/search/${searchTerm}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(results => results.movies));
    }
    subscribeToMovie(tmdb_id) {
        return this.http.post(`api/movies/subscribe`, { tmdb_id });
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_movies_repository__WEBPACK_IMPORTED_MODULE_0__.MoviesRepository)); };
MoviesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7841:
/*!********************************************************************!*\
  !*** ./src/app/panel/panel-background/panel-background.service.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelBackgroundService": () => (/* binding */ PanelBackgroundService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class PanelBackgroundService {
    constructor() {
        this.defaultBackgroundURL = "/static/images/vestibule_default-13.jpg";
        this.backgroundURL = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.defaultBackgroundURL);
        this.currentBackground = this.backgroundURL.asObservable();
    }
    changeBackground(url) {
        this.backgroundURL.next(url);
    }
    defaultBackground() {
        this.backgroundURL.next("");
    }
}
PanelBackgroundService.ɵfac = function PanelBackgroundService_Factory(t) { return new (t || PanelBackgroundService)(); };
PanelBackgroundService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PanelBackgroundService, factory: PanelBackgroundService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4464:
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanelComponent": () => (/* binding */ PanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-background/panel-background.service */ 7841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ 5129);
/* harmony import */ var _services_status_services_status_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-status/services-status.component */ 4837);








function PanelComponent_ng_template_5_Template(rf, ctx) { }
function PanelComponent_ng_template_13_div_0_ng_template_1_Template(rf, ctx) { }
function PanelComponent_ng_template_13_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PanelComponent_ng_template_13_div_0_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
} }
function PanelComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PanelComponent_ng_template_13_div_0_Template, 2, 1, "div", 16);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.mobileMenuShown);
} }
function PanelComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Feeds");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("submit", function PanelComponent_ng_template_19_Template_form_submit_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onFindSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r4.findForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "find/results");
} }
class PanelComponent {
    constructor(fb, panelBackgroundService, router) {
        this.fb = fb;
        this.panelBackgroundService = panelBackgroundService;
        this.router = router;
        this.isDynamicVisible = false;
        this.mobileMenuShown = false;
        this.findForm = this.fb.group({
            term: ['', []]
        });
    }
    ngOnInit() {
        this.defaultBackgroundURL = this.panelBackgroundService.defaultBackgroundURL;
        this.panelBackgroundService.currentBackground.subscribe(url => {
            if (url === "") {
                this.isDynamicVisible = false;
            }
            else {
                this.backgroundURL = url;
                this.isDynamicVisible = true;
            }
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd) {
                this.mobileMenuShown = false;
            }
        });
    }
    onFindSubmit() {
        const control = this.findForm.controls['term'];
        this.router.navigate(['/find/results'], { state: { data: { term: control.value } } });
        control.setValue('');
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_0__.PanelBackgroundService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
PanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["vestibule-panel"]], decls: 21, vars: 8, consts: [["id", "panel"], ["id", "vestibule-home"], [1, "acier-title", 3, "routerLink"], [1, "desktop-menu"], [3, "ngTemplateOutlet"], [1, "mobile-menu-button"], ["cdkOverlayOrigin", "", 1, "button", 3, "click"], ["trigger", ""], [1, "dots-icon"], [1, "dot"], ["cdkConnectedOverlay", "", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "backdropClick"], ["id", "strip"], ["alt", "Vestibule", "crossorigin", "anonymous", 1, "strip-img", 3, "src"], ["alt", "Vestibule", "id", "dynamic-background", "crossorigin", "anonymous", 1, "strip-img", 3, "src"], ["id", "strip-cover"], ["menu", ""], ["class", "mobile-menu", 4, "ngIf"], [1, "mobile-menu"], ["id", "main-links-box"], [1, "side-panel-links"], [1, "side-panel-link", 3, "routerLink"], ["href", "/", 1, "side-panel-link"], [1, "side-panel-divider"], [1, "side-panel-input-form", 3, "formGroup", "submit"], [3, "routerLink"], ["alt", "Find", "src", "/static/images/find_icon.svg", 1, "side-panel-icon"], ["formControlName", "term", "type", "text", "placeholder", "Find", 1, "side-panel-input"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "VESTIBULE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PanelComponent_ng_template_5_Template, 0, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PanelComponent_Template_div_click_7_listener() { return ctx.mobileMenuShown = !ctx.mobileMenuShown; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PanelComponent_ng_template_13_Template, 1, 1, "ng-template", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("backdropClick", function PanelComponent_Template_ng_template_backdropClick_13_listener() { return ctx.mobileMenuShown = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "vestibule-services-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PanelComponent_ng_template_19_Template, 14, 4, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkConnectedOverlayOrigin", _r1)("cdkConnectedOverlayOpen", ctx.mobileMenuShown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.defaultBackgroundURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("visible", ctx.isDynamicVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.backgroundURL, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkOverlayOrigin, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__.CdkConnectedOverlay, _services_status_services_status_component__WEBPACK_IMPORTED_MODULE_1__.ServicesStatusComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], styles: ["#panel[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  padding: 3rem 0 0 1.5rem;\n  background-color: #e1e2d666;\n  height: calc(100vh - 2rem);\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n#vestibule-home[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.acier-title[_ngcontent-%COMP%] {\n  font-family: acier-bat-noir, sans-serif;\n  font-size: 2.5em;\n}\n\n.side-panel-divider[_ngcontent-%COMP%] {\n  background-color: rgba(225, 226, 214, 0.65);\n  height: 3px;\n  width: 85%;\n  margin: 2rem 0;\n  transition: 0.4s;\n}\n\n.side-panel-links[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n\n.side-panel-link[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 5px 0;\n  transition: 0.3s;\n  display: block;\n  color: inherit;\n}\n\n.side-panel-input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1em;\n  max-width: 10rem;\n  color: #4e4e4e;\n  margin-top: -6px;\n}\n\n.side-panel-input[_ngcontent-%COMP%]::placeholder {\n  color: #333;\n}\n\n.side-panel-icon[_ngcontent-%COMP%] {\n  height: 1.2rem;\n  display: inline-block;\n  padding: 3px 5px 0 0;\n}\n\n.side-panel-input-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 6px;\n}\n\n.side-panel-link[_ngcontent-%COMP%]:hover {\n  color: #757575;\n  transform: translate(4px, 0);\n}\n\n#strip[_ngcontent-%COMP%] {\n  width: 35rem;\n  opacity: 0.5;\n  height: 100vh;\n  overflow: hidden;\n  position: fixed;\n  left: 0rem;\n  top: 0;\n  z-index: -1;\n}\n\n.strip-img[_ngcontent-%COMP%] {\n  -moz-filter: blur(7px);\n  -o-filter: blur(7px);\n  -ms-filter: blur(5px);\n  filter: blur(30px);\n  height: 106%;\n  width: 130%;\n  position: absolute;\n  left: -2.5rem;\n  top: -20px;\n}\n\n#dynamic-background[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 1s;\n}\n\n#dynamic-background.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#strip-cover[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 21rem;\n  position: fixed;\n  left: 14rem;\n  background: linear-gradient(90deg, rgba(227, 228, 219, 0.65) 0%, #e3e4db 100%);\n}\n\n.mobile-menu-button[_ngcontent-%COMP%] {\n  display: none;\n  width: 48px;\n  height: 48px;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  right: 120px;\n  top: 0;\n}\n\n.mobile-menu-button[_ngcontent-%COMP%]   .dots-icon[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.mobile-menu-button[_ngcontent-%COMP%]   .dots-icon[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  height: 5px;\n  width: 5px;\n  border-radius: 50%;\n  background-color: #747470;\n  margin: 3px;\n}\n\n.mobile-menu[_ngcontent-%COMP%] {\n  width: calc(100vw - 64px);\n  position: fixed;\n  top: 48px;\n  left: 0;\n  background-color: #f3f4f0e6;\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  z-index: 100;\n  padding: 32px;\n}\n\n.mobile-menu[_ngcontent-%COMP%]   .side-panel-divider[_ngcontent-%COMP%] {\n  background-color: #4e4e4e;\n}\n\n@media only screen and (max-width: 480px) {\n  #panel[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 32px;\n    padding: 8px 0 8px 16px;\n    flex-direction: row;\n  }\n\n  #vestibule-home[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n\n  .acier-title[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n\n  .desktop-menu[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .mobile-menu-button[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  #strip[_ngcontent-%COMP%] {\n    height: 20vh;\n    width: 100vw;\n  }\n\n  #strip-cover[_ngcontent-%COMP%] {\n    left: 0;\n    width: 100%;\n    height: 20vh;\n    background: linear-gradient(180deg, rgba(227, 228, 219, 0.65) 0%, #e3e4db 100%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmVsLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQ0hnQjtFREloQiwwQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQURKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLDJDQ25CcUI7RURvQnJCLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdFO0VBQ0UsV0NoQ0k7QUQrQlI7O0FBS0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFFSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0FBRkg7O0FBS0E7RUFDRSxVQUFBO0FBRkY7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEVBQUE7QUFGSjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUFGRjs7QUFJRTtFQUNFLGtCQUFBO0FBRko7O0FBSUk7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDakhZO0VEa0haLFdBQUE7QUFGTjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFKRjs7QUFNRTtFQUNFLHlCQUFBO0FBSko7O0FBUUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFQUxGOztFQVFBO0lBQ0UsZ0JBQUE7RUFMRjs7RUFRQTtJQUNFLGNBQUE7RUFMRjs7RUFRQTtJQUNFLGFBQUE7RUFMRjs7RUFRQTtJQUNFLGFBQUE7RUFMRjs7RUFRQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBTEY7O0VBUUE7SUFDRSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSwrRUFBQTtFQUxGO0FBQ0YiLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuI3BhbmVsIHtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgICBwYWRkaW5nOiAzcmVtIDAgMCAxLjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWxpZ2h0O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDJyZW0pO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiN2ZXN0aWJ1bGUtaG9tZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5hY2llci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGFjaWVyLWJhdC1ub2lyLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5zaWRlLXBhbmVsLWRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0O1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNpZGUtcGFuZWwtbGlua3Mge1xuICAgIHBhZGRpbmc6IDAgMCAwIDAuNXJlbTtcbn1cblxuLnNpZGUtcGFuZWwtbGluayB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlLXBhbmVsLWlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXgtd2lkdGg6IDEwcmVtO1xuICBjb2xvcjogIzRlNGU0ZTtcbiAgbWFyZ2luLXRvcDogLTZweDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgfVxufVxuXG4uc2lkZS1wYW5lbC1pY29uIHtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4IDVweCAwIDA7XG59XG5cbi5zaWRlLXBhbmVsLWlucHV0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5zaWRlLXBhbmVsLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgMCk7XG59XG5cbiNzdHJpcCB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDByZW07XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc3RyaXAtaW1nIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig3cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDdweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDdweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICBoZWlnaHQ6IDEwNiU7XG4gICAgd2lkdGg6IDEzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yLjVyZW07XG4gICAgdG9wOiAtMjBweDtcbn1cblxuI2R5bmFtaWMtYmFja2dyb3VuZCB7XG4gICBvcGFjaXR5OiAwO1xuICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4jZHluYW1pYy1iYWNrZ3JvdW5kLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jc3RyaXAtY292ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDE0cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjcsMjI4LDIxOSwwLjY1KSAwJSwgcmdiYSgyMjcsMjI4LDIxOSwxKSAxMDAlKTtcbn1cblxuLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAxMjBweDtcbiAgdG9wOiAwO1xuXG4gIC5kb3RzLWljb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5kb3Qge1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICB3aWR0aDogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICAgIG1hcmdpbjogM3B4O1xuICAgIH1cbiAgfVxufVxuXG4ubW9iaWxlLW1lbnUge1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDY0cHgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNDhweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmMGU2O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoN3B4KTtcbiAgei1pbmRleDogMTAwO1xuICBwYWRkaW5nOiAzMnB4O1xuXG4gIC5zaWRlLXBhbmVsLWRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAjcGFuZWwge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgcGFkZGluZzogOHB4IDAgOHB4IDE2cHg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuXG4gICN2ZXN0aWJ1bGUtaG9tZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5hY2llci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cblxuICAuZGVza3RvcC1tZW51IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1vYmlsZS1tZW51LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuXG4gICNzdHJpcCB7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgfVxuXG4gICNzdHJpcC1jb3ZlciB7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyMjcsIDIyOCwgMjE5LCAwLjY1KSAwJSwgI2UzZTRkYiAxMDAlKTtcbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 7929:
/*!*********************************************************!*\
  !*** ./src/app/panel/services-status/service-status.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "INITIAL_STATUS": () => (/* binding */ INITIAL_STATUS)
/* harmony export */ });
const INITIAL_STATUS = {
    services: {
        plex: {
            name: 'plex',
            up: false
        },
        transmission: {
            name: 'transmission',
            up: false
        }
    }
};


/***/ }),

/***/ 4837:
/*!********************************************************************!*\
  !*** ./src/app/panel/services-status/services-status.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesStatusComponent": () => (/* binding */ ServicesStatusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services-status.service */ 4486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



const _c0 = function (a0, a1) { return { "service-up": a0, "service-down": a1 }; };
class ServicesStatusComponent {
    constructor(servicesStatusService) {
        this.servicesStatusService = servicesStatusService;
    }
    ngOnInit() {
        this.updateServicesStatus();
    }
    updateServicesStatus() {
        this.servicesStatusService.getServicesStatus().subscribe(data => {
            this.plexStatus = data.services["plex"];
            this.transmissionStatus = data.services["transmission"];
        });
    }
}
ServicesStatusComponent.ɵfac = function ServicesStatusComponent_Factory(t) { return new (t || ServicesStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_status_service__WEBPACK_IMPORTED_MODULE_0__.ServicesStatusService)); };
ServicesStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ServicesStatusComponent, selectors: [["vestibule-services-status"]], decls: 7, vars: 12, consts: [["id", "services-status-box"], ["target", "_blank", 1, "service-wrap", "service-active", 3, "ngClass", "href"], [1, "service-status-bar"], ["src", "/static/images/plex_icon.svg", 1, "service-icon", 3, "alt"], ["src", "/static/images/transmission_icon.svg", 1, "service-icon", 3, "alt"]], template: function ServicesStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.plexStatus == null ? null : ctx.plexStatus.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx.plexStatus == null ? null : ctx.plexStatus.up, !(ctx.plexStatus == null ? null : ctx.plexStatus.up)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "Plex is ", (ctx.plexStatus == null ? null : ctx.plexStatus.up) ? "Up" : "Down", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.transmissionStatus == null ? null : ctx.transmissionStatus.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up, !(ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "Transmission is ", (ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up) ? "Up" : "Down", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass], styles: ["#services-status-box[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 4rem;\n  width: 14rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1e2d666;\n}\n\n.service-wrap[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  width: 3rem;\n  position: relative;\n}\n\n.service-wrap[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  display: block;\n  height: 35px;\n  margin: 3px auto 0;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover.service-active   .service-icon[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover.service-active   .service-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.service-status-bar[_ngcontent-%COMP%] {\n  background-color: #7f7f7f;\n  transition: background-color 0.3s linear;\n  height: 3px;\n  width: 65%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 40;\n}\n\n.service-up[_ngcontent-%COMP%]   .service-status-bar[_ngcontent-%COMP%] {\n  background-color: #3f9359;\n}\n\n.service-down[_ngcontent-%COMP%]   .service-status-bar[_ngcontent-%COMP%] {\n  background-color: #AF4F68;\n}\n\n@media only screen and (max-width: 480px) {\n  #services-status-box[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n    bottom: auto;\n    left: auto;\n    height: 48px;\n    width: 120px;\n    background-color: transparent;\n  }\n\n  .service-wrap[_ngcontent-%COMP%] {\n    padding: 0.6rem;\n  }\n  .service-wrap[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n    height: 28px;\n    margin: 0 auto 0;\n  }\n\n  .service-status-bar[_ngcontent-%COMP%] {\n    top: auto;\n    bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQ1JrQjtBRE9wQjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7QUFGSjs7QUFPQTtFQUNJLFVBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtBQUpKOztBQU9BO0VBQ0U7SUFDRSxNQUFBO0lBQ0EsUUFBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7SUFDQSw2QkFBQTtFQUpGOztFQU9BO0lBQ0UsZUFBQTtFQUpGO0VBTUU7SUFDRSxZQUFBO0lBQ0EsZ0JBQUE7RUFKSjs7RUFRQTtJQUNFLFNBQUE7SUFDQSxTQUFBO0VBTEY7QUFDRiIsImZpbGUiOiJzZXJ2aWNlcy1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuI3NlcnZpY2VzLXN0YXR1cy1ib3gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdHJhbnNwYXJlbnQtbGlnaHQ7XG59XG5cbi5zZXJ2aWNlLXdyYXAge1xuICBwYWRkaW5nOiAwLjdyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgLnNlcnZpY2UtaWNvbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIG1hcmdpbjogM3B4IGF1dG8gMDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgfVxuXG4gICY6aG92ZXIuc2VydmljZS1hY3RpdmUgLnNlcnZpY2UtaWNvbiB7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG59XG5cblxuLnNlcnZpY2Utd3JhcDpob3Zlci5zZXJ2aWNlLWFjdGl2ZSAuc2VydmljZS1pY29uIHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2VydmljZS1zdGF0dXMtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2Y3ZjdmO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBsaW5lYXI7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcbiAgICB6LWluZGV4OiA0MDtcbn1cblxuLnNlcnZpY2UtdXAgLnNlcnZpY2Utc3RhdHVzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmOTM1OTtcbn1cblxuLnNlcnZpY2UtZG93biAuc2VydmljZS1zdGF0dXMtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUY0RjY4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICNzZXJ2aWNlcy1zdGF0dXMtYm94IHtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiBhdXRvO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgfVxuXG4gIC5zZXJ2aWNlLXdyYXAge1xuICAgIHBhZGRpbmc6IDAuNnJlbTtcblxuICAgIC5zZXJ2aWNlLWljb24ge1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMDtcbiAgICB9XG4gIH1cblxuICAuc2VydmljZS1zdGF0dXMtYmFyIHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1saWdodC0yOiAjZDJkM2M3NzU7XG4kbGlnaHQtZ3JheTogI2M5Y2FjNjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });


/***/ }),

/***/ 4486:
/*!******************************************************************!*\
  !*** ./src/app/panel/services-status/services-status.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicesStatusService": () => (/* binding */ ServicesStatusService)
/* harmony export */ });
/* harmony import */ var _service_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-status */ 7929);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6491);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1618);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3882);





class ServicesStatusService {
    constructor(http) {
        this.http = http;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(_service_status__WEBPACK_IMPORTED_MODULE_0__.INITIAL_STATUS);
        this.updateServicesStatus();
        this.statusUpdater = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(10000000).subscribe(() => this.updateServicesStatus());
    }
    updateServicesStatus() {
        this.getCurrentServicesStatus().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1)).subscribe(data => this.status.next(data));
    }
    getCurrentServicesStatus() {
        return this.http.get('api/services-status');
    }
    getServicesStatus() {
        return this.status.asObservable();
    }
    ngOnDestroy() {
        this.statusUpdater.unsubscribe();
    }
}
ServicesStatusService.ɵfac = function ServicesStatusService_Factory(t) { return new (t || ServicesStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
ServicesStatusService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ServicesStatusService, factory: ServicesStatusService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 196:
/*!************************************************!*\
  !*** ./src/app/shared/animations/fadeInOut.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInOutAnimation": () => (/* binding */ fadeInOutAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 175);

const fadeInOutAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInOutAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }))]),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':leave', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 1 }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('0.3s ease-in', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({ opacity: 0 }))])
]);


/***/ }),

/***/ 2721:
/*!****************************************************************!*\
  !*** ./src/app/shared/loading-button/loading-button-status.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingButtonStatus": () => (/* binding */ LoadingButtonStatus)
/* harmony export */ });
class LoadingButtonStatus {
}
LoadingButtonStatus.idle = '';
LoadingButtonStatus.loading = 'loading';
LoadingButtonStatus.error = 'error';
LoadingButtonStatus.confirm = 'confirm';


/***/ }),

/***/ 4628:
/*!*******************************************************************!*\
  !*** ./src/app/shared/loading-button/loading-button.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingButtonComponent": () => (/* binding */ LoadingButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class LoadingButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingButtonComponent.ɵfac = function LoadingButtonComponent_Factory(t) { return new (t || LoadingButtonComponent)(); };
LoadingButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingButtonComponent, selectors: [["vestibule-loading-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "button-title"]], template: function LoadingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes flash_border {\n  0% {\n    border-color: #58cd7c;\n  }\n  50% {\n    border-color: #206f38;\n  }\n  100% {\n    border-color: #58cd7c;\n  }\n}\n[_nghost-%COMP%]     .action-message {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n  color: #a4a5a0;\n}\n[_nghost-%COMP%]     button {\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  padding-bottom: 5px;\n  border: none;\n  background: none;\n  transition: 0.2s;\n  cursor: pointer;\n  border-bottom: solid rgba(0, 0, 0, 0) 3px;\n}\n[_nghost-%COMP%]     button:hover {\n  color: #206f38;\n}\n[_nghost-%COMP%]     button.disabled {\n  color: #a4a5a0;\n  cursor: auto;\n}\n[_nghost-%COMP%]     button.loading {\n  border-bottom: solid #3f9359 3px;\n  color: #206f38;\n  margin-bottom: 15px;\n  animation-name: flash_border;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n[_nghost-%COMP%]     button.error {\n  color: #AF4F68;\n}\n[_nghost-%COMP%]     button.danger-zone-button:hover {\n  color: #972945;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFO0lBQ0UscUJBQUE7RUFERjtFQUdBO0lBQ0UscUJDQ2U7RURGakI7RUFHQTtJQUNFLHFCQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0NGVztBREFiO0FBS0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUZGO0FBSUU7RUFDRSxjQ3hCZTtBRHNCbkI7QUFLRTtFQUNFLGNDcEJTO0VEcUJULFlBQUE7QUFISjtBQU1FO0VBQ0UsZ0NBQUE7RUFDQSxjQ2xDZTtFRG1DZixtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1DQUFBO0FBSko7QUFPRTtFQUNFLGNDekNVO0FEb0NkO0FBU0k7RUFDRSxjQzdDYztBRHNDcEIiLCJmaWxlIjoibG9hZGluZy1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuQGtleWZyYW1lcyBmbGFzaF9ib3JkZXIge1xuICAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNThjZDdjO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAkdmFsdWUtdHJ1ZS1ob3ZlcjtcbiAgfVxuICAxMDAlIHtcbiAgICBib3JkZXItY29sb3I6ICM1OGNkN2M7XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hY3Rpb24tbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCkgM3B4O1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkdmFsdWUtdHJ1ZS1ob3ZlcjtcbiAgfVxuXG4gICYuZGlzYWJsZWQge1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgICBjdXJzb3I6IGF1dG87XG4gIH1cblxuICAmLmxvYWRpbmcge1xuICAgIGJvcmRlci1ib3R0b206IHNvbGlkICR2YWx1ZS10cnVlIDNweDtcbiAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBhbmltYXRpb24tbmFtZTogZmxhc2hfYm9yZGVyO1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICB9XG5cbiAgJi5lcnJvciB7XG4gICAgY29sb3I6ICR2YWx1ZS1mYWxzZTtcbiAgfVxuXG4gICYuZGFuZ2VyLXpvbmUtYnV0dG9uIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkdmFsdWUtZmFsc2UtaG92ZXI7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1saWdodC0yOiAjZDJkM2M3NzU7XG4kbGlnaHQtZ3JheTogI2M5Y2FjNjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });


/***/ }),

/***/ 820:
/*!***************************************************************!*\
  !*** ./src/app/shared/loading-line/loading-line.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingLineComponent": () => (/* binding */ LoadingLineComponent)
/* harmony export */ });
/* harmony import */ var _animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/fadeInOut */ 196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);


class LoadingLineComponent {
    constructor() {
        this.width = '14rem';
    }
}
LoadingLineComponent.ɵfac = function LoadingLineComponent_Factory(t) { return new (t || LoadingLineComponent)(); };
LoadingLineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoadingLineComponent, selectors: [["vestibule-loading-line"]], inputs: { width: "width" }, decls: 1, vars: 4, consts: [[1, "loading-line"]], template: function LoadingLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("width: ", ctx.width, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
    } }, styles: [".loading-line[_ngcontent-%COMP%] {\n  width: 14rem;\n  height: 3px;\n  position: relative;\n  overflow: hidden;\n  background-color: #bfbfb8;\n}\n\n.loading-line[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  left: -50%;\n  height: 3px;\n  width: 40%;\n  background-color: #2e7243;\n  animation: lineAnim 1s linear infinite;\n}\n\n@keyframes lineAnim {\n  0% {\n    left: -40%;\n  }\n  50% {\n    left: 20%;\n    width: 80%;\n  }\n  100% {\n    left: 100%;\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctbGluZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkNPZTtBRFJqQjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQ1RvQjtFRFlwQixzQ0FBQTtBQURGOztBQUlBO0VBQ0k7SUFDSSxVQUFBO0VBRE47RUFHRTtJQUNJLFNBQUE7SUFDQSxVQUFBO0VBRE47RUFHRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VBRE47QUFDRiIsImZpbGUiOiJsb2FkaW5nLWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLmxvYWRpbmctbGluZSB7XG4gIHdpZHRoOiAxNHJlbTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1haW4tYmFjay1kYXJrO1xufVxuXG4ubG9hZGluZy1saW5lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTUwJTtcbiAgaGVpZ2h0OiAzcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuLWhvdmVyO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGluZUFuaW0gMXMgbGluZWFyIGluZmluaXRlO1xuICAtbW96LWFuaW1hdGlvbjogbGluZUFuaW0gMXMgbGluZWFyIGluZmluaXRlO1xuICBhbmltYXRpb246IGxpbmVBbmltIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBsaW5lQW5pbSB7XG4gICAgMCUge1xuICAgICAgICBsZWZ0OiAtNDAlO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1saWdodC0yOiAjZDJkM2M3NzU7XG4kbGlnaHQtZ3JheTogI2M5Y2FjNjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"], data: { animation: [_animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__.fadeInOutAnimation] } });


/***/ }),

/***/ 3773:
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/plural-pipe.pipe.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PluralPipePipe": () => (/* binding */ PluralPipePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class PluralPipePipe {
    transform(number, singularText, pluralText = null) {
        let pluralWord = pluralText ? pluralText : `${singularText}s`;
        return number > 1 ? `${number} ${pluralWord}` : `${number} ${singularText}`;
    }
}
PluralPipePipe.ɵfac = function PluralPipePipe_Factory(t) { return new (t || PluralPipePipe)(); };
PluralPipePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pluralPipe", type: PluralPipePipe, pure: true });


/***/ }),

/***/ 5894:
/*!***************************************************************!*\
  !*** ./src/app/shared/poster-strip/poster-strip.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PosterStripComponent": () => (/* binding */ PosterStripComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4364);


class PosterStripComponent {
    constructor() {
        this.width = '5rem';
    }
    ngOnInit() {
        if (this.palette) {
            this.primaryColor = `rgb(${this.palette.primary[0]}, ${this.palette.primary[1]}, ${this.palette.primary[2]})`;
            this.lightColor = `rgb(${this.palette.light[0]}, ${this.palette.light[1]}, ${this.palette.light[2]})`;
            this.darkColor = `rgb(${this.palette.dark[0]}, ${this.palette.dark[1]}, ${this.palette.dark[2]})`;
            if (this.palette.secondary) {
                this.secondaryColor = `rgb(${this.palette.secondary[0]}, ${this.palette.secondary[1]}, ${this.palette.secondary[2]})`;
            }
        }
        else {
            this.primaryColor = `rgb(93, 108, 172)`;
            this.lightColor = `rgb(93, 108, 172)`;
            this.darkColor = `rgb(93, 108, 172)`;
            this.secondaryColor = `rgb(93, 108, 172)`;
        }
    }
    stripGradientBackground() {
        return {
            background: `linear-gradient(90deg, ${this.primaryColor} 0%, ${this.secondaryColor} 100%)`
        };
    }
    stripStyle() {
        return {
            backgroundColor: this.primaryColor,
            width: `${this.width}`
        };
    }
}
PosterStripComponent.ɵfac = function PosterStripComponent_Factory(t) { return new (t || PosterStripComponent)(); };
PosterStripComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PosterStripComponent, selectors: [["vestibule-poster-strip"]], inputs: { palette: "palette", width: "width" }, decls: 1, vars: 1, consts: [[1, "poster-strip", 3, "ngStyle"]], template: function PosterStripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.stripStyle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], styles: [".poster-strip[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 3px;\n  background-color: var(--secondary-color);\n  transition: 0.3s;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rlci1zdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJwb3N0ZXItc3RyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdGVyLXN0cmlwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgb3BhY2l0eTogMC42O1xufVxuIl19 */"] });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading-button/loading-button.component */ 4628);
/* harmony import */ var _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-torrent/show-torrent.component */ 7443);
/* harmony import */ var _torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./torrent-download-status/torrent-download-status.component */ 7666);
/* harmony import */ var _pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pipes/plural-pipe.pipe */ 3773);
/* harmony import */ var _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poster-strip/poster-strip.component */ 5894);
/* harmony import */ var _loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-line/loading-line.component */ 820);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__.PluralPipePipe,
        _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonComponent,
        _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_1__.ShowTorrentComponent,
        _torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_2__.TorrentDownloadStatusComponent,
        _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_4__.PosterStripComponent,
        _loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_5__.LoadingLineComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule], exports: [_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_3__.PluralPipePipe,
        _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonComponent,
        _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_1__.ShowTorrentComponent,
        _torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_2__.TorrentDownloadStatusComponent,
        _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_4__.PosterStripComponent,
        _loading_line_loading_line_component__WEBPACK_IMPORTED_MODULE_5__.LoadingLineComponent] }); })();


/***/ }),

/***/ 7443:
/*!***************************************************************!*\
  !*** ./src/app/shared/show-torrent/show-torrent.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowTorrentComponent": () => (/* binding */ ShowTorrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../torrent-download-status/torrent-download-status.component */ 7666);



function ShowTorrentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" E", ctx_r0.torrent.episodeNumber, "");
} }
function ShowTorrentComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.torrent.feed);
} }
function ShowTorrentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.torrent.sourceType);
} }
function ShowTorrentComponent_div_15_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.torrent.quality);
} }
function ShowTorrentComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowTorrentComponent_div_15_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.toggleMoreDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ShowTorrentComponent_div_15_div_4_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("x-mode", ctx_r3.moreDetailsMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.torrent.quality);
} }
function ShowTorrentComponent_ng_template_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r9.torrent.torrentLink, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function ShowTorrentComponent_ng_template_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r10.torrent.torrentTitle);
} }
function ShowTorrentComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ShowTorrentComponent_ng_template_16_div_2_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShowTorrentComponent_ng_template_16_div_3_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.torrent.torrentLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.torrent.torrentTitle);
} }
class ShowTorrentComponent {
    constructor() {
        this.moreDetailsMode = false;
    }
    set showTorrent(showTorrent) {
        this.torrent = showTorrent;
    }
    toggleMoreDetails() {
        this.moreDetailsMode = !this.moreDetailsMode;
    }
}
ShowTorrentComponent.ɵfac = function ShowTorrentComponent_Factory(t) { return new (t || ShowTorrentComponent)(); };
ShowTorrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowTorrentComponent, selectors: [["vestibule-show-torrent"]], inputs: { showTorrent: "showTorrent" }, decls: 18, vars: 9, consts: [[1, "torrent-cont"], [1, "torrent-title-cont"], [1, "torrent-title"], [4, "ngIf"], [1, "torrent-publication-time"], [1, "torrent-details-cont"], [1, "torrent-actions-cont"], [3, "showTorrent"], [1, "torrent-info-cont"], [1, "torrent-tags"], ["class", "tag feed-tag", 4, "ngIf"], ["class", "tag source-type-tag", 4, "ngIf"], ["class", "torrent-base-details-cont", 3, "click", 4, "ngIf", "ngIfElse"], ["moreDetails", ""], [1, "tag", "feed-tag"], [1, "tag", "source-type-tag"], [1, "torrent-base-details-cont", 3, "click"], [1, "torrent-action", "action-plus"], ["src", "/static/images/plus_icon.svg"], ["class", "tag quality-tag", 4, "ngIf"], [1, "tag", "quality-tag"], [1, "torrent-more-details-cont"], ["class", "tag torrent-link", 4, "ngIf"], ["class", "tag torrent-full-name", 4, "ngIf"], [1, "tag", "torrent-link"], ["target", "_blank", 3, "href"], [1, "tag", "torrent-full-name"]], template: function ShowTorrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ShowTorrentComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "vestibule-torrent-download-status", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ShowTorrentComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ShowTorrentComponent_div_14_Template, 2, 1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ShowTorrentComponent_div_15_Template, 5, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShowTorrentComponent_ng_template_16_Template, 4, 2, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.torrent.showTitle, " S", ctx.torrent.seasonNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.torrent.episodeNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.torrent.publicationTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTorrent", ctx.torrent);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.torrent.feed);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.torrent.sourceType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.moreDetailsMode)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _torrent_download_status_torrent_download_status_component__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatusComponent], styles: [".torrent-cont[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 0;\n  border-bottom: 3px solid #333;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 0.5rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%] {\n  min-width: 2.6rem;\n  height: 1.2rem;\n  text-align: center;\n  transition: 0.3s;\n  border-radius: 0.6rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  padding: 0 0.3rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: 0.2s;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.download_disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #a4a5a0;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.download_disabled[_ngcontent-%COMP%]:hover {\n  background-color: #972945;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.downloading[_ngcontent-%COMP%] {\n  width: 6rem;\n  cursor: auto;\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.downloading[_ngcontent-%COMP%]:hover {\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.done[_ngcontent-%COMP%] {\n  cursor: auto;\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.done[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-status[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 0 0.6rem 0 0;\n  color: #e3e4db;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 0.3rem;\n  margin: 0.5rem 0.5rem 0 0;\n  background-color: #e3e4db;\n  border-radius: 0.15rem;\n  position: relative;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  border-radius: inherit;\n  background-color: #2e7243;\n}\n\n.action-plus[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #c8c9c0;\n  width: 2.6rem;\n  height: 1.2rem;\n  text-align: right;\n  transition: 0.3s;\n  border-radius: 0.6rem;\n  position: absolute;\n  right: -1.5rem;\n  z-index: -1;\n  padding-right: 0.25rem;\n}\n\n.action-plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: 0.2s;\n}\n\n.x-mode[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.torrent-details-cont[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem 0;\n}\n\n.torrent-title-cont[_ngcontent-%COMP%]   .torrent-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.torrent-title-cont[_ngcontent-%COMP%]   .torrent-publication-time[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 1rem;\n  font-weight: 100;\n  font-size: 0.8em;\n  color: #747470;\n}\n\n.torrent-info-cont[_ngcontent-%COMP%] {\n  display: flex;\n  color: #d2d3c7;\n}\n\n.torrent-base-details-cont[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.torrent-tags[_ngcontent-%COMP%] {\n  display: flex;\n  height: 1.2rem;\n  margin-right: 0.5rem;\n}\n\n.torrent-tags[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.tag[_ngcontent-%COMP%] {\n  background-color: #d2d3c7;\n  font-size: 0.8em;\n  padding: 0 0.5rem;\n}\n\n.tag[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.6rem 0 0 0.6rem;\n}\n\n.tag[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.6rem 0.6rem 0;\n}\n\n.tag[_ngcontent-%COMP%]:only-child {\n  border-radius: 0.6rem;\n}\n\n.tag.feed-tag[_ngcontent-%COMP%] {\n  background-color: #c8c9c0;\n}\n\n.tag.quality-tag[_ngcontent-%COMP%] {\n  background-color: #29abe2;\n}\n\n.tag.source-type-tag[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n}\n\n.tag.torrent-link[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n}\n\n.tag.torrent-full-name[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  font-weight: 100;\n  padding-top: 2px;\n  max-width: 24rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctdG9ycmVudC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0k7RUFDRSxpQkFBQTtBQUROOztBQUVNO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBS0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJDMUJZO0FEdUJoQjs7QUFLSTtFQUNFLHlCQzVCZ0I7QUR5QnRCOztBQU1JO0VBQ0UsbUJBQUE7RUFDQSx5QkN4Qk87QURvQmI7O0FBTU07RUFDRSx5QkNoQ1k7QUQ0QnBCOztBQVFJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkM1Q1U7QURzQ2hCOztBQVFNO0VBQ0UseUJDL0NRO0FEeUNoQjs7QUFVSTtFQUNFLFlBQUE7RUFDQSx5QkNwRGdCO0FENEN0Qjs7QUFVTTtFQUNFLHlCQ3ZEYztBRCtDdEI7O0FBWUk7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0N4RE07QUQ4Q1o7O0FBYUk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBWE47O0FBYU07RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQzdFYztBRGtFdEI7O0FBaUJBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFkRjs7QUFnQkU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFkSjs7QUFrQkE7RUFDRSx3QkFBQTtBQWZGOztBQWtCQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQWZGOztBQW1CRTtFQUNFLGdCQUFBO0FBaEJKOztBQW1CRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0MvR2M7QUQ4RmxCOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxjQ2pIVztBRCtGYjs7QUFxQkE7RUFDRSxrQkFBQTtBQWxCRjs7QUFxQkE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBbEJGOztBQW9CRTtFQUNFLGVBQUE7QUFsQko7O0FBc0JBO0VBQ0UseUJDbklXO0VEb0lYLGdCQUFBO0VBQ0EsaUJBQUE7QUFuQkY7O0FBcUJFO0VBQ0UsZ0NBQUE7QUFuQko7O0FBc0JFO0VBQ0UsZ0NBQUE7QUFwQko7O0FBdUJFO0VBQ0UscUJBQUE7QUFyQko7O0FBd0JFO0VBQ0UseUJBQUE7QUF0Qko7O0FBeUJFO0VBQ0UseUJBQUE7QUF2Qko7O0FBMEJFO0VBQ0UseUJBQUE7QUF4Qko7O0FBMkJFO0VBQ0UseUJDcktTO0FENEliOztBQTRCRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQTFCSiIsImZpbGUiOiJzaG93LXRvcnJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLnRvcnJlbnQtY29udCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkYmxhY2s7XG59XG5cbi50b3JyZW50LWFjdGlvbnMtY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuXG4gIC50b3JyZW50LWFjdGlvbiB7XG4gICAgbWluLXdpZHRoOiAyLjZyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuXG4gICAgLmljb24td3JhcCB7XG4gICAgICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9uLWRvd25sb2FkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9ycmVudC1ncmVlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgfVxuXG4gICAgJi5kb3dubG9hZF9kaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUtZmFsc2UtaG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5kb3dubG9hZGluZyB7XG4gICAgICB3aWR0aDogNnJlbTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5kb25lIHtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuLWhvdmVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXN0YXR1cyB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgcGFkZGluZzogMCAwLjZyZW0gMCAwO1xuICAgICAgY29sb3I6ICRtYWluLWJhY2s7XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXByb2dyZXNzIHtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgaGVpZ2h0OiAwLjNyZW07XG4gICAgICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRkYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1wbHVzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOWMwO1xuICB3aWR0aDogMi42cmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEuNXJlbTtcbiAgei1pbmRleDogLTE7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxufVxuXG4ueC1tb2RlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4udG9ycmVudC1kZXRhaWxzLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLnRvcnJlbnQtdGl0bGUtY29udCB7XG4gIC50b3JyZW50LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLnRvcnJlbnQtcHVibGljYXRpb24tdGltZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgfVxufVxuXG4udG9ycmVudC1pbmZvLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJGxpZ2h0LXRleHQ7XG59XG5cbi50b3JyZW50LWJhc2UtZGV0YWlscy1jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9ycmVudC10YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbi50YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtdGV4dDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtIDAgMCAwLjZyZW07XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMC42cmVtIDAuNnJlbSAwO1xuICB9XG5cbiAgJjpvbmx5LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIH1cblxuICAmLmZlZWQtdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOWMwO1xuICB9XG5cbiAgJi5xdWFsaXR5LXRhZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWJlMjtcbiAgfVxuXG4gICYuc291cmNlLXR5cGUtdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRhNWEwO1xuICB9XG5cbiAgJi50b3JyZW50LWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bnNlbGVjdGVkO1xuICB9XG5cbiAgJi50b3JyZW50LWZ1bGwtbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 7666:
/*!*************************************************************************************!*\
  !*** ./src/app/shared/torrent-download-status/torrent-download-status.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TorrentDownloadStatusComponent": () => (/* binding */ TorrentDownloadStatusComponent)
/* harmony export */ });
/* harmony import */ var _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../torrents/torrent */ 3150);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _torrents_torrents_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../torrents/torrents.service */ 6009);
/* harmony import */ var _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/services-status/services-status.service */ 4486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);





function TorrentDownloadStatusComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.torrent.downloadStatus);
} }
function TorrentDownloadStatusComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r1.torrent.percentDone, "%");
} }
const _c0 = function (a0, a1, a2) { return { download_disabled: a0, downloading: a1, done: a2 }; };
class TorrentDownloadStatusComponent {
    constructor(torrentsService, servicesStatusService) {
        this.torrentsService = torrentsService;
        this.servicesStatusService = servicesStatusService;
        this.torrentChanged = false;
        this.canDownload = false;
        this.isDone = false;
        this.isDownloading = false;
    }
    set showTorrent(showTorrent) {
        if (!this.torrentChanged) {
            this.torrent = showTorrent;
            this.updateTorrentStatus();
        }
    }
    ngOnInit() {
        this.servicesStatusService.getServicesStatus().subscribe(data => {
            if (!data.services["transmission"].up) {
                this.downloadMessage = "Transmission client seems to be down";
                this.canDownload = false;
            }
            else if (this.torrent.downloadStatus !== _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.NEVER_STARTED) {
                this.downloadMessage = "Torrents is already active";
                this.canDownload = false;
            }
            else {
                this.canDownload = true;
                this.downloadMessage = undefined;
            }
        });
    }
    updateTorrentStatus() {
        switch (this.torrent.downloadStatus) {
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.STOPPED:
                this.statusIconName = 'stopped';
                this.isDone = true;
                break;
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.READY:
                this.statusIconName = 'upload';
                this.isDone = true;
                break;
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_0__.TorrentDownloadStatus.DOWNLOADING:
                this.statusIconName = 'download';
                this.isDownloading = true;
                break;
            default:
                this.statusIconName = 'download';
        }
    }
    downloadTorrent() {
        if (!this.canDownload) {
            return;
        }
        if (!this.torrent.isStandaloneTorrent) {
            this.torrentsService.downloadTorrent(this.torrent.torrentId).subscribe(data => {
                this.torrentChanged = true;
                this.torrent.downloadStatus = data.torrent.download_status;
                this.torrent.percentDone = data.torrent.percent_done;
                this.updateTorrentStatus();
                this.downloadMessage = data.message;
                this.downloadSuccessful = data.successful;
            }, error => {
                this.downloadSuccessful = false;
                this.downloadMessage = error;
            });
        }
    }
}
TorrentDownloadStatusComponent.ɵfac = function TorrentDownloadStatusComponent_Factory(t) { return new (t || TorrentDownloadStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_torrents_torrents_service__WEBPACK_IMPORTED_MODULE_1__.TorrentsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_2__.ServicesStatusService)); };
TorrentDownloadStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TorrentDownloadStatusComponent, selectors: [["vestibule-torrent-download-status"]], inputs: { showTorrent: "showTorrent" }, decls: 5, vars: 9, consts: [[1, "torrent-action", "action-download", 3, "click"], [1, "icon-wrap"], [3, "src"], ["class", "download-status", 4, "ngIf"], ["class", "download-progress", 4, "ngIf"], [1, "download-status"], [1, "download-progress"], [1, "bar"]], template: function TorrentDownloadStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TorrentDownloadStatusComponent_Template_div_click_0_listener() { return ctx.downloadTorrent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, TorrentDownloadStatusComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, TorrentDownloadStatusComponent_div_4_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c0, !ctx.canDownload, ctx.isDownloading, ctx.isDone));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("src", "/static/images/", ctx.statusIconName, "_icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDownloading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], styles: [".torrent-action[_ngcontent-%COMP%] {\n  min-width: 2.6rem;\n  height: 1.2rem;\n  text-align: center;\n  transition: 0.3s;\n  border-radius: 0.6rem;\n}\n.torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  padding: 0 0.3rem;\n}\n.torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: 0.2s;\n}\n.action-download[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  background-color: #50ad6f;\n}\n.action-download[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n.action-download.download_disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #a4a5a0;\n}\n.action-download.download_disabled[_ngcontent-%COMP%]:hover {\n  background-color: #972945;\n}\n.action-download.downloading[_ngcontent-%COMP%] {\n  width: 6rem;\n  cursor: auto;\n  background-color: #50ad6f;\n}\n.action-download.downloading[_ngcontent-%COMP%]:hover {\n  background-color: #50ad6f;\n}\n.action-download.done[_ngcontent-%COMP%] {\n  cursor: auto;\n  background-color: #2e7243;\n}\n.action-download.done[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n.action-download[_ngcontent-%COMP%]   .download-status[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 0 0.6rem 0 0;\n  color: #e3e4db;\n}\n.action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 0.3rem;\n  margin: 0.5rem 0.5rem 0 0;\n  background-color: #e3e4db;\n  border-radius: 0.15rem;\n  position: relative;\n}\n.action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  border-radius: inherit;\n  background-color: #2e7243;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcnJlbnQtZG93bmxvYWQtc3RhdHVzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQURGO0FBR0U7RUFDRSxpQkFBQTtBQURKO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBTjtBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQ2hCYztBRGNoQjtBQUlFO0VBQ0UseUJDbEJrQjtBRGdCdEI7QUFLRTtFQUNFLG1CQUFBO0VBQ0EseUJDZFM7QURXYjtBQUtJO0VBQ0UseUJDdEJjO0FEbUJwQjtBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkNsQ1k7QUQ2QmhCO0FBT0k7RUFDRSx5QkNyQ1U7QURnQ2hCO0FBU0U7RUFDRSxZQUFBO0VBQ0EseUJDMUNrQjtBRG1DdEI7QUFTSTtFQUNFLHlCQzdDZ0I7QURzQ3RCO0FBV0U7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0M5Q1E7QURxQ1o7QUFZRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFWSjtBQVlJO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkNuRWdCO0FEeUR0QiIsImZpbGUiOiJ0b3JyZW50LWRvd25sb2FkLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG4udG9ycmVudC1hY3Rpb24ge1xuICBtaW4td2lkdGg6IDIuNnJlbTtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuXG4gIC5pY29uLXdyYXAge1xuICAgIHBhZGRpbmc6IDAgMC4zcmVtO1xuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICAgIH1cbiAgfVxufVxuXG4uYWN0aW9uLWRvd25sb2FkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW47XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gIH1cblxuICAmLmRvd25sb2FkX2Rpc2FibGVkIHtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bnNlbGVjdGVkO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUtZmFsc2UtaG92ZXI7XG4gICAgfVxuICB9XG5cbiAgJi5kb3dubG9hZGluZyB7XG4gICAgd2lkdGg6IDZyZW07XG4gICAgY3Vyc29yOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9ycmVudC1ncmVlbjtcbiAgICB9XG4gIH1cblxuICAmLmRvbmUge1xuICAgIGN1cnNvcjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9ycmVudC1ncmVlbi1ob3ZlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRvd25sb2FkLXN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBwYWRkaW5nOiAwIDAuNnJlbSAwIDA7XG4gICAgY29sb3I6ICRtYWluLWJhY2s7XG4gIH1cblxuICAuZG93bmxvYWQtcHJvZ3Jlc3Mge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMC4zcmVtO1xuICAgIG1hcmdpbjogMC41cmVtIDAuNXJlbSAwIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRkYjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjE1cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5iYXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuLWhvdmVyXG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1saWdodC0yOiAjZDJkM2M3NzU7XG4kbGlnaHQtZ3JheTogI2M5Y2FjNjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });


/***/ }),

/***/ 3306:
/*!***********************************************************************************!*\
  !*** ./src/app/shows/show-details/show-details-tab/show-details-tab.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowDetailsTabComponent": () => (/* binding */ ShowDetailsTabComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

const _c0 = ["*"];
class ShowDetailsTabComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() {
    }
}
ShowDetailsTabComponent.ɵfac = function ShowDetailsTabComponent_Factory(t) { return new (t || ShowDetailsTabComponent)(); };
ShowDetailsTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDetailsTabComponent, selectors: [["vestibule-show-details-tab"]], inputs: { title: ["tabTitle", "title"], active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function ShowDetailsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LWRldGFpbHMtdGFiLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6541:
/*!*************************************************************************************!*\
  !*** ./src/app/shows/show-details/show-details-tabs/show-details-tabs.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowDetailsTabsComponent": () => (/* binding */ ShowDetailsTabsComponent)
/* harmony export */ });
/* harmony import */ var _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../show-details-tab/show-details-tab.component */ 3306);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);



function ShowDetailsTabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowDetailsTabsComponent_li_1_Template_li_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const tab_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", tab_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", tab_r1.title, " ");
} }
const _c0 = ["*"];
class ShowDetailsTabsComponent {
    constructor() { }
    ngAfterContentInit() {
        let activeTabs = this.tabs.filter((tab) => tab.active);
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(tab) {
        this.tabs.toArray().forEach(tab => tab.active = false);
        tab.active = true;
    }
}
ShowDetailsTabsComponent.ɵfac = function ShowDetailsTabsComponent_Factory(t) { return new (t || ShowDetailsTabsComponent)(); };
ShowDetailsTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowDetailsTabsComponent, selectors: [["vestibule-show-details-tabs"]], contentQueries: function ShowDetailsTabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_0__.ShowDetailsTabComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "show-details-tabs"], ["class", "show-details-tab-title", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "show-details-tab-title", 3, "click"]], template: function ShowDetailsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowDetailsTabsComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".show-details-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 1rem 0 2rem;\n}\n\n.show-details-tab-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-right: 1.5rem;\n  color: #a4a5a0;\n  transition: 0.2s;\n  border-bottom: 3px solid;\n  padding-bottom: 5px;\n  white-space: nowrap;\n}\n\n.show-details-tab-title.active[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.show-details-tab-title[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZGV0YWlscy10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFHRTtFQUNFLGNBQUE7QUFESjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBRkoiLCJmaWxlIjoic2hvdy1kZXRhaWxzLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLnNob3ctZGV0YWlscy10YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAxcmVtIDAgMnJlbTtcbn1cblxuLnNob3ctZGV0YWlscy10YWItdGl0bGUge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgY29sb3I6ICNhNGE1YTA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 400:
/*!**************************************************************!*\
  !*** ./src/app/shows/show-details/show-details.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowDetailsComponent": () => (/* binding */ ShowDetailsComponent)
/* harmony export */ });
/* harmony import */ var _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/loading-button/loading-button-status */ 2721);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 9441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shows.service */ 3722);
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ 7841);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-details-tabs/show-details-tabs.component */ 6541);
/* harmony import */ var _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-details-tab/show-details-tab.component */ 3306);
/* harmony import */ var _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../show-torrents/show-torrents.component */ 6762);
/* harmony import */ var _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../show-profile/show-profile.component */ 6234);
/* harmony import */ var _shared_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loading-button/loading-button.component */ 4628);
/* harmony import */ var _shared_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/pipes/plural-pipe.pipe */ 3773);













function ShowDetailsComponent_ng_container_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r1.show.year, " ");
} }
function ShowDetailsComponent_ng_container_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r2.show.network, " ");
} }
function ShowDetailsComponent_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "pluralPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](3, 1, ctx_r3.show.number_of_seasons_as_int, "Season"), "");
} }
function ShowDetailsComponent_ng_container_0_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("Next Episode: ", ctx_r4.show.next_episode, "");
} }
function ShowDetailsComponent_ng_container_0_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Are you sure you want to unsubscribe?");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_div_34_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r6.onUnsubscribeConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Yes, unsubscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_div_34_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r8.onUnsubscribeCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" This will delete all '", ctx_r5.show.title, "' Torrents and show info");
} }
const _c0 = function (a0, a1) { return { "loading": a0, "error": a1 }; };
function ShowDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "vestibule-show-details-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "vestibule-show-details-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, ShowDetailsComponent_ng_container_0_span_6_Template, 5, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, ShowDetailsComponent_ng_container_0_span_7_Template, 5, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, ShowDetailsComponent_ng_container_0_span_8_Template, 4, 4, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, ShowDetailsComponent_ng_container_0_p_11_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "IMDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "vestibule-show-details-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](18, "vestibule-show-torrents", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "vestibule-show-details-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "vestibule-show-profile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "vestibule-show-details-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r9.onUpdateShowInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "Update Show Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r11.onFindShowTorrents(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Find Show Torrents");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Danger Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r12.onUnsubscribe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, " Unsubscribe from Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](34, ShowDetailsComponent_ng_container_0_div_34_Template, 11, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.show.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.show.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.show.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.show.number_of_seasons_as_int);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.show.status_line);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.show.next_episode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("href", ctx_r0.show.imdb_url, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r0.show.imdb_rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("show", ctx_r0.show)("showUpdated$", ctx_r0.showUpdated.asObservable());
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("showProfile", ctx_r0.show.profile)("showImdbID", ctx_r0.show.imdb_id)("showCustomLookupNames", ctx_r0.show.custom_lookup_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](16, _c0, ctx_r0.updateShowInfoStatus === "loading", ctx_r0.updateShowInfoStatus === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](19, _c0, ctx_r0.findShowTorrentsStatus === "loading", ctx_r0.findShowTorrentsStatus === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.unsubscribeShowStatus === "confirm");
} }
class ShowDetailsComponent {
    constructor(route, showsService, panelBackgroundService, router) {
        this.route = route;
        this.showsService = showsService;
        this.panelBackgroundService = panelBackgroundService;
        this.router = router;
        this.showUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.imdb_id = params['imdb_id'];
            this.showsService.showDetails(this.imdb_id).subscribe(data => {
                this.show = data;
                this.panelBackgroundService.changeBackground(this.show.thumbnail_link);
            });
        });
    }
    ngOnDestroy() {
        this.panelBackgroundService.defaultBackground();
        this.sub.unsubscribe();
    }
    resetMessagesAndStatus() {
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
    }
    onUpdateShowInfo() {
        this.resetMessagesAndStatus();
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.loading;
        this.showsService.updateShowInfo(this.imdb_id).subscribe(data => {
            this.show = data;
            this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
            this.showUpdated.next();
        }, error => {
            this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.error;
        });
    }
    onFindShowTorrents() {
        this.resetMessagesAndStatus();
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.loading;
        this.showsService.findShowTorrents(this.imdb_id).subscribe(data => {
            this.show = data;
            this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.idle;
        }, () => {
            this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.error;
        });
    }
    onUnsubscribe() {
        this.resetMessagesAndStatus();
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.confirm;
    }
    onUnsubscribeCancel() {
        this.resetMessagesAndStatus();
    }
    onUnsubscribeConfirm() {
        this.showsService.unsubscribeFromShow(this.imdb_id).subscribe(data => {
            this.router.navigate(['/shows']);
        }, error => {
            this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_0__.LoadingButtonStatus.error;
        });
    }
}
ShowDetailsComponent.ɵfac = function ShowDetailsComponent_Factory(t) { return new (t || ShowDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_1__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__.PanelBackgroundService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router)); };
ShowDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ShowDetailsComponent, selectors: [["vestibule-show-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "show-title"], ["tabTitle", "Status", "active", "true"], [1, "show-title-tags"], [1, "show-status-line"], ["class", "show-next-episode-line", 4, "ngIf"], [1, "show-imdb-link"], ["target", "_blank", 3, "href"], ["tabTitle", "Episodes + Torrents"], [3, "show", "showUpdated$"], ["tabTitle", "Settings"], [3, "showProfile", "showImdbID", "showCustomLookupNames"], ["tabTitle", "Actions"], [3, "ngClass", "click"], [1, "danger-zone-actions"], [1, "danger-zone-button", 3, "click"], ["class", "danger-zone-confirm", 4, "ngIf"], [1, "bullet"], [1, "show-next-episode-line"], [1, "danger-zone-confirm"], [1, "danger-zone-text"], [1, "danger-zone-confirm-yes", 3, "click"], [1, "danger-zone-confirm-cancel", 3, "click"]], template: function ShowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, ShowDetailsComponent_ng_container_0_Template, 35, 22, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_3__.ShowDetailsTabsComponent, _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_4__.ShowDetailsTabComponent, _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_5__.ShowTorrentsComponent, _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_6__.ShowProfileComponent, _shared_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_7__.LoadingButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass], pipes: [_shared_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_8__.PluralPipePipe], styles: [".show-title[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: 500;\n}\n\n.show-title-tags[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.show-status-line[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.danger-zone-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.danger-zone-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #AF4F68;\n  margin-bottom: 5px;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  border-left: 3px solid #a4a5a0;\n  padding-left: 10px;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #AF4F68;\n  font-weight: 500;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%], .danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 0.9em;\n  margin-right: 15px;\n  font-weight: 500;\n  border-bottom: 3px solid;\n  margin-top: 10px;\n  padding-bottom: 3px;\n  transition: 0.2s;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%]:hover {\n  color: #972945;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%]:hover {\n  color: #206f38;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUVFLGtCQUFBO0FBRkY7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGNDWFU7RURZVixrQkFBQTtBQUZKOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBS0U7RUFDRSxjQUFBO0FBSEo7O0FBS0k7RUFDRSxjQ3pCUTtFRDBCUixnQkFBQTtBQUhOOztBQU9FOztFQUVFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBUUU7RUFDRSxjQzVDVTtBRHNDZDs7QUFRSTtFQUNFLGNDOUNjO0FEd0NwQjs7QUFVRTtFQUNFLGNDckRTO0FENkNiOztBQVVJO0VBQ0UsY0N6RGE7QURpRG5CIiwiZmlsZSI6InNob3ctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG4uc2hvdy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zaG93LXRpdGxlLXRhZ3Mge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5zaG93LXN0YXR1cy1saW5lIHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmRhbmdlci16b25lLWFjdGlvbnMge1xuXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5kYW5nZXItem9uZS1jb25maXJtIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHVuc2VsZWN0ZWQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAuZGFuZ2VyLXpvbmUtdGV4dCBwIHtcbiAgICBjb2xvcjogIzMzMzMzMztcblxuICAgIGIge1xuICAgICAgY29sb3I6ICR2YWx1ZS1mYWxzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmRhbmdlci16b25lLWNvbmZpcm0teWVzLFxuICAuZGFuZ2VyLXpvbmUtY29uZmlybS1jYW5jZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgLmRhbmdlci16b25lLWNvbmZpcm0teWVzIHtcbiAgICBjb2xvcjogJHZhbHVlLWZhbHNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHZhbHVlLWZhbHNlLWhvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5kYW5nZXItem9uZS1jb25maXJtLWNhbmNlbCB7XG4gICAgY29sb3I6ICR2YWx1ZS10cnVlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1saWdodC0yOiAjZDJkM2M3NzU7XG4kbGlnaHQtZ3JheTogI2M5Y2FjNjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });


/***/ }),

/***/ 6234:
/*!**************************************************************!*\
  !*** ./src/app/shows/show-profile/show-profile.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowProfileComponent": () => (/* binding */ ShowProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows.service */ 3722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);





function ShowProfileComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", quality_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](quality_r3);
} }
function ShowProfileComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const waitTime_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", waitTime_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](waitTime_r4.name);
} }
function ShowProfileComponent_p_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Failed to save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1, a2) { return { "disabled": a0, "loading": a1, "error": a2 }; };
class ShowProfileComponent {
    constructor(fb, showsService) {
        this.fb = fb;
        this.showsService = showsService;
        this.isChanged = false;
        this.isLoading = false;
        this.hasSaveError = false;
        this.profileForm = this.fb.group({
            quality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            subtitles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            high_quality_source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            download_automatically: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            wait: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            custom_lookup_names: ['']
        });
        this.qualities = [
            '720P',
            '1080P',
            '4K'
        ];
        this.waitTimes = [
            { name: 'Don\'t Wait', value: 'N' },
            { name: 'Up to a Day', value: '1D' },
            { name: 'Up to 2 Days', value: '2D' },
            { name: 'Up to 3 Days', value: '3D' },
            { name: 'Up to 4 Days', value: '4D' },
            { name: 'Up to 5 Days', value: '5D' },
            { name: 'Up to 6 Days', value: '6D' },
            { name: 'Up to a Week', value: '1W' },
            { name: 'Forever', value: 'F' },
        ];
    }
    ngOnInit() {
        this.profileForm.setValue({
            quality: this.showProfile.quality,
            subtitles: this.showProfile.subtitles,
            high_quality_source: this.showProfile.high_quality_source,
            download_automatically: this.showProfile.download_automatically,
            wait: this.showProfile.wait,
            custom_lookup_names: this.showCustomLookupNames
        });
        this.profileForm.valueChanges.subscribe(val => {
            this.hasSaveError = false;
            this.updateIsChanged();
        });
    }
    onSubmit() {
        let settingsLoading = true;
        let profileLoading = true;
        this.isLoading = true;
        this.hasSaveError = false;
        const customLookupName = this.profileForm.get('custom_lookup_names').value;
        if (customLookupName) {
            this.showsService.updateShowSettings(this.showImdbID, { imdb_id: this.showImdbID, custom_lookup_names: customLookupName }).subscribe(showDetails => {
                settingsLoading = false;
                this.showCustomLookupNames = showDetails.custom_lookup_names;
                this.updateIsChanged();
                this.isLoading = profileLoading && settingsLoading;
            });
        }
        else {
            settingsLoading = false;
        }
        this.showsService.updateShowProfile(this.showImdbID, this.profileForm.value).subscribe(data => {
            this.showProfile = data;
            this.updateIsChanged();
            profileLoading = false;
            this.isLoading = profileLoading && settingsLoading;
        }, () => {
            profileLoading = false;
            this.isLoading = profileLoading && settingsLoading;
            this.hasSaveError = true;
        });
    }
    updateIsChanged() {
        this.isChanged = JSON.stringify(this.profileForm.value) !== JSON.stringify(Object.assign(Object.assign({}, this.showProfile), { custom_lookup_names: this.showCustomLookupNames }));
    }
}
ShowProfileComponent.ɵfac = function ShowProfileComponent_Factory(t) { return new (t || ShowProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService)); };
ShowProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowProfileComponent, selectors: [["vestibule-show-profile"]], inputs: { showProfile: "showProfile", showImdbID: "showImdbID", showCustomLookupNames: "showCustomLookupNames" }, decls: 64, vars: 16, consts: [[3, "formGroup", "ngSubmit"], [1, "profile-form-field"], [1, "bullet"], ["formControlName", "quality", 1, "profile-form-option-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "profile-option-description"], ["formControlName", "wait", 1, "profile-form-option-select"], ["formControlName", "download_automatically", 1, "profile-form-option-select"], [3, "ngValue"], ["formControlName", "subtitles", 1, "profile-form-option-select"], ["formControlName", "high_quality_source", 1, "profile-form-option-select"], ["formControlName", "custom_lookup_names", "rows", "5", "cols", "20"], ["type", "submit", 1, "profile-form-submit", 3, "disabled", "ngClass"], ["class", "save-error-text", 4, "ngIf"], [1, "save-error-text"]], template: function ShowProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ShowProfileComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Preferred Video Quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ShowProfileComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Should favor torrents with matching video quality (or higher if not found) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Wait for Match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ShowProfileComponent_option_16_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " How long should the automatic download wait if no full profile match is found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Download Automatically ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Should matching episodes be downloaded automatically upon match, or wait time exhaustion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Requires Subtitles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Should favor torrents with subtitles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " High-Quality Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, " Should favor torrents from high quality sources, like Web or BlueRay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Custom Lookup Names");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " User-defined values used to find show torrents (will be added to auto-generated values) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](63, ShowProfileComponent_p_63_Template, 2, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.qualities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.waitTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.profileForm.valid || !ctx.profileForm.dirty || !ctx.isChanged)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](12, _c0, !ctx.profileForm.valid || !ctx.profileForm.dirty || !ctx.isChanged, ctx.isLoading, ctx.hasSaveError));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hasSaveError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: [".profile-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.profile-option-description[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 100;\n  color: #a4a5a0;\n}\n\n.profile-form-option-select[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #3f9359;\n}\n\n@keyframes flash_border {\n  0% {\n    border-color: #3f9359;\n  }\n  50% {\n    border-color: #206f38;\n  }\n  100% {\n    border-color: #3f9359;\n  }\n}\n\n.profile-form-submit[_ngcontent-%COMP%] {\n  color: #3f9359;\n  font-size: 1em;\n  margin-top: 1rem;\n  padding-bottom: 5px;\n  border: none;\n  background: none;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.profile-form-submit[_ngcontent-%COMP%]:hover {\n  color: #206f38;\n}\n\n.profile-form-submit.disabled[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  cursor: auto;\n}\n\n.profile-form-submit.loading[_ngcontent-%COMP%] {\n  border-bottom: solid #3f9359 3px;\n  animation-name: flash_border;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n.profile-form-submit.error[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n\n.save-error-text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #a4a5a0;\n}\n\n.value-true[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n\n.value-false[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  font-size: 1em;\n  width: 24rem;\n  border: none;\n  border-radius: 0.3rem;\n  margin-top: 0.5rem;\n  background-color: rgba(164, 165, 160, 0.2);\n  padding: 0.5em;\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNDT1c7QURSYjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNDTlc7QURLYjs7QUFJQTtFQUNFO0lBQ0UscUJDWFM7RURVWDtFQUdBO0lBQ0UscUJDZmU7RURjakI7RUFHQTtJQUNFLHFCQ2pCUztFRGdCWDtBQUNGOztBQUlBO0VBQ0UsY0N0Qlc7RUR1QlgsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFJRTtFQUNFLGNDakNlO0FEK0JuQjs7QUFLRTtFQUNFLGNDN0JTO0VEOEJULFlBQUE7QUFISjs7QUFNRTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFKSjs7QUFPRTtFQUNFLGNDaERVO0FEMkNkOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxjQ2hEVztBRDBDYjs7QUFTQTtFQUNFLGNDM0RXO0FEcURiOztBQVNBO0VBQ0UsY0M5RFk7QUR3RGQ7O0FBU0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENDL0R1QjtFRGdFdkIsY0FBQTtFQUNBLGdCQUFBO0FBTkYiLCJmaWxlIjoic2hvdy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5wcm9maWxlLWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5wcm9maWxlLW9wdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbn1cblxuLnByb2ZpbGUtZm9ybS1vcHRpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG59XG5cbkBrZXlmcmFtZXMgZmxhc2hfYm9yZGVyIHtcbiAgMCUge1xuICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWU7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICR2YWx1ZS10cnVlLWhvdmVyO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWU7XG4gIH1cbn1cblxuLnByb2ZpbGUtZm9ybS1zdWJtaXQge1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG5cbiAgJi5sb2FkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkdmFsdWUtdHJ1ZSAzcHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoX2JvcmRlcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gIH1cbn1cblxuLnNhdmUtZXJyb3ItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbn1cblxuLnZhbHVlLXRydWUge1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG59XG5cbi52YWx1ZS1mYWxzZSB7XG4gIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG59XG5cbnRleHRhcmVhIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHdpZHRoOiAyNHJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 5942:
/*!**********************************************************************************************!*\
  !*** ./src/app/shows/show-torrents/show-torrents-section/show-torrents-section.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowTorrentsSectionComponent": () => (/* binding */ ShowTorrentsSectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/show-torrent/show-torrent.component */ 7443);



function ShowTorrentsSectionComponent_ng_container_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "vestibule-show-torrent", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const torrent_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showTorrent", torrent_r3);
} }
function ShowTorrentsSectionComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowTorrentsSectionComponent_ng_container_0_div_8_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.torrentsDetails());
} }
function ShowTorrentsSectionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ShowTorrentsSectionComponent_ng_container_0_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.toggleListOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ShowTorrentsSectionComponent_ng_container_0_div_8_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("matching-torrents", ctx_r0.matchingTorrents);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.torrents.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.openList ? "Hide" : "Show", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.openList);
} }
class ShowTorrentsSectionComponent {
    constructor() {
        this.defaultOpen = false;
    }
    ngOnInit() {
        this.openList = this.defaultOpen;
    }
    ngOnChanges() {
        this.openList = this.defaultOpen;
    }
    toggleListOpen() {
        this.openList = !this.openList;
    }
    torrentsDetails() {
        return this.torrents.map((torrent) => {
            return {
                torrentId: torrent.id,
                torrentTitle: torrent.title,
                showTitle: this.show.title,
                seasonNumber: `${this.season.number}`,
                episodeNumber: this.episode ? `${this.episode.number}` : '',
                publicationTime: torrent.publication_time,
                feed: torrent.feed,
                quality: torrent.quality,
                sourceType: torrent.source_type,
                torrentLink: torrent.link,
                isStandaloneTorrent: false,
                downloadStatus: torrent.download_status,
                percentDone: torrent.percent_done
            };
        });
    }
}
ShowTorrentsSectionComponent.ɵfac = function ShowTorrentsSectionComponent_Factory(t) { return new (t || ShowTorrentsSectionComponent)(); };
ShowTorrentsSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowTorrentsSectionComponent, selectors: [["vestibule-show-torrents-section"]], inputs: { title: "title", defaultOpen: "defaultOpen", matchingTorrents: "matchingTorrents", torrents: "torrents", show: "show", season: "season", episode: "episode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "torrents-section-header"], [3, "click"], [1, "torrents-count"], [1, "list-action"], ["class", "torrents-section-list", 4, "ngIf"], [1, "torrents-section-list"], ["class", "torrent-cont", 4, "ngFor", "ngForOf"], [1, "torrent-cont"], [3, "showTorrent"]], template: function ShowTorrentsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ShowTorrentsSectionComponent_ng_container_0_Template, 9, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.torrents.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_0__.ShowTorrentComponent], styles: [".torrents-section-header[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  font-weight: 100;\n  transition: 0.3s;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #747470;\n  transition: inherit;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover   .torrents-count.matching-torrents[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover   .list-action[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.torrents-section-header[_ngcontent-%COMP%]   .torrents-count[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  transition: inherit;\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.torrents-section-header[_ngcontent-%COMP%]   .list-action[_ngcontent-%COMP%] {\n  transition: inherit;\n  color: #747470;\n  display: inline-block;\n  margin-left: 0.5rem;\n  opacity: 0.3;\n  font-weight: 100;\n}\n.torrents-section-list[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctdG9ycmVudHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNDT2M7RUROZCxtQkFBQTtBQUZKO0FBSUk7RUFDRSxXQ01FO0FEUlI7QUFJTTtFQUNFLGNDUks7QURNYjtBQUtNO0VBQ0UsWUFBQTtBQUhSO0FBUUU7RUFDRSxjQ1hTO0VEWVQsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsY0NsQmM7RURtQmQscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVBKO0FBV0E7RUFDRSxvQkFBQTtBQVJGIiwiZmlsZSI6InNob3ctdG9ycmVudHMtc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG5cbi50b3JyZW50cy1zZWN0aW9uLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuXG4gIHAge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJGJsYWNrO1xuXG4gICAgICAudG9ycmVudHMtY291bnQubWF0Y2hpbmctdG9ycmVudHMge1xuICAgICAgICBjb2xvcjogJHZhbHVlLXRydWU7XG4gICAgICB9XG5cbiAgICAgIC5saXN0LWFjdGlvbiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAudG9ycmVudHMtY291bnQge1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICB9XG5cbiAgLmxpc3QtYWN0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBpbmhlcml0O1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICB9XG59XG5cbi50b3JyZW50cy1zZWN0aW9uLWxpc3Qge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbn1cblxuLnRvcnJlbnQtY29udCB7XG5cbn1cbiIsIiRtYWluLWNvbG9yOiAjZTNlNGRiO1xuJHNlY29uZGFyeS1jb2xvcjogI0M4QzlDMDtcbiR0cmFuc3BhcmVudC1saWdodDogI2UxZTJkNjY2O1xuJHRyYW5zcGFyZW50LWxpZ2h0LTI6ICNkMmQzYzc3NTtcbiRsaWdodC1ncmF5OiAjYzljYWM2O1xuJHRyYW5zcGFyZW50LXNlbWktbGlnaHQ6IHJnYmEoMjI1LCAyMjYsIDIxNCwgMC42NSk7XG4kdG9ycmVudC1ncmVlbjogIzUwYWQ2ZjtcbiR0b3JyZW50LWdyZWVuLWhvdmVyOiAjMmU3MjQzO1xuJHZhbHVlLXRydWUtaG92ZXI6ICMyMDZmMzg7XG4kdmFsdWUtdHJ1ZTogIzNmOTM1OTtcbiR2YWx1ZS1mYWxzZTogI0FGNEY2ODtcbiR2YWx1ZS1mYWxzZS1ob3ZlcjogIzk3Mjk0NTtcbiR2YWx1ZS1uZXV0cmFsOiAjMDA3MWJjO1xuJG1haW4tYmFjazogI2UzZTRkYjtcbiRtYWluLWJhY2stZGFyazogI2JmYmZiODtcbiRtYWluLWJhY2stZGFyay10cmFuc3BhcmVudDogcmdiYSgxOTEsIDE5MSwgMTg0LCAwLjUpO1xuJHVuc2VsZWN0ZWQ6ICNhNGE1YTA7XG4kdW5zZWxlY3RlZC1kYXJrOiAjNzQ3NDcwO1xuJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMTY0LCAxNjUsIDE2MCwgMC4yKTtcbiRza2lwOiAjZWRiZjNiO1xuJGJsYWNrOiAjMzMzO1xuJGxpZ2h0LXRleHQ6ICNkMmQzYzc7XG4iXX0= */"] });


/***/ }),

/***/ 6762:
/*!****************************************************************!*\
  !*** ./src/app/shows/show-torrents/show-torrents.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowTorrentsComponent": () => (/* binding */ ShowTorrentsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows.service */ 3722);
/* harmony import */ var _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../panel/services-status/services-status.service */ 4486);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-torrents-section/show-torrents-section.component */ 5942);





function ShowTorrentsComponent_ng_container_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_div_3_div_2_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const episode_r5 = restoredCtx.$implicit; const season_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r6.chooseEpisode(season_r3, episode_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected-episode", episode_r5.id === ctx_r4.selectedEpisode.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](episode_r5.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r4.episodeStatusBulletColor(episode_r5));
} }
function ShowTorrentsComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ShowTorrentsComponent_ng_container_0_div_3_div_2_Template, 5, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("selected-season", season_r3.id === ctx_r1.selectedSeason.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", season_r3.episodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](season_r3.title);
} }
function ShowTorrentsComponent_ng_container_0_section_4_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "No torrents found for this Episode yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ShowTorrentsComponent_ng_container_0_section_4_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "vestibule-show-torrents-section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "vestibule-show-torrents-section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "vestibule-show-torrents-section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "vestibule-show-torrents-section", 30);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Profile Matching Episode Torrents")("torrents", ctx_r11.selectedEpisode.matching_torrents)("episode", ctx_r11.selectedEpisode)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("defaultOpen", true)("matchingTorrents", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Profile Matching Season Torrents")("torrents", ctx_r11.selectedSeason.season_matching_torrents)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("defaultOpen", true)("matchingTorrents", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Episode Torrents (Not Matching Profile)")("torrents", ctx_r11.selectedEpisode.unmatching_torrents)("episode", ctx_r11.selectedEpisode)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("matchingTorrents", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Season Torrents (Not Matching Profile)")("torrents", ctx_r11.selectedSeason.season_unmatching_torrents)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("matchingTorrents", false);
} }
const _c0 = function (a0) { return { disabled: a0 }; };
function ShowTorrentsComponent_ng_container_0_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "\u00A0 \u2014 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "\u00A0 \u2014 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r12.updateEpisodeDownloadStatus(ctx_r12.selectedEpisode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r14.updateSeasonDownloadStatus(ctx_r14.selectedSeason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r15.downloadEpisodeBestMatch(ctx_r15.selectedEpisode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Download Best Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ShowTorrentsComponent_ng_container_0_section_4_p_31_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, ShowTorrentsComponent_ng_container_0_section_4_ng_template_32_Template, 4, 24, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](33);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedEpisode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedSeason.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("E", ctx_r2.selectedEpisode.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.selectedEpisode.air_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx_r2.episodeStatusBulletColor(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r2.episodeStatusBulletColor(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.episodeStatusText(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.selectedEpisode.should_download ? "Skip" : "Un-skip", " this Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.selectedSeason.should_download ? "Skip" : "Un-skip", " this Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](14, _c0, !ctx_r2.canDownload || ctx_r2.showNoTorrentsMessage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.showNoTorrentsMessage())("ngIfElse", _r10);
} }
function ShowTorrentsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ShowTorrentsComponent_ng_container_0_div_3_Template, 6, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ShowTorrentsComponent_ng_container_0_section_4_Template, 34, 16, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.seasons.seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.selectedEpisode);
} }
class EpisodeStatusColors {
}
EpisodeStatusColors.SKIP = '#c78415';
EpisodeStatusColors.SHOULD_DOWNLOAD = '#0071bc';
EpisodeStatusColors.DOWNLOADED = '#50ad6f';
EpisodeStatusColors.NOT_AIRED = '#8241d8';
class ShowTorrentsComponent {
    constructor(showsService, servicesStatusService) {
        this.showsService = showsService;
        this.servicesStatusService = servicesStatusService;
        this.canDownload = false;
    }
    ngOnInit() {
        this.updateShowTorrents();
        this.showUpdatedSubscription = this.showUpdated$.subscribe(() => this.updateShowTorrents());
        this.servicesStatusService.getServicesStatus().subscribe(data => { var _a; return this.canDownload = (_a = data.services["transmission"]) === null || _a === void 0 ? void 0 : _a.up; });
    }
    updateShowTorrents() {
        this.showsService.listShowTorrents(this.show.imdb_id)
            .subscribe(data => {
            this.seasons = data;
            if (this.seasons.seasons.length) {
                this.selectedSeason = this.seasons.seasons[0];
                if (this.selectedSeason.episodes.length) {
                    this.selectedEpisode = this.selectedSeason.episodes[0];
                }
            }
        });
    }
    episodeStatusBulletColor(episode) {
        if (episode.is_downloaded) {
            return EpisodeStatusColors.DOWNLOADED;
        }
        if (!episode.should_download) {
            return EpisodeStatusColors.SKIP;
        }
        return episode.is_aired ? EpisodeStatusColors.SHOULD_DOWNLOAD : EpisodeStatusColors.NOT_AIRED;
    }
    episodeStatusText(episode) {
        if (episode.is_downloaded) {
            return 'Downloaded';
        }
        if (!episode.should_download) {
            return 'Skip';
        }
        return episode.is_aired ? 'Should Download' : 'Not Aired Yet';
    }
    updateEpisodeDownloadStatus(episode) {
        this.showsService.updateShowTorrents(this.show.imdb_id, { episode: { id: episode.id, should_download: !episode.should_download } }).subscribe(data => {
            this.seasons = data;
            this.updateSelected();
        });
    }
    updateSeasonDownloadStatus(season) {
        this.showsService.updateShowTorrents(this.show.imdb_id, { season: { id: season.id, should_download: !season.should_download } }).subscribe(data => {
            this.seasons = data;
            this.updateSelected();
        });
    }
    downloadEpisodeBestMatch(episode) {
        if (this.showNoTorrentsMessage()) {
            console.log('Episode has no torrents');
            return;
        }
        if (!this.canDownload) {
            console.log('Transmission is down');
            return;
        }
        this.showsService.downloadEpisodeBestMatch(this.show.imdb_id, { episode: { id: episode.id } }).subscribe(data => {
            this.seasons = data;
            this.updateSelected();
        });
    }
    updateSelected() {
        this.selectedSeason = this.seasons.seasons.find(season => season.id === this.selectedSeason.id);
        this.selectedEpisode = this.selectedSeason.episodes.find(episode => episode.id === this.selectedEpisode.id);
    }
    chooseEpisode(season, episode) {
        this.selectedSeason = season;
        this.selectedEpisode = episode;
    }
    showNoTorrentsMessage() {
        return !this.selectedSeason.season_matching_torrents.length &&
            !this.selectedSeason.season_unmatching_torrents.length &&
            !this.selectedEpisode.matching_torrents.length &&
            !this.selectedEpisode.unmatching_torrents.length;
    }
    ngOnDestroy() {
        this.showUpdatedSubscription.unsubscribe();
    }
}
ShowTorrentsComponent.ɵfac = function ShowTorrentsComponent_Factory(t) { return new (t || ShowTorrentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_1__.ServicesStatusService)); };
ShowTorrentsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ShowTorrentsComponent, selectors: [["vestibule-show-torrents"]], inputs: { show: "show", showUpdated$: "showUpdated$" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "show-torrents-cont"], ["id", "show-seasons-menu"], ["class", "season-cont", 3, "selected-season", 4, "ngFor", "ngForOf"], ["id", "episode-details-cont", 4, "ngIf"], [1, "season-cont"], [1, "season-episodes-list"], ["class", "episode-block-cont", 3, "selected-episode", "click", 4, "ngFor", "ngForOf"], [1, "season-title-cont"], [1, "season-title"], [1, "episode-block-cont", 3, "click"], [1, "episode-block-number"], [1, "episode-block"], ["id", "episode-details-cont"], [1, "episode-details-header"], [1, "episode-details-title"], [1, "episode-details-subtitle-info"], [1, "episode-download-status-cont"], [1, "episode-download-status"], [1, "episode-status-bullet"], [1, "episode-download-status-actions"], [1, "episode-download-status-action", "skip-action", 3, "click"], [1, "episode-download-status-action", "download-action", 3, "ngClass", "click"], [1, "episode-torrents-list"], ["class", "no-torrents-found-message", 4, "ngIf", "ngIfElse"], ["hasTorrents", ""], [1, "no-torrents-found-message"], [3, "title", "torrents", "episode", "season", "show", "defaultOpen", "matchingTorrents"], [3, "title", "torrents", "season", "show", "defaultOpen", "matchingTorrents"], [3, "title", "torrents", "episode", "season", "show", "matchingTorrents"], [3, "title", "torrents", "season", "show", "matchingTorrents"]], template: function ShowTorrentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ShowTorrentsComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.seasons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_2__.ShowTorrentsSectionComponent], styles: ["#show-torrents-cont[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#show-seasons-menu[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  max-height: calc(100vh - 11rem);\n  overflow-y: scroll;\n}\n\n#show-seasons-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.season-cont[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  position: relative;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-title-cont[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  align-items: flex-start;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-title-cont[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.9em;\n  white-space: nowrap;\n  color: #a4a5a0;\n  transition: 0.3s;\n  transform: rotate(180deg);\n  width: 100%;\n  writing-mode: vertical-lr;\n  margin-right: 0.5rem;\n  padding-bottom: 0.6rem;\n}\n\n.season-cont[_ngcontent-%COMP%]:hover   .season-title[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont.selected-episode[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont.selected-episode[_ngcontent-%COMP%]   .episode-block[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:first-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0.3rem 0.3rem 0 0;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:last-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0 0 0.3rem 0.3rem;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:only-child {\n  width: 100%;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:only-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0.3rem;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  width: 1.5rem;\n  padding-right: 0.2rem;\n  text-align: left;\n  font-size: 0.9em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block[_ngcontent-%COMP%] {\n  height: 1.8rem;\n  width: 0.6rem;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover   .episode-block-number[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover   .episode-block[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#episode-details-cont[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  overflow-y: scroll;\n  height: calc(100vh - 20rem);\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .no-torrents-found-message[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  font-weight: 500;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-subtitle-info[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  margin-top: 3px;\n  font-weight: 100;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-subtitle-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: inherit;\n  color: inherit;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-download-status[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  display: inline-block;\n  margin-right: 8px;\n  border: 2px solid;\n  padding: 1px 5px;\n  font-weight: 500;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-torrents-list[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1rem 0;\n  background-color: rgba(164, 165, 160, 0.2);\n  height: 1.8rem;\n  border-radius: 0.9rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.9em;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%] {\n  background-color: rgba(164, 165, 160, 0.2);\n  color: inherit;\n  padding: 0.25rem 1rem 0.25rem 0.5rem;\n  border-radius: 0.9rem 0 0 0.9rem;\n  font-size: inherit;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%]   .episode-status-bullet[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 6px;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem;\n  font-size: inherit;\n  transition: 0.2s;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.9rem 0.9rem 0;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.skip-action[_ngcontent-%COMP%]:hover {\n  background-color: #edbf3b;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.download-action[_ngcontent-%COMP%]:hover {\n  background-color: #50ad6f;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.disabled[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3ctdG9ycmVudHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFRRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFOSjs7QUFRSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQU5OOztBQVdJO0VBQ0UsY0FBQTtBQVROOztBQWFFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBWEo7O0FBYUk7RUFDRSxhQUFBO0FBWE47O0FBY1E7RUFDRSxjQUFBO0FBWlY7O0FBY1E7RUFDRSxVQUFBO0FBWlY7O0FBaUJRO0VBQ0UsZ0NBQUE7QUFmVjs7QUFvQlE7RUFDRSxnQ0FBQTtBQWxCVjs7QUFzQk07RUFDRSxXQUFBO0FBcEJSOztBQXNCUTtFQUNFLHFCQUFBO0FBcEJWOztBQXdCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUF0QlI7O0FBd0JRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBdEJWOztBQTBCTTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBeEJSOztBQTJCTTtFQUNFLGVBQUE7QUF6QlI7O0FBMkJRO0VBQ0UsY0FBQTtBQXpCVjs7QUEyQlE7RUFDRSxVQUFBO0FBekJWOztBQWdDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQTdCRjs7QUErQkU7RUFDRSxjQ25IUztBRHNGYjs7QUFpQ0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBL0JOOztBQWtDSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBaENOOztBQWtDTTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQWhDUjs7QUFvQ0k7RUFDSSxjQ3hJSztFRHlJTCxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBbENSOztBQXFDRTtFQUNFLGdCQUFBO0FBbkNKOztBQXVDQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsMENDdEp1QjtFRHVKdkIsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGdCQUFBO0FBcENGOztBQXNDRTtFQUNFLDBDQzdKcUI7RUQ4SnJCLGNBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFwQ0o7O0FBc0NJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFwQ047O0FBdUNJO0VBQ0UseUJDNUtPO0VENktQLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBckNOOztBQXlDRTtFQUNFLGFBQUE7QUF2Q0o7O0FBeUNJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkNOOztBQXlDTTtFQUNFLGVBQUE7QUF2Q1I7O0FBMENNO0VBQ0UsZ0NBQUE7QUF4Q1I7O0FBNENRO0VBQ0UseUJDcE1IO0FEMEpQOztBQStDUTtFQUNFLHlCQ3ZOTTtBRDBLaEI7O0FBaURNO0VBQ0UsWUFBQTtBQS9DUjs7QUFpRFE7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7QUEvQ1YiLCJmaWxlIjoic2hvdy10b3JyZW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG4jc2hvdy10b3JyZW50cy1jb250IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI3Nob3ctc2Vhc29ucy1tZW51IHtcbiAgcGFkZGluZy1yaWdodDogMnJlbTtcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExcmVtKTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5zZWFzb24tY29udCB7XG4gIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IDRyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgLnNlbGVjdGVkLXNlYXNvbiB7XG5cbiAgfVxuXG4gIC5zZWFzb24tdGl0bGUtY29udCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgIC5zZWFzb24tdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgY29sb3I6ICNhNGE1YTA7XG4gICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcbiAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuNnJlbTtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAuc2Vhc29uLXRpdGxlIHtcbiAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIH1cbiAgfVxuXG4gIC5zZWFzb24tZXBpc29kZXMtbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLmVwaXNvZGUtYmxvY2stY29udCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAmLnNlbGVjdGVkLWVwaXNvZGUge1xuICAgICAgICAuZXBpc29kZS1ibG9jay1udW1iZXIge1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5lcGlzb2RlLWJsb2NrIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAuZXBpc29kZS1ibG9jayB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zcmVtIDAuM3JlbSAwIDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLmVwaXNvZGUtYmxvY2sge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwLjNyZW0gMC4zcmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICY6b25seS1jaGlsZCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5lcGlzb2RlLWJsb2NrIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmVwaXNvZGUtYmxvY2stbnVtYmVyIHtcbiAgICAgICAgY29sb3I6ICNhNGE1YTA7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDAuMnJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5lcGlzb2RlLWJsb2NrIHtcbiAgICAgICAgaGVpZ2h0OiAxLjhyZW07XG4gICAgICAgIHdpZHRoOiAwLjZyZW07XG4gICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAuZXBpc29kZS1ibG9jay1udW1iZXIge1xuICAgICAgICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgICAgICB9XG4gICAgICAgIC5lcGlzb2RlLWJsb2NrIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbiNlcGlzb2RlLWRldGFpbHMtY29udCB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcmVtKTtcblxuICAubm8tdG9ycmVudHMtZm91bmQtbWVzc2FnZSB7XG4gICAgY29sb3I6ICR1bnNlbGVjdGVkO1xuICB9XG5cbiAgLmVwaXNvZGUtZGV0YWlscy1oZWFkZXIge1xuICAgIC5lcGlzb2RlLWRldGFpbHMtdGl0bGUge1xuICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmVwaXNvZGUtZGV0YWlscy1zdWJ0aXRsZS1pbmZvIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICBmb250LXdlaWdodDogMTAwO1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5lcGlzb2RlLWRldGFpbHMtZG93bmxvYWQtc3RhdHVzIHtcbiAgICAgICAgY29sb3I6ICR1bnNlbGVjdGVkO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMXB4IDVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cbiAgLmVwaXNvZGUtdG9ycmVudHMtbGlzdCB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4uZXBpc29kZS1kb3dubG9hZC1zdGF0dXMtY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMXJlbSAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5zZWxlY3RlZC10cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAxLjhyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuOXJlbTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXNpemU6IDAuOWVtO1xuXG4gIC5lcGlzb2RlLWRvd25sb2FkLXN0YXR1cyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgcGFkZGluZzogMC4yNXJlbSAxcmVtIDAuMjVyZW0gMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOXJlbSAwIDAgMC45cmVtO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcblxuICAgIHNwYW4ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5lcGlzb2RlLXN0YXR1cy1idWxsZXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQ7XG4gICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcGlzb2RlLWRvd25sb2FkLXN0YXR1cy1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLmVwaXNvZGUtZG93bmxvYWQtc3RhdHVzLWFjdGlvbiB7XG4gICAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAuOXJlbSAwLjlyZW0gMDtcbiAgICAgIH1cblxuICAgICAgJi5za2lwLWFjdGlvbiB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRza2lwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuZG93bmxvYWQtYWN0aW9uIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuMztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRtYWluLWNvbG9yOiAjZTNlNGRiO1xuJHNlY29uZGFyeS1jb2xvcjogI0M4QzlDMDtcbiR0cmFuc3BhcmVudC1saWdodDogI2UxZTJkNjY2O1xuJHRyYW5zcGFyZW50LWxpZ2h0LTI6ICNkMmQzYzc3NTtcbiRsaWdodC1ncmF5OiAjYzljYWM2O1xuJHRyYW5zcGFyZW50LXNlbWktbGlnaHQ6IHJnYmEoMjI1LCAyMjYsIDIxNCwgMC42NSk7XG4kdG9ycmVudC1ncmVlbjogIzUwYWQ2ZjtcbiR0b3JyZW50LWdyZWVuLWhvdmVyOiAjMmU3MjQzO1xuJHZhbHVlLXRydWUtaG92ZXI6ICMyMDZmMzg7XG4kdmFsdWUtdHJ1ZTogIzNmOTM1OTtcbiR2YWx1ZS1mYWxzZTogI0FGNEY2ODtcbiR2YWx1ZS1mYWxzZS1ob3ZlcjogIzk3Mjk0NTtcbiR2YWx1ZS1uZXV0cmFsOiAjMDA3MWJjO1xuJG1haW4tYmFjazogI2UzZTRkYjtcbiRtYWluLWJhY2stZGFyazogI2JmYmZiODtcbiRtYWluLWJhY2stZGFyay10cmFuc3BhcmVudDogcmdiYSgxOTEsIDE5MSwgMTg0LCAwLjUpO1xuJHVuc2VsZWN0ZWQ6ICNhNGE1YTA7XG4kdW5zZWxlY3RlZC1kYXJrOiAjNzQ3NDcwO1xuJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMTY0LCAxNjUsIDE2MCwgMC4yKTtcbiRza2lwOiAjZWRiZjNiO1xuJGJsYWNrOiAjMzMzO1xuJGxpZ2h0LXRleHQ6ICNkMmQzYzc7XG4iXX0= */"] });


/***/ }),

/***/ 8431:
/*!**********************************************************!*\
  !*** ./src/app/shows/shows-list/shows-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsListComponent": () => (/* binding */ ShowsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows.service */ 3722);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows-status-group/shows-status-group.component */ 9515);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);





function ShowsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "This is where you'll find all the Shows you've subscribed to,");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "but it seems you don't have any subscriptions yet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Try finding a new show on ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Find");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/find/results");
} }
class ShowStatus {
}
ShowStatus.CONTINUING = 'Continuing';
ShowStatus.ENDED = 'Ended';
ShowStatus.UPCOMING = 'Upcoming';
class ShowsListComponent {
    constructor(showsService) {
        this.showsService = showsService;
        this.noShows = true;
    }
    ngOnInit() {
        this.showsService.listShows().subscribe(data => {
            this.showsByStatus = this.groupShowsBy(data);
            this.noShows = !Object.keys(this.showsByStatus).length;
            this.continuingShows = this.showsByStatus[ShowStatus.CONTINUING];
            this.upcomingShows = this.showsByStatus[ShowStatus.UPCOMING];
            this.endedShows = this.showsByStatus[ShowStatus.ENDED];
        });
    }
    groupShowsBy(showList, key = 'status') {
        return showList.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
    ;
}
ShowsListComponent.ɵfac = function ShowsListComponent_Factory(t) { return new (t || ShowsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService)); };
ShowsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ShowsListComponent, selectors: [["vestibule-shows-list"]], decls: 5, vars: 7, consts: [["id", "shows-status-list"], ["class", "no-shows", 4, "ngIf"], [3, "title", "showList"], [1, "no-shows"], [3, "routerLink"]], template: function ShowsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ShowsListComponent_div_1_Template, 10, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "vestibule-shows-status-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "vestibule-shows-status-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "vestibule-shows-status-group", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.noShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Continuing")("showList", ctx.continuingShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Upcoming")("showList", ctx.upcomingShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Ended")("showList", ctx.endedShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_1__.ShowsStatusGroupComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: ["#shows-status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  height: 100%;\n  overflow-y: auto;\n}\n\n.no-shows[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  color: #33333360;\n  margin-top: 5rem;\n}\n\n.no-shows[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n}\n\n.no-shows[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxjQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0FBQUoiLCJmaWxlIjoic2hvd3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93cy1zdGF0dXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLm5vLXNob3dzIHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgY29sb3I6ICMzMzMzMzM2MDtcbiAgbWFyZ2luLXRvcDogNXJlbTtcblxuICBwIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIGEge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 9515:
/*!*************************************************************************************!*\
  !*** ./src/app/shows/shows-list/shows-status-group/shows-status-group.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsStatusGroupComponent": () => (/* binding */ ShowsStatusGroupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/poster-strip/poster-strip.component */ 5894);




function ShowsStatusGroupComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = function (a1) { return ["/shows", a1]; };
function ShowsStatusGroupComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "vestibule-poster-strip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, show_r2.imdb_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("palette", show_r2.palette_list);
} }
class ShowsStatusGroupComponent {
}
ShowsStatusGroupComponent.ɵfac = function ShowsStatusGroupComponent_Factory(t) { return new (t || ShowsStatusGroupComponent)(); };
ShowsStatusGroupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShowsStatusGroupComponent, selectors: [["vestibule-shows-status-group"]], inputs: { title: "title", showList: "showList" }, decls: 4, vars: 2, consts: [[1, "show-list-group"], ["class", "show-list-status", 4, "ngIf"], [1, "show-list"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "show-list-status"], [3, "routerLink"], [1, "show"], [1, "show-title"], [3, "palette"]], template: function ShowsStatusGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ShowsStatusGroupComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ShowsStatusGroupComponent_a_3_Template, 5, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.showList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _shared_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_0__.PosterStripComponent], styles: [".show-list-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.show-list-status[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  margin-bottom: 1rem;\n}\n\n.show-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.show[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin: 0 1rem 2rem 0;\n  width: 20rem;\n}\n\n.show[_ngcontent-%COMP%]:hover   .poster-strip[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n\n.show[_ngcontent-%COMP%]:hover   .show-title[_ngcontent-%COMP%] {\n  transform: translate(8px, 0);\n}\n\n.show-title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 3px;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3dzLXN0YXR1cy1ncm91cC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsY0NTVztFRFJYLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0UsNEJBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6InNob3dzLXN0YXR1cy1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG4uc2hvdy1saXN0LWdyb3VwIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLnNob3ctbGlzdC1zdGF0dXMge1xuICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zaG93LWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5zaG93IHtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgbWFyZ2luOiAwIDFyZW0gMnJlbSAwO1xuICAgIHdpZHRoOiAyMHJlbTtcblxuICAmOmhvdmVyIC5wb3N0ZXItc3RyaXAge1xuICAgIHdpZHRoOiA2cmVtO1xuICB9XG5cbiAgJjpob3ZlciAuc2hvdy10aXRsZXtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIDApO1xuICB9XG59XG5cbi5zaG93LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });


/***/ }),

/***/ 5508:
/*!***********************************************!*\
  !*** ./src/app/shows/shows-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsRoutingModule": () => (/* binding */ ShowsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows-list/shows-list.component */ 8431);
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-details/show-details.component */ 400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    { path: 'shows', component: _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_0__.ShowsListComponent },
    { path: 'shows/:imdb_id', component: _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_1__.ShowDetailsComponent },
];
class ShowsRoutingModule {
}
ShowsRoutingModule.ɵfac = function ShowsRoutingModule_Factory(t) { return new (t || ShowsRoutingModule)(); };
ShowsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShowsRoutingModule });
ShowsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShowsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 2023:
/*!***************************************!*\
  !*** ./src/app/shows/shows.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsModule": () => (/* binding */ ShowsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _shows_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows-routing.module */ 5508);
/* harmony import */ var _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shows-list/shows-list.component */ 8431);
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-details/show-details.component */ 400);
/* harmony import */ var _show_details_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-details/show-details-tab/show-details-tab.component */ 3306);
/* harmony import */ var _show_details_show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-details/show-details-tabs/show-details-tabs.component */ 6541);
/* harmony import */ var _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-profile/show-profile.component */ 6234);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-torrents/show-torrents.component */ 6762);
/* harmony import */ var _show_torrents_show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-torrents/show-torrents-section/show-torrents-section.component */ 5942);
/* harmony import */ var _shows_list_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shows-list/shows-status-group/shows-status-group.component */ 9515);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);














class ShowsModule {
}
ShowsModule.ɵfac = function ShowsModule_Factory(t) { return new (t || ShowsModule)(); };
ShowsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: ShowsModule });
ShowsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _shows_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](ShowsModule, { declarations: [_shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_1__.ShowsListComponent,
        _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_2__.ShowDetailsComponent,
        _show_details_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_3__.ShowDetailsTabComponent,
        _show_details_show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_4__.ShowDetailsTabsComponent,
        _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_5__.ShowProfileComponent,
        _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_7__.ShowTorrentsComponent,
        _show_torrents_show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_8__.ShowTorrentsSectionComponent,
        _shows_list_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_9__.ShowsStatusGroupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
        _shows_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 3722:
/*!****************************************!*\
  !*** ./src/app/shows/shows.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsService": () => (/* binding */ ShowsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class ShowsService {
    constructor(http) {
        this.http = http;
    }
    listShows() {
        return this.http.get('api/shows/list');
    }
    listShowsByUpcomingEpisodes() {
        return this.http.get('api/shows/upcoming_episodes');
    }
    showDetails(imdb_id) {
        return this.http.get(`api/shows/${imdb_id}`);
    }
    listShowTorrents(imdb_id) {
        return this.http.get(`api/shows/torrents/${imdb_id}`);
    }
    updateShowProfile(imdb_id, profile) {
        return this.http.put(`api/shows/update_profile/${imdb_id}`, profile);
    }
    updateShowSettings(imdb_id, settings) {
        return this.http.put(`api/shows/${imdb_id}`, settings);
    }
    updateShowInfo(imdb_id) {
        return this.http.get(`api/shows/update_info/${imdb_id}`);
    }
    findShowTorrents(imdb_id) {
        return this.http.get(`api/shows/find_torrents/${imdb_id}`);
    }
    unsubscribeFromShow(imdb_id) {
        return this.http.delete(`api/shows/${imdb_id}`);
    }
    subscribeToShow(imdb_id) {
        return this.http.post(`api/shows/subscribe`, { imdb_id });
    }
    searchShowByTitle(searchTerm) {
        return this.http.get(`api/shows/search/${searchTerm}`);
    }
    enrichShowInfo(imdb_id) {
        return this.http.get(`api/shows/enrich/${imdb_id}`);
    }
    findPreviewShowTorrents(imdb_id) {
        return this.http.get(`api/shows/find_preview_show_torrents/${imdb_id}`);
    }
    updateShowTorrents(imdb_id, updateTorrents) {
        return this.http.put(`api/shows/update_torrents/${imdb_id}`, updateTorrents);
    }
    downloadEpisodeBestMatch(imdb_id, downloadEpisodeBestMatch) {
        return this.http.put(`api/shows/download_current_best/${imdb_id}`, downloadEpisodeBestMatch);
    }
}
ShowsService.ɵfac = function ShowsService_Factory(t) { return new (t || ShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ShowsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowsService, factory: ShowsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 853:
/*!*******************************************************************!*\
  !*** ./src/app/torrents/movie-torrent/movie-torrent.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieTorrentComponent": () => (/* binding */ MovieTorrentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _shared_animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/animations/fadeInOut */ 196);
/* harmony import */ var _torrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../torrent */ 3150);
/* harmony import */ var _torrents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../torrents.service */ 6009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4364);






function MovieTorrentComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "svg", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "path", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("uploading", ctx_r1.uploading);
} }
function MovieTorrentComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "circle", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("stroke-dashoffset", ctx_r3.strokeDashoffset);
} }
const _c0 = function (a0) { return { "not-match": a0 }; };
function MovieTorrentComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MovieTorrentComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MovieTorrentComponent_div_0_ng_container_2_Template, 4, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MovieTorrentComponent_div_0_ng_template_3_Template, 2, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r0.primaryColor)("opacity", ctx_r0.matchIndicationOpacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.downloading)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c0, !ctx_r0.torrent.profile_match));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.torrent.quality);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.torrent.source_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.torrent.feed);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.torrent.publication_time);
} }
const circleLength = 62.83;
class MovieTorrentComponent {
    constructor(torrentsService) {
        this.torrentsService = torrentsService;
        this.torrentDownloadedStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.downloading = false;
        this.loading = false;
        this.uploading = false;
    }
    set movieTorrent(torrent) {
        this.torrent = torrent;
        this.matchIndicationOpacity = torrent.profile_match ? 1 : torrent.profile_match_score / 300;
        this.downloading = torrent.download_status === _torrent__WEBPACK_IMPORTED_MODULE_1__.TorrentDownloadStatus.DOWNLOADING;
        this.uploading = torrent.download_status === _torrent__WEBPACK_IMPORTED_MODULE_1__.TorrentDownloadStatus.READY;
        this.strokeDashoffset = circleLength - torrent.percent_done / 100 * circleLength;
    }
    download() {
        if (this.loading || this.downloading) {
            return;
        }
        this.loading = true;
        this.torrentsService.downloadMovieTorrent(this.torrent.id).subscribe(result => {
            this.loading = false;
            this.torrentDownloadedStarted.emit();
            if (result.successful) {
                this.downloading = true;
                this.movieTorrent = result.torrent;
            }
        });
    }
}
MovieTorrentComponent.ɵfac = function MovieTorrentComponent_Factory(t) { return new (t || MovieTorrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_torrents_service__WEBPACK_IMPORTED_MODULE_2__.TorrentsService)); };
MovieTorrentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MovieTorrentComponent, selectors: [["vestibule-movie-torrent"]], inputs: { movieTorrent: "movieTorrent", primaryColor: "primaryColor" }, outputs: { torrentDownloadedStarted: "torrentDownloadedStarted" }, decls: 1, vars: 1, consts: [["class", "torrent", 4, "ngIf"], [1, "torrent"], [1, "download-action", 3, "click"], [4, "ngIf", "ngIfElse"], ["downloadProgress", ""], [1, "main", 3, "ngClass"], [1, "tags"], [1, "tag"], [1, "sources"], [1, "source"], [1, "bullet"], [1, "publication-time"], ["height", "1.6rem", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 166.59 210.63"], ["d", "M144.25,110.66l-46.06,46.06V5.45c0-3.01-2.44-5.45-5.45-5.45h-18.44c-3.01,0-5.45,2.44-5.45,5.45V156.72L22.35,110.22c-2.13-2.13-5.58-2.13-7.71,0L1.6,123.26c-2.13,2.13-2.13,5.58,0,7.71l78.06,78.06c2.13,2.13,5.58,2.13,7.71,0l77.62-77.62c2.13-2.13,2.13-5.58,0-7.71l-13.04-13.04c-2.13-2.13-5.58-2.13-7.71,0Z", 1, "cls-1"], ["width", "32", "height", "32", 1, "progress-ring"], ["stroke", "white", "stroke-width", "3", "fill", "transparent", "r", "10", "cx", "16", "cy", "16", 1, "progress-ring__circle"]], template: function MovieTorrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MovieTorrentComponent_div_0_Template, 18, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.torrent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass], styles: [".torrent[_ngcontent-%COMP%] {\n  width: 24rem;\n  height: 5rem;\n  border-radius: 0.2rem;\n  background-color: #c9cac6;\n  margin: 0 1rem 1rem 0;\n  display: flex;\n  cursor: default;\n}\n.torrent[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%] {\n  background-color: #206f38;\n  width: 3rem;\n  margin: 1rem 0 1rem 1rem;\n  border-radius: 0.2rem;\n  border: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n.torrent[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #c9cac6;\n}\n.torrent[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  stroke: #c9cac6;\n  stroke-dasharray: 62.83 62.83;\n  transition: stroke-dashoffset 0.35s;\n  transform: rotate(-90deg);\n  transform-origin: 50% 50%;\n}\n.torrent[_ngcontent-%COMP%]   .download-action[_ngcontent-%COMP%]   svg.uploading[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.torrent[_ngcontent-%COMP%]   .match-indication[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 100%;\n}\n.torrent[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  padding: 1rem;\n  transition: 0.3s;\n}\n.torrent[_ngcontent-%COMP%]   .main.not-match[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.torrent[_ngcontent-%COMP%]:hover   .main[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.torrent[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  color: #333;\n  border: 1px solid;\n  border-radius: 0.2rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.2rem 0.5rem 0.25rem;\n  line-height: 1rem;\n  font-weight: 300;\n  margin-right: 1rem;\n}\n.torrent[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%] {\n  margin-top: 0.3rem;\n  color: #747470;\n}\n.torrent[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%], .torrent[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   .publication-time[_ngcontent-%COMP%], .torrent[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.torrent[_ngcontent-%COMP%]   .sources[_ngcontent-%COMP%]   .publication-time[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-left: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vdmllLXRvcnJlbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQURGO0FBR0U7RUFDRSx5QkNKZTtFREtmLFdBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKO0FBR0k7RUFDRSxhQUFBO0FBRE47QUFHTTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQURSO0FBSU07RUFDRSx5QkFBQTtBQUZSO0FBT0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUxKO0FBUUU7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVFJO0VBQ0UsWUFBQTtBQU5OO0FBV0k7RUFDRSxVQUFBO0FBVE47QUFhRTtFQUNFLFdDeENJO0VEeUNKLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFYSjtBQWNFO0VBQ0Usa0JBQUE7RUFDQSxjQ3ZEYztBRDJDbEI7QUFjSTtFQUNFLGNBQUE7QUFaTjtBQWVJO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQWJOIiwiZmlsZSI6Im1vdmllLXRvcnJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLnRvcnJlbnQge1xuICB3aWR0aDogMjRyZW07XG4gIGhlaWdodDogNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzljYWM2O1xuICBtYXJnaW46IDAgMXJlbSAxcmVtIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogZGVmYXVsdDtcblxuICAuZG93bmxvYWQtYWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUtdHJ1ZS1ob3ZlcjtcbiAgICB3aWR0aDogM3JlbTtcbiAgICBtYXJnaW46IDFyZW0gMCAxcmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgc3ZnIHtcbiAgICAgIGZpbGw6ICNjOWNhYzY7XG5cbiAgICAgIGNpcmNsZSB7XG4gICAgICAgIHN0cm9rZTogI2M5Y2FjNjtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNjIuODMgNjIuODM7XG4gICAgICAgIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuMzVzO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgICAgfVxuXG4gICAgICAmLnVwbG9hZGluZyB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdGNoLWluZGljYXRpb24ge1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLm1haW4ge1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgdHJhbnNpdGlvbjogMC4zcztcblxuICAgICYubm90LW1hdGNoIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICAubWFpbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC50YWcge1xuICAgIGNvbG9yOiAkYmxhY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtIDAuMjVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICAuc291cmNlcyB7XG4gICAgbWFyZ2luLXRvcDogMC4zcmVtO1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuXG4gICAgLnNvdXJjZSwgLnB1YmxpY2F0aW9uLXRpbWUsIHNwYW4ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLnB1YmxpY2F0aW9uLXRpbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIH1cbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtbGlnaHQtMjogI2QyZDNjNzc1O1xuJGxpZ2h0LWdyYXk6ICNjOWNhYzY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"], data: { animation: [_shared_animations_fadeInOut__WEBPACK_IMPORTED_MODULE_0__.fadeInOutAnimation] } });


/***/ }),

/***/ 3150:
/*!*************************************!*\
  !*** ./src/app/torrents/torrent.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TorrentDownloadStatus": () => (/* binding */ TorrentDownloadStatus)
/* harmony export */ });
class TorrentDownloadStatus {
}
TorrentDownloadStatus.NEVER_STARTED = 'Never Started';
TorrentDownloadStatus.DOWNLOADING = 'Downloading';
TorrentDownloadStatus.READY = 'Ready';
TorrentDownloadStatus.STOPPED = 'Stopped';


/***/ }),

/***/ 53:
/*!*****************************************************!*\
  !*** ./src/app/torrents/torrents-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TorrentsRoutingModule": () => (/* binding */ TorrentsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class TorrentsRoutingModule {
}
TorrentsRoutingModule.ɵfac = function TorrentsRoutingModule_Factory(t) { return new (t || TorrentsRoutingModule)(); };
TorrentsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TorrentsRoutingModule });
TorrentsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TorrentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2792:
/*!*********************************************!*\
  !*** ./src/app/torrents/torrents.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TorrentsModule": () => (/* binding */ TorrentsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _torrents_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./torrents-routing.module */ 53);
/* harmony import */ var _movie_torrent_movie_torrent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-torrent/movie-torrent.component */ 853);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class TorrentsModule {
}
TorrentsModule.ɵfac = function TorrentsModule_Factory(t) { return new (t || TorrentsModule)(); };
TorrentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TorrentsModule });
TorrentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _torrents_routing_module__WEBPACK_IMPORTED_MODULE_0__.TorrentsRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TorrentsModule, { declarations: [_movie_torrent_movie_torrent_component__WEBPACK_IMPORTED_MODULE_1__.MovieTorrentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _torrents_routing_module__WEBPACK_IMPORTED_MODULE_0__.TorrentsRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule], exports: [_movie_torrent_movie_torrent_component__WEBPACK_IMPORTED_MODULE_1__.MovieTorrentComponent] }); })();


/***/ }),

/***/ 6009:
/*!**********************************************!*\
  !*** ./src/app/torrents/torrents.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TorrentsService": () => (/* binding */ TorrentsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class TorrentsService {
    constructor(http) {
        this.http = http;
    }
    downloadTorrent(torrentID) {
        return this.http.get(`api/torrents/download/${torrentID}`);
    }
    downloadMovieTorrent(torrentID) {
        return this.http.get(`api/torrents/download-movie/${torrentID}`);
    }
}
TorrentsService.ɵfac = function TorrentsService_Factory(t) { return new (t || TorrentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TorrentsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TorrentsService, factory: TorrentsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map