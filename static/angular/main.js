(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+fDI":
/*!*******************************************************************!*\
  !*** ./src/app/shared/loading-button/loading-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: LoadingButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonComponent", function() { return LoadingButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class LoadingButtonComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingButtonComponent.ɵfac = function LoadingButtonComponent_Factory(t) { return new (t || LoadingButtonComponent)(); };
LoadingButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingButtonComponent, selectors: [["vestibule-loading-button"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "button-title"]], template: function LoadingButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@keyframes flash_border {\n  0% {\n    border-color: #58cd7c;\n  }\n  50% {\n    border-color: #206f38;\n  }\n  100% {\n    border-color: #58cd7c;\n  }\n}\n[_nghost-%COMP%]     .action-message {\n  display: inline-block;\n  margin-left: 10px;\n  font-size: 0.9em;\n  color: #a4a5a0;\n}\n[_nghost-%COMP%]     button {\n  margin-bottom: 5px;\n  font-size: 1.1em;\n  padding-bottom: 5px;\n  border: none;\n  background: none;\n  transition: 0.2s;\n  cursor: pointer;\n  border-bottom: solid rgba(0, 0, 0, 0) 3px;\n}\n[_nghost-%COMP%]     button:hover {\n  color: #206f38;\n}\n[_nghost-%COMP%]     button.disabled {\n  color: #a4a5a0;\n  cursor: auto;\n}\n[_nghost-%COMP%]     button.loading {\n  border-bottom: solid #3f9359 3px;\n  color: #206f38;\n  margin-bottom: 15px;\n  animation-name: flash_border;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n[_nghost-%COMP%]     button.error {\n  color: #AF4F68;\n}\n[_nghost-%COMP%]     button.danger-zone-button:hover {\n  color: #972945;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRTtJQUNFLHFCQUFBO0VBREY7RUFHQTtJQUNFLHFCQ0RlO0VEQWpCO0VBR0E7SUFDRSxxQkFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDSlc7QURFYjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUNBQUE7QUFGRjtBQUlFO0VBQ0UsY0MxQmU7QUR3Qm5CO0FBS0U7RUFDRSxjQ3RCUztFRHVCVCxZQUFBO0FBSEo7QUFNRTtFQUNFLGdDQUFBO0VBQ0EsY0NwQ2U7RURxQ2YsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQUpKO0FBT0U7RUFDRSxjQzNDVTtBRHNDZDtBQVNJO0VBQ0UsY0MvQ2M7QUR3Q3BCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvYWRpbmctYnV0dG9uL2xvYWRpbmctYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbkBrZXlmcmFtZXMgZmxhc2hfYm9yZGVyIHtcbiAgMCUge1xuICAgIGJvcmRlci1jb2xvcjogIzU4Y2Q3YztcbiAgfVxuICA1MCUge1xuICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNThjZDdjO1xuICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWN0aW9uLW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCBidXR0b24ge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCByZ2JhKDAsIDAsIDAsIDApIDNweDtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG5cbiAgJi5sb2FkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkdmFsdWUtdHJ1ZSAzcHg7XG4gICAgY29sb3I6ICR2YWx1ZS10cnVlLWhvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoX2JvcmRlcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gIH1cblxuICAmLmRhbmdlci16b25lLWJ1dHRvbiB7XG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHZhbHVlLWZhbHNlLWhvdmVyO1xuICAgIH1cbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-loading-button',
                templateUrl: './loading-button.component.html',
                styleUrls: ['./loading-button.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/cVA":
/*!*********************************************************!*\
  !*** ./src/app/panel/services-status/service-status.ts ***!
  \*********************************************************/
/*! exports provided: INITIAL_STATUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATUS", function() { return INITIAL_STATUS; });
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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Ben/PycharmProjects/VestibuleServer/angular/vestibule/src/main.ts */"zUnb");


/***/ }),

/***/ "1srG":
/*!****************************************************************!*\
  !*** ./src/app/shared/loading-button/loading-button-status.ts ***!
  \****************************************************************/
/*! exports provided: LoadingButtonStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingButtonStatus", function() { return LoadingButtonStatus; });
class LoadingButtonStatus {
}
LoadingButtonStatus.idle = '';
LoadingButtonStatus.loading = 'loading';
LoadingButtonStatus.error = 'error';
LoadingButtonStatus.confirm = 'confirm';


/***/ }),

/***/ "203w":
/*!****************************************************************!*\
  !*** ./src/app/shows/show-torrents/show-torrents.component.ts ***!
  \****************************************************************/
/*! exports provided: ShowTorrentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTorrentsComponent", function() { return ShowTorrentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shows.service */ "9gd4");
/* harmony import */ var _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../panel/services-status/services-status.service */ "4Kh+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show-torrents-section/show-torrents-section.component */ "zwgI");






function ShowTorrentsComponent_ng_container_0_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_div_3_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const episode_r5 = ctx.$implicit; const season_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.chooseEpisode(season_r3, episode_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const episode_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-episode", episode_r5.id === ctx_r4.selectedEpisode.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](episode_r5.number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r4.episodeStatusBulletColor(episode_r5));
} }
function ShowTorrentsComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowTorrentsComponent_ng_container_0_div_3_div_2_Template, 5, 5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const season_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected-season", season_r3.id === ctx_r1.selectedSeason.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", season_r3.episodes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](season_r3.title);
} }
function ShowTorrentsComponent_ng_container_0_section_4_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No torrents found for this Episode yet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ShowTorrentsComponent_ng_container_0_section_4_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vestibule-show-torrents-section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vestibule-show-torrents-section", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vestibule-show-torrents-section", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "vestibule-show-torrents-section", 30);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Profile Matching Episode Torrents")("torrents", ctx_r11.selectedEpisode.matching_torrents)("episode", ctx_r11.selectedEpisode)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("defaultOpen", true)("matchingTorrents", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Profile Matching Season Torrents")("torrents", ctx_r11.selectedSeason.season_matching_torrents)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("defaultOpen", true)("matchingTorrents", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Episode Torrents (Not Matching Profile)")("torrents", ctx_r11.selectedEpisode.unmatching_torrents)("episode", ctx_r11.selectedEpisode)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("matchingTorrents", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Season Torrents (Not Matching Profile)")("torrents", ctx_r11.selectedSeason.season_unmatching_torrents)("season", ctx_r11.selectedSeason)("show", ctx_r11.show)("matchingTorrents", false);
} }
const _c0 = function (a0) { return { disabled: a0 }; };
function ShowTorrentsComponent_ng_container_0_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A0 \u2014 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u00A0 \u2014 \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.updateEpisodeDownloadStatus(ctx_r12.selectedEpisode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.updateSeasonDownloadStatus(ctx_r14.selectedSeason); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentsComponent_ng_container_0_section_4_Template_div_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.downloadEpisodeBestMatch(ctx_r15.selectedEpisode); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Download Best Match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ShowTorrentsComponent_ng_container_0_section_4_p_31_Template, 2, 0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, ShowTorrentsComponent_ng_container_0_section_4_ng_template_32_Template, 4, 24, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedEpisode.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedSeason.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("E", ctx_r2.selectedEpisode.number, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedEpisode.air_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx_r2.episodeStatusBulletColor(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r2.episodeStatusBulletColor(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.episodeStatusText(ctx_r2.selectedEpisode));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.selectedEpisode.should_download ? "Skip" : "Un-skip", " this Episode");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.selectedSeason.should_download ? "Skip" : "Un-skip", " this Season");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, !ctx_r2.canDownload || ctx_r2.showNoTorrentsMessage()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.showNoTorrentsMessage())("ngIfElse", _r10);
} }
function ShowTorrentsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowTorrentsComponent_ng_container_0_div_3_Template, 6, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowTorrentsComponent_ng_container_0_section_4_Template, 34, 16, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.seasons.seasons);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedEpisode);
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
ShowTorrentsComponent.ɵfac = function ShowTorrentsComponent_Factory(t) { return new (t || ShowTorrentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_2__["ServicesStatusService"])); };
ShowTorrentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowTorrentsComponent, selectors: [["vestibule-show-torrents"]], inputs: { show: "show", showUpdated$: "showUpdated$" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "show-torrents-cont"], ["id", "show-seasons-menu"], ["class", "season-cont", 3, "selected-season", 4, "ngFor", "ngForOf"], ["id", "episode-details-cont", 4, "ngIf"], [1, "season-cont"], [1, "season-episodes-list"], ["class", "episode-block-cont", 3, "selected-episode", "click", 4, "ngFor", "ngForOf"], [1, "season-title-cont"], [1, "season-title"], [1, "episode-block-cont", 3, "click"], [1, "episode-block-number"], [1, "episode-block"], ["id", "episode-details-cont"], [1, "episode-details-header"], [1, "episode-details-title"], [1, "episode-details-subtitle-info"], [1, "episode-download-status-cont"], [1, "episode-download-status"], [1, "episode-status-bullet"], [1, "episode-download-status-actions"], [1, "episode-download-status-action", "skip-action", 3, "click"], [1, "episode-download-status-action", "download-action", 3, "ngClass", "click"], [1, "episode-torrents-list"], ["class", "no-torrents-found-message", 4, "ngIf", "ngIfElse"], ["hasTorrents", ""], [1, "no-torrents-found-message"], [3, "title", "torrents", "episode", "season", "show", "defaultOpen", "matchingTorrents"], [3, "title", "torrents", "season", "show", "defaultOpen", "matchingTorrents"], [3, "title", "torrents", "episode", "season", "show", "matchingTorrents"], [3, "title", "torrents", "season", "show", "matchingTorrents"]], template: function ShowTorrentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowTorrentsComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.seasons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_4__["ShowTorrentsSectionComponent"]], styles: ["#show-torrents-cont[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#show-seasons-menu[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  max-height: calc(100vh - 11rem);\n  overflow-y: scroll;\n}\n\n#show-seasons-menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.season-cont[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem 0;\n  position: relative;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: row;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-title-cont[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2rem;\n  align-items: flex-start;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-title-cont[_ngcontent-%COMP%]   .season-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.9em;\n  white-space: nowrap;\n  color: #a4a5a0;\n  transition: 0.3s;\n  transform: rotate(180deg);\n  width: 100%;\n  writing-mode: vertical-lr;\n  margin-right: 0.5rem;\n  padding-bottom: 0.6rem;\n}\n\n.season-cont[_ngcontent-%COMP%]:hover   .season-title[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont.selected-episode[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont.selected-episode[_ngcontent-%COMP%]   .episode-block[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:first-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0.3rem 0.3rem 0 0;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:last-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0 0 0.3rem 0.3rem;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:only-child {\n  width: 100%;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:only-child   .episode-block[_ngcontent-%COMP%] {\n  border-radius: 0.3rem;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  width: 1.5rem;\n  padding-right: 0.2rem;\n  text-align: left;\n  font-size: 0.9em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block-number[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]   .episode-block[_ngcontent-%COMP%] {\n  height: 1.8rem;\n  width: 0.6rem;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover   .episode-block-number[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.season-cont[_ngcontent-%COMP%]   .season-episodes-list[_ngcontent-%COMP%]   .episode-block-cont[_ngcontent-%COMP%]:hover   .episode-block[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#episode-details-cont[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  overflow-y: scroll;\n  height: calc(100vh - 20rem);\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .no-torrents-found-message[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  font-weight: 500;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-subtitle-info[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  margin-top: 3px;\n  font-weight: 100;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-subtitle-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: inherit;\n  color: inherit;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-details-header[_ngcontent-%COMP%]   .episode-details-download-status[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  display: inline-block;\n  margin-right: 8px;\n  border: 2px solid;\n  padding: 1px 5px;\n  font-weight: 500;\n}\n\n#episode-details-cont[_ngcontent-%COMP%]   .episode-torrents-list[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1rem 0;\n  background-color: rgba(164, 165, 160, 0.2);\n  height: 1.8rem;\n  border-radius: 0.9rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 0.9em;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%] {\n  background-color: rgba(164, 165, 160, 0.2);\n  color: inherit;\n  padding: 0.25rem 1rem 0.25rem 0.5rem;\n  border-radius: 0.9rem 0 0 0.9rem;\n  font-size: inherit;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n  font-weight: 500;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status[_ngcontent-%COMP%]   .episode-status-bullet[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n  height: 10px;\n  width: 10px;\n  display: inline-block;\n  border-radius: 50%;\n  margin-right: 6px;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%] {\n  padding: 0.25rem 1rem;\n  font-size: inherit;\n  transition: 0.2s;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.9rem 0.9rem 0;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.skip-action[_ngcontent-%COMP%]:hover {\n  background-color: #edbf3b;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.download-action[_ngcontent-%COMP%]:hover {\n  background-color: #50ad6f;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.disabled[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\n\n.episode-download-status-cont[_ngcontent-%COMP%]   .episode-download-status-actions[_ngcontent-%COMP%]   .episode-download-status-action.disabled[_ngcontent-%COMP%]:hover {\n  cursor: default;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvdy10b3JyZW50cy9zaG93LXRvcnJlbnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQVFFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQU5KOztBQVFJO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBTk47O0FBV0k7RUFDRSxjQUFBO0FBVE47O0FBYUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFYSjs7QUFhSTtFQUNFLGFBQUE7QUFYTjs7QUFjUTtFQUNFLGNBQUE7QUFaVjs7QUFjUTtFQUNFLFVBQUE7QUFaVjs7QUFpQlE7RUFDRSxnQ0FBQTtBQWZWOztBQW9CUTtFQUNFLGdDQUFBO0FBbEJWOztBQXNCTTtFQUNFLFdBQUE7QUFwQlI7O0FBc0JRO0VBQ0UscUJBQUE7QUFwQlY7O0FBd0JNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQXRCUjs7QUF3QlE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF0QlY7O0FBMEJNO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUF4QlI7O0FBMkJNO0VBQ0UsZUFBQTtBQXpCUjs7QUEyQlE7RUFDRSxjQUFBO0FBekJWOztBQTJCUTtFQUNFLFVBQUE7QUF6QlY7O0FBZ0NBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBN0JGOztBQStCRTtFQUNFLGNDckhTO0FEd0ZiOztBQWlDSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUEvQk47O0FBa0NJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFoQ047O0FBa0NNO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FBaENSOztBQW9DSTtFQUNJLGNDMUlLO0VEMklMLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFsQ1I7O0FBcUNFO0VBQ0UsZ0JBQUE7QUFuQ0o7O0FBdUNBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSwwQ0N4SnVCO0VEeUp2QixjQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtBQXBDRjs7QUFzQ0U7RUFDRSwwQ0MvSnFCO0VEZ0tyQixjQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBcENKOztBQXNDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBcENOOztBQXVDSTtFQUNFLHlCQzlLTztFRCtLUCxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXJDTjs7QUF5Q0U7RUFDRSxhQUFBO0FBdkNKOztBQXlDSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXZDTjs7QUF5Q007RUFDRSxlQUFBO0FBdkNSOztBQTBDTTtFQUNFLGdDQUFBO0FBeENSOztBQTRDUTtFQUNFLHlCQ3RNSDtBRDRKUDs7QUErQ1E7RUFDRSx5QkN6Tk07QUQ0S2hCOztBQWlETTtFQUNFLFlBQUE7QUEvQ1I7O0FBaURRO0VBQ0UsZUFBQTtFQUNBLDZCQUFBO0FBL0NWIiwiZmlsZSI6InNyYy9hcHAvc2hvd3Mvc2hvdy10b3JyZW50cy9zaG93LXRvcnJlbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbiNzaG93LXRvcnJlbnRzLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jc2hvdy1zZWFzb25zLW1lbnUge1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTFyZW0pO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLnNlYXNvbi1jb250IHtcbiAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAuc2VsZWN0ZWQtc2Vhc29uIHtcblxuICB9XG5cbiAgLnNlYXNvbi10aXRsZS1jb250IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAycmVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gICAgLnNlYXNvbi10aXRsZSB7XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBjb2xvcjogI2E0YTVhMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC42cmVtO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIC5zZWFzb24tdGl0bGUge1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgfVxuICB9XG5cbiAgLnNlYXNvbi1lcGlzb2Rlcy1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAuZXBpc29kZS1ibG9jay1jb250IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICYuc2VsZWN0ZWQtZXBpc29kZSB7XG4gICAgICAgIC5lcGlzb2RlLWJsb2NrLW51bWJlciB7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmVwaXNvZGUtYmxvY2sge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIC5lcGlzb2RlLWJsb2NrIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjNyZW0gMC4zcmVtIDAgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAuZXBpc29kZS1ibG9jayB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDAuM3JlbSAwLjNyZW07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJjpvbmx5LWNoaWxkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmVwaXNvZGUtYmxvY2sge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZXBpc29kZS1ibG9jay1udW1iZXIge1xuICAgICAgICBjb2xvcjogI2E0YTVhMDtcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC4ycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmVwaXNvZGUtYmxvY2sge1xuICAgICAgICBoZWlnaHQ6IDEuOHJlbTtcbiAgICAgICAgd2lkdGg6IDAuNnJlbTtcbiAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIC5lcGlzb2RlLWJsb2NrLW51bWJlciB7XG4gICAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIH1cbiAgICAgICAgLmVwaXNvZGUtYmxvY2sge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuI2VwaXNvZGUtZGV0YWlscy1jb250IHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjByZW0pO1xuXG4gIC5uby10b3JyZW50cy1mb3VuZC1tZXNzYWdlIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gIH1cblxuICAuZXBpc29kZS1kZXRhaWxzLWhlYWRlciB7XG4gICAgLmVwaXNvZGUtZGV0YWlscy10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAuZXBpc29kZS1kZXRhaWxzLXN1YnRpdGxlLWluZm8ge1xuICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVwaXNvZGUtZGV0YWlscy1kb3dubG9hZC1zdGF0dXMge1xuICAgICAgICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkO1xuICAgICAgICBwYWRkaW5nOiAxcHggNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgfVxuICAuZXBpc29kZS10b3JyZW50cy1saXN0IHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG5cbi5lcGlzb2RlLWRvd25sb2FkLXN0YXR1cy1jb250IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxcmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICR1bnNlbGVjdGVkLXRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDEuOHJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC45cmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG5cbiAgLmVwaXNvZGUtZG93bmxvYWQtc3RhdHVzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5zZWxlY3RlZC10cmFuc3BhcmVudDtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW0gMC4yNXJlbSAwLjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC45cmVtIDAgMCAwLjlyZW07XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLmVwaXNvZGUtc3RhdHVzLWJ1bGxldCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgfVxuICB9XG5cbiAgLmVwaXNvZGUtZG93bmxvYWQtc3RhdHVzLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZXBpc29kZS1kb3dubG9hZC1zdGF0dXMtYWN0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgIHRyYW5zaXRpb246IDAuMnM7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMC45cmVtIDAuOXJlbSAwO1xuICAgICAgfVxuXG4gICAgICAmLnNraXAtYWN0aW9uIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHNraXA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5kb3dubG9hZC1hY3Rpb24ge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9ycmVudC1ncmVlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC4zO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowTorrentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-torrents',
                templateUrl: './show-torrents.component.html',
                styleUrls: ['./show-torrents.component.scss']
            }]
    }], function () { return [{ type: _shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"] }, { type: _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_2__["ServicesStatusService"] }]; }, { show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showUpdated$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "26FK":
/*!*************************************************************************************!*\
  !*** ./src/app/shows/show-details/show-details-tabs/show-details-tabs.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowDetailsTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsTabsComponent", function() { return ShowDetailsTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-details-tab/show-details-tab.component */ "XkST");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ShowDetailsTabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsTabsComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const tab_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tab_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.title, " ");
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
ShowDetailsTabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDetailsTabsComponent, selectors: [["vestibule-show-details-tabs"]], contentQueries: function ShowDetailsTabsComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_1__["ShowDetailsTabComponent"], false);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.tabs = _t);
    } }, ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[1, "show-details-tabs"], ["class", "show-details-tab-title", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "show-details-tab-title", 3, "click"]], template: function ShowDetailsTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowDetailsTabsComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".show-details-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 1rem 0 2rem;\n}\n\n.show-details-tab-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin-right: 1.5rem;\n  color: #a4a5a0;\n  transition: 0.2s;\n  border-bottom: 3px solid;\n  padding-bottom: 5px;\n}\n\n.show-details-tab-title.active[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.show-details-tab-title[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #333333;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvdy1kZXRhaWxzL3Nob3ctZGV0YWlscy10YWJzL3Nob3ctZGV0YWlscy10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUVFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBSUU7RUFDRSxjQUFBO0FBRko7O0FBS0U7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvc2hvd3Mvc2hvdy1kZXRhaWxzL3Nob3ctZGV0YWlscy10YWJzL3Nob3ctZGV0YWlscy10YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5zaG93LWRldGFpbHMtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMXJlbSAwIDJyZW07XG59XG5cbi5zaG93LWRldGFpbHMtdGFiLXRpdGxlIHtcblxuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgY29sb3I6ICNhNGE1YTA7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcblxuICAmLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cblxuICAmOmhvdmVye1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogIzMzMzMzMztcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsTabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-details-tabs',
                templateUrl: './show-details-tabs.component.html',
                styleUrls: ['./show-details-tabs.component.scss']
            }]
    }], function () { return []; }, { tabs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_1__["ShowDetailsTabComponent"]]
        }] }); })();


/***/ }),

/***/ "4Kh+":
/*!******************************************************************!*\
  !*** ./src/app/panel/services-status/services-status.service.ts ***!
  \******************************************************************/
/*! exports provided: ServicesStatusService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesStatusService", function() { return ServicesStatusService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-status */ "/cVA");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ServicesStatusService {
    constructor(http) {
        this.http = http;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_service_status__WEBPACK_IMPORTED_MODULE_1__["INITIAL_STATUS"]);
        this.updateServicesStatus();
        this.statusUpdater = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(10000000).subscribe(() => this.updateServicesStatus());
    }
    updateServicesStatus() {
        this.getCurrentServicesStatus().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(data => this.status.next(data));
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
ServicesStatusService.ɵfac = function ServicesStatusService_Factory(t) { return new (t || ServicesStatusService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
ServicesStatusService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServicesStatusService, factory: ServicesStatusService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesStatusService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4u/y":
/*!******************************************!*\
  !*** ./src/app/panel/panel.component.ts ***!
  \******************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel-background/panel-background.service */ "FF8+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_status_services_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services-status/services-status.component */ "cFr7");






class PanelComponent {
    constructor(fb, panelBackgroundService, router) {
        this.fb = fb;
        this.panelBackgroundService = panelBackgroundService;
        this.router = router;
        this.isDynamicVisible = false;
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
    }
    onFindSubmit() {
        const control = this.findForm.controls['term'];
        this.router.navigate(['/find/results'], { state: { data: { term: control.value } } });
        control.setValue('');
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__["PanelBackgroundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["vestibule-panel"]], decls: 23, vars: 8, consts: [["id", "panel"], ["id", "vestibule-home"], [1, "acier-title", 3, "routerLink"], ["id", "main-links-box"], [1, "side-panel-links"], [1, "side-panel-link", 3, "routerLink"], ["href", "/", 1, "side-panel-link"], [1, "side-panel-divider"], [1, "side-panel-input-form", 3, "formGroup", "submit"], [3, "routerLink"], ["alt", "Find", "src", "/static/images/find_icon.svg", 1, "side-panel-icon"], ["formControlName", "term", "type", "text", "placeholder", "Find", 1, "side-panel-input"], ["id", "strip"], ["alt", "Vestibule", "crossorigin", "anonymous", 1, "strip-img", 3, "src"], ["alt", "Vestibule", "id", "dynamic-background", "crossorigin", "anonymous", 1, "strip-img", 3, "src"], ["id", "strip-cover"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "VESTIBULE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Feeds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Torrents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PanelComponent_Template_form_submit_14_listener() { return ctx.onFindSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "vestibule-services-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "shows");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.findForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "find/results");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.defaultBackgroundURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visible", ctx.isDynamicVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.backgroundURL, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _services_status_services_status_component__WEBPACK_IMPORTED_MODULE_4__["ServicesStatusComponent"]], styles: ["#panel[_ngcontent-%COMP%] {\n  width: 12.5rem;\n  padding: 3rem 0 0 1.5rem;\n  background-color: #e1e2d666;\n  height: calc(100vh - 2rem);\n  position: fixed;\n  left: 0;\n  top: 0;\n}\n\n#vestibule-home[_ngcontent-%COMP%] {\n  margin-bottom: 3rem;\n}\n\n.acier-title[_ngcontent-%COMP%] {\n  font-family: acier-bat-noir, sans-serif;\n  font-size: 2.5em;\n}\n\n.side-panel-divider[_ngcontent-%COMP%] {\n  background-color: rgba(225, 226, 214, 0.65);\n  height: 3px;\n  width: 85%;\n  margin: 2rem 0;\n  transition: 0.4s;\n}\n\n.side-panel-links[_ngcontent-%COMP%] {\n  padding: 0 0 0 0.5rem;\n}\n\n.side-panel-link[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 5px 0;\n  transition: 0.3s;\n  display: block;\n  color: inherit;\n}\n\n.side-panel-input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.1em;\n  max-width: 10rem;\n  color: #4e4e4e;\n  margin-top: -6px;\n}\n\n.side-panel-input[_ngcontent-%COMP%]::placeholder {\n  color: #333;\n}\n\n.side-panel-icon[_ngcontent-%COMP%] {\n  height: 1.2rem;\n  display: inline-block;\n  padding: 3px 5px 0 0;\n}\n\n.side-panel-input-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 6px;\n}\n\n.side-panel-link[_ngcontent-%COMP%]:hover {\n  color: #757575;\n  transform: translate(4px, 0);\n}\n\n#strip[_ngcontent-%COMP%] {\n  width: 35rem;\n  opacity: 0.5;\n  height: 100vh;\n  overflow: hidden;\n  position: fixed;\n  left: 0rem;\n  top: 0;\n  z-index: -1;\n}\n\n.strip-img[_ngcontent-%COMP%] {\n  -moz-filter: blur(7px);\n  -o-filter: blur(7px);\n  -ms-filter: blur(5px);\n  filter: blur(30px);\n  height: 106%;\n  width: 130%;\n  position: absolute;\n  left: -2.5rem;\n  top: -20px;\n}\n\n#dynamic-background[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: all 1s;\n}\n\n#dynamic-background.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#strip-cover[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 21rem;\n  position: fixed;\n  left: 14rem;\n  background: linear-gradient(90deg, rgba(227, 228, 219, 0.65) 0%, #e3e4db 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQ0hnQjtFREloQiwwQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQURKOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFJQTtFQUNJLDJDQ25CcUI7RURvQnJCLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxxQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQURKOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUdFO0VBQ0UsV0NoQ0k7QUQrQlI7O0FBS0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQUZKOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFFSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0csVUFBQTtFQUNBLGtCQUFBO0FBRkg7O0FBS0E7RUFDRSxVQUFBO0FBRkY7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsOEVBQUE7QUFGSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbiNwYW5lbCB7XG4gICAgd2lkdGg6IDEyLjVyZW07XG4gICAgcGFkZGluZzogM3JlbSAwIDAgMS41cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1saWdodDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAycmVtKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG59XG5cbiN2ZXN0aWJ1bGUtaG9tZSB7XG4gIG1hcmdpbi1ib3R0b206IDNyZW07XG59XG5cbi5hY2llci10aXRsZSB7XG4gICAgZm9udC1mYW1pbHk6IGFjaWVyLWJhdC1ub2lyLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG59XG5cbi5zaWRlLXBhbmVsLWRpdmlkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0O1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiA4NSU7XG4gICAgbWFyZ2luOiAycmVtIDA7XG4gICAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNpZGUtcGFuZWwtbGlua3Mge1xuICAgIHBhZGRpbmc6IDAgMCAwIDAuNXJlbTtcbn1cblxuLnNpZGUtcGFuZWwtbGluayB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBtYXJnaW46IDVweCAwO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5zaWRlLXBhbmVsLWlucHV0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXgtd2lkdGg6IDEwcmVtO1xuICBjb2xvcjogIzRlNGU0ZTtcbiAgbWFyZ2luLXRvcDogLTZweDtcblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICRibGFjaztcbiAgfVxufVxuXG4uc2lkZS1wYW5lbC1pY29uIHtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogM3B4IDVweCAwIDA7XG59XG5cbi5zaWRlLXBhbmVsLWlucHV0LWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5zaWRlLXBhbmVsLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgMCk7XG59XG5cbiNzdHJpcCB7XG4gICAgd2lkdGg6IDM1cmVtO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDByZW07XG4gICAgdG9wOiAwO1xuICAgIHotaW5kZXg6IC0xO1xufVxuXG4uc3RyaXAtaW1nIHtcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cig3cHgpO1xuICAgIC1tb3otZmlsdGVyOiBibHVyKDdweCk7XG4gICAgLW8tZmlsdGVyOiBibHVyKDdweCk7XG4gICAgLW1zLWZpbHRlcjogYmx1cig1cHgpO1xuICAgIGZpbHRlcjogYmx1cigzMHB4KTtcbiAgICBoZWlnaHQ6IDEwNiU7XG4gICAgd2lkdGg6IDEzMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IC0yLjVyZW07XG4gICAgdG9wOiAtMjBweDtcbn1cblxuI2R5bmFtaWMtYmFja2dyb3VuZCB7XG4gICBvcGFjaXR5OiAwO1xuICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4jZHluYW1pYy1iYWNrZ3JvdW5kLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuXG4jc3RyaXAtY292ZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGxlZnQ6IDE0cmVtO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMjcsMjI4LDIxOSwwLjY1KSAwJSwgcmdiYSgyMjcsMjI4LDIxOSwxKSAxMDAlKTtcbn1cbiIsIiRtYWluLWNvbG9yOiAjZTNlNGRiO1xuJHNlY29uZGFyeS1jb2xvcjogI0M4QzlDMDtcbiR0cmFuc3BhcmVudC1saWdodDogI2UxZTJkNjY2O1xuJHRyYW5zcGFyZW50LXNlbWktbGlnaHQ6IHJnYmEoMjI1LCAyMjYsIDIxNCwgMC42NSk7XG4kdG9ycmVudC1ncmVlbjogIzUwYWQ2ZjtcbiR0b3JyZW50LWdyZWVuLWhvdmVyOiAjMmU3MjQzO1xuJHZhbHVlLXRydWUtaG92ZXI6ICMyMDZmMzg7XG4kdmFsdWUtdHJ1ZTogIzNmOTM1OTtcbiR2YWx1ZS1mYWxzZTogI0FGNEY2ODtcbiR2YWx1ZS1mYWxzZS1ob3ZlcjogIzk3Mjk0NTtcbiR2YWx1ZS1uZXV0cmFsOiAjMDA3MWJjO1xuJG1haW4tYmFjazogI2UzZTRkYjtcbiRtYWluLWJhY2stZGFyazogI2JmYmZiODtcbiRtYWluLWJhY2stZGFyay10cmFuc3BhcmVudDogcmdiYSgxOTEsIDE5MSwgMTg0LCAwLjUpO1xuJHVuc2VsZWN0ZWQ6ICNhNGE1YTA7XG4kdW5zZWxlY3RlZC1kYXJrOiAjNzQ3NDcwO1xuJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMTY0LCAxNjUsIDE2MCwgMC4yKTtcbiRza2lwOiAjZWRiZjNiO1xuJGJsYWNrOiAjMzMzO1xuJGxpZ2h0LXRleHQ6ICNkMmQzYzc7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_2__["PanelBackgroundService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "7P/u":
/*!**************************************************************!*\
  !*** ./src/app/shows/show-profile/show-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowProfileComponent", function() { return ShowProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shows.service */ "9gd4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShowProfileComponent_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const quality_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", quality_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](quality_r3);
} }
function ShowProfileComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const waitTime_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", waitTime_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](waitTime_r4.name);
} }
function ShowProfileComponent_p_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed to save changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
            quality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            subtitles: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            high_quality_source: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            download_automatically: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            wait: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
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
        });
        this.profileForm.valueChanges.subscribe(val => {
            this.hasSaveError = false;
            this.updateIsChanged();
        });
    }
    onSubmit() {
        this.isLoading = true;
        this.hasSaveError = false;
        this.showsService.updateShowProfile(this.showImdbID, this.profileForm.value).subscribe(data => {
            this.showProfile = data;
            this.updateIsChanged();
            this.isLoading = false;
        }, () => {
            this.isLoading = false;
            this.hasSaveError = true;
        });
    }
    updateIsChanged() {
        this.isChanged = JSON.stringify(this.profileForm.value) !== JSON.stringify(this.showProfile);
    }
}
ShowProfileComponent.ɵfac = function ShowProfileComponent_Factory(t) { return new (t || ShowProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_2__["ShowsService"])); };
ShowProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowProfileComponent, selectors: [["vestibule-show-profile"]], inputs: { showProfile: "showProfile", showImdbID: "showImdbID" }, decls: 58, vars: 16, consts: [[3, "formGroup", "ngSubmit"], [1, "profile-form-field"], [1, "bullet"], ["formControlName", "quality", 1, "profile-form-option-select"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "profile-option-description"], ["formControlName", "wait", 1, "profile-form-option-select"], ["formControlName", "download_automatically", 1, "profile-form-option-select"], [3, "ngValue"], ["formControlName", "subtitles", 1, "profile-form-option-select"], ["formControlName", "high_quality_source", 1, "profile-form-option-select"], ["type", "submit", 1, "profile-form-submit", 3, "disabled", "ngClass"], ["class", "save-error-text", 4, "ngIf"], [1, "save-error-text"]], template: function ShowProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ShowProfileComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Preferred Video Quality ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowProfileComponent_option_7_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Should favor torrents with matching video quality (or higher if not found) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Wait for Match ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ShowProfileComponent_option_16_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " How long should the automatic download wait if no full profile match is found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Download Automatically ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Should matching episodes be downloaded automatically upon match, or wait time exhaustion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Requires Subtitles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Should favor torrents with subtitles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " High-Quality Sources ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Yes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Should favor torrents from high quality sources, like Web or BlueRay ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ShowProfileComponent_p_57_Template, 2, 0, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.profileForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.qualities);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.waitTimes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.profileForm.valid || !ctx.profileForm.dirty || !ctx.isChanged)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](12, _c0, !ctx.profileForm.valid || !ctx.profileForm.dirty || !ctx.isChanged, ctx.isLoading, ctx.hasSaveError));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasSaveError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".profile-form-field[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.profile-option-description[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 100;\n  color: #a4a5a0;\n}\n\n.profile-form-option-select[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  color: #3f9359;\n}\n\n@keyframes flash_border {\n  0% {\n    border-color: #3f9359;\n  }\n  50% {\n    border-color: #206f38;\n  }\n  100% {\n    border-color: #3f9359;\n  }\n}\n\n.profile-form-submit[_ngcontent-%COMP%] {\n  color: #3f9359;\n  font-size: 1em;\n  margin-top: 1rem;\n  padding-bottom: 5px;\n  border: none;\n  background: none;\n  transition: 0.2s;\n  cursor: pointer;\n}\n\n.profile-form-submit[_ngcontent-%COMP%]:hover {\n  color: #206f38;\n}\n\n.profile-form-submit.disabled[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  cursor: auto;\n}\n\n.profile-form-submit.loading[_ngcontent-%COMP%] {\n  border-bottom: solid #3f9359 3px;\n  animation-name: flash_border;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n.profile-form-submit.error[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n\n.save-error-text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #a4a5a0;\n}\n\n.value-true[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n\n.value-false[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvdy1wcm9maWxlL3Nob3ctcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ0tXO0FETmI7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ1JXO0FET2I7O0FBSUE7RUFDRTtJQUNFLHFCQ2JTO0VEWVg7RUFHQTtJQUNFLHFCQ2pCZTtFRGdCakI7RUFHQTtJQUNFLHFCQ25CUztFRGtCWDtBQUNGOztBQUlBO0VBQ0UsY0N4Qlc7RUR5QlgsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFJRTtFQUNFLGNDbkNlO0FEaUNuQjs7QUFLRTtFQUNFLGNDL0JTO0VEZ0NULFlBQUE7QUFISjs7QUFNRTtFQUNFLGdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsbUNBQUE7QUFKSjs7QUFPRTtFQUNFLGNDbERVO0FENkNkOztBQVNBO0VBQ0UsZ0JBQUE7RUFDQSxjQ2xEVztBRDRDYjs7QUFTQTtFQUNFLGNDN0RXO0FEdURiOztBQVNBO0VBQ0UsY0NoRVk7QUQwRGQiLCJmaWxlIjoic3JjL2FwcC9zaG93cy9zaG93LXByb2ZpbGUvc2hvdy1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5wcm9maWxlLWZvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbi5wcm9maWxlLW9wdGlvbi1kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbn1cblxuLnByb2ZpbGUtZm9ybS1vcHRpb24tc2VsZWN0IHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG59XG5cbkBrZXlmcmFtZXMgZmxhc2hfYm9yZGVyIHtcbiAgMCUge1xuICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWU7XG4gIH1cbiAgNTAlIHtcbiAgICBib3JkZXItY29sb3I6ICR2YWx1ZS10cnVlLWhvdmVyO1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1jb2xvcjogJHZhbHVlLXRydWU7XG4gIH1cbn1cblxuLnByb2ZpbGUtZm9ybS1zdWJtaXQge1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gIH1cblxuICAmLmRpc2FibGVkIHtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQ7XG4gICAgY3Vyc29yOiBhdXRvO1xuICB9XG5cbiAgJi5sb2FkaW5nIHtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAkdmFsdWUtdHJ1ZSAzcHg7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoX2JvcmRlcjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuXG4gICYuZXJyb3Ige1xuICAgIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gIH1cbn1cblxuLnNhdmUtZXJyb3ItdGV4dCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbn1cblxuLnZhbHVlLXRydWUge1xuICBjb2xvcjogJHZhbHVlLXRydWU7XG59XG5cbi52YWx1ZS1mYWxzZSB7XG4gIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-profile',
                templateUrl: './show-profile.component.html',
                styleUrls: ['./show-profile.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _shows_service__WEBPACK_IMPORTED_MODULE_2__["ShowsService"] }]; }, { showProfile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showImdbID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "9Ku7":
/*!**********************************************************!*\
  !*** ./src/app/authentication/authentication.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");



class AuthenticationService {
    constructor(cookieService) {
        this.cookieService = cookieService;
    }
    getCSRFToken() {
        return this.cookieService.get('csrftoken');
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"])); };
AuthenticationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthenticationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_1__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "9gd4":
/*!****************************************!*\
  !*** ./src/app/shows/shows.service.ts ***!
  \****************************************/
/*! exports provided: ShowsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsService", function() { return ShowsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



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
        return this.http.post(`api/shows/subscribe`, { imdb_id: imdb_id });
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
ShowsService.ɵfac = function ShowsService_Factory(t) { return new (t || ShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ShowsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ShowsService, factory: ShowsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AX8S":
/*!**************************************************************!*\
  !*** ./src/app/shows/poster-strip/poster-strip.component.ts ***!
  \**************************************************************/
/*! exports provided: PosterStripComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterStripComponent", function() { return PosterStripComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



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
PosterStripComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PosterStripComponent, selectors: [["vestibule-poster-strip"]], inputs: { palette: "palette", width: "width" }, decls: 1, vars: 1, consts: [[1, "poster-strip", 3, "ngStyle"]], template: function PosterStripComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.stripStyle());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".poster-strip[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  height: 3px;\n  background-color: var(--secondary-color);\n  transition: 0.3s;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3MvcG9zdGVyLXN0cmlwL3Bvc3Rlci1zdHJpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Nob3dzL3Bvc3Rlci1zdHJpcC9wb3N0ZXItc3RyaXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdGVyLXN0cmlwIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDNweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgb3BhY2l0eTogMC42O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterStripComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-poster-strip',
                templateUrl: './poster-strip.component.html',
                styleUrls: ['./poster-strip.component.scss']
            }]
    }], function () { return []; }, { palette: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Chnw":
/*!**************************************************************!*\
  !*** ./src/app/shows/show-details/show-details.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsComponent", function() { return ShowDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/loading-button/loading-button-status */ "1srG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shows.service */ "9gd4");
/* harmony import */ var _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../panel/panel-background/panel-background.service */ "FF8+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-details-tabs/show-details-tabs.component */ "26FK");
/* harmony import */ var _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-details-tab/show-details-tab.component */ "XkST");
/* harmony import */ var _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../show-torrents/show-torrents.component */ "203w");
/* harmony import */ var _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../show-profile/show-profile.component */ "7P/u");
/* harmony import */ var _shared_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/loading-button/loading-button.component */ "+fDI");
/* harmony import */ var _pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pipes/plural-pipe.pipe */ "YpDE");














function ShowDetailsComponent_ng_container_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.show.year, " ");
} }
function ShowDetailsComponent_ng_container_0_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.show.network, " ");
} }
function ShowDetailsComponent_ng_container_0_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "pluralPipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx_r3.show.number_of_seasons_as_int, "Season"), "");
} }
function ShowDetailsComponent_ng_container_0_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Next Episode: ", ctx_r4.show.next_episode, "");
} }
function ShowDetailsComponent_ng_container_0_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Are you sure you want to unsubscribe?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_div_34_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onUnsubscribeConfirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Yes, unsubscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_div_34_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.onUnsubscribeCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" This will delete all '", ctx_r5.show.title, "' Torrents and show info");
} }
const _c0 = function (a0, a1) { return { "loading": a0, "error": a1 }; };
function ShowDetailsComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "vestibule-show-details-tabs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "vestibule-show-details-tab", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ShowDetailsComponent_ng_container_0_span_6_Template, 5, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ShowDetailsComponent_ng_container_0_span_7_Template, 5, 1, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowDetailsComponent_ng_container_0_span_8_Template, 4, 4, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ShowDetailsComponent_ng_container_0_p_11_Template, 2, 1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "IMDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "vestibule-show-details-tab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "vestibule-show-torrents", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "vestibule-show-details-tab", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "vestibule-show-profile", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "vestibule-show-details-tab", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onUpdateShowInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Update Show Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.onFindShowTorrents(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Find Show Torrents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Danger Zone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "vestibule-loading-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowDetailsComponent_ng_container_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onUnsubscribe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Unsubscribe from Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ShowDetailsComponent_ng_container_0_div_34_Template, 11, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.show.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.number_of_seasons_as_int);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.show.status_line);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.show.next_episode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r0.show.imdb_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.show.imdb_rating, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx_r0.show)("showUpdated$", ctx_r0.showUpdated.asObservable());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showProfile", ctx_r0.show.profile)("showImdbID", ctx_r0.show.imdb_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](15, _c0, ctx_r0.updateShowInfoStatus === "loading", ctx_r0.updateShowInfoStatus === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx_r0.findShowTorrentsStatus === "loading", ctx_r0.findShowTorrentsStatus === "error"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.unsubscribeShowStatus === "confirm");
} }
class ShowDetailsComponent {
    constructor(route, showsService, panelBackgroundService, router) {
        this.route = route;
        this.showsService = showsService;
        this.panelBackgroundService = panelBackgroundService;
        this.router = router;
        this.showUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
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
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
    }
    onUpdateShowInfo() {
        this.resetMessagesAndStatus();
        this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].loading;
        this.showsService.updateShowInfo(this.imdb_id).subscribe(data => {
            this.show = data;
            this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
            this.showUpdated.next();
        }, error => {
            this.updateShowInfoStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].error;
        });
    }
    onFindShowTorrents() {
        this.resetMessagesAndStatus();
        this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].loading;
        this.showsService.findShowTorrents(this.imdb_id).subscribe(data => {
            this.show = data;
            this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].idle;
        }, () => {
            this.findShowTorrentsStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].error;
        });
    }
    onUnsubscribe() {
        this.resetMessagesAndStatus();
        this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].confirm;
    }
    onUnsubscribeCancel() {
        this.resetMessagesAndStatus();
    }
    onUnsubscribeConfirm() {
        this.showsService.unsubscribeFromShow(this.imdb_id).subscribe(data => {
            this.router.navigate(['/shows']);
        }, error => {
            this.unsubscribeShowStatus = _shared_loading_button_loading_button_status__WEBPACK_IMPORTED_MODULE_1__["LoadingButtonStatus"].error;
        });
    }
}
ShowDetailsComponent.ɵfac = function ShowDetailsComponent_Factory(t) { return new (t || ShowDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_4__["ShowsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_5__["PanelBackgroundService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ShowDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDetailsComponent, selectors: [["vestibule-show-details"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "show-title"], ["tabTitle", "Status", "active", "true"], [1, "show-title-tags"], [1, "show-status-line"], ["class", "show-next-episode-line", 4, "ngIf"], [1, "show-imdb-link"], ["target", "_blank", 3, "href"], ["tabTitle", "Episodes + Torrents"], [3, "show", "showUpdated$"], ["tabTitle", "Subscription Profile"], [3, "showProfile", "showImdbID"], ["tabTitle", "Actions"], [3, "ngClass", "click"], [1, "danger-zone-actions"], [1, "danger-zone-button", 3, "click"], ["class", "danger-zone-confirm", 4, "ngIf"], [1, "bullet"], [1, "show-next-episode-line"], [1, "danger-zone-confirm"], [1, "danger-zone-text"], [1, "danger-zone-confirm-yes", 3, "click"], [1, "danger-zone-confirm-cancel", 3, "click"]], template: function ShowDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowDetailsComponent_ng_container_0_Template, 35, 21, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_7__["ShowDetailsTabsComponent"], _show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_8__["ShowDetailsTabComponent"], _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_9__["ShowTorrentsComponent"], _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_10__["ShowProfileComponent"], _shared_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_11__["LoadingButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_12__["PluralPipePipe"]], styles: [".show-title[_ngcontent-%COMP%] {\n  font-size: 2.3em;\n  font-weight: 500;\n}\n\n.show-title-tags[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.show-status-line[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.show-imdb-link[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.show-imdb-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  border: 2px solid;\n  padding: 0 5px 1px;\n  margin-right: 5px;\n  text-decoration: none;\n  transition: 0.2s;\n  display: inline-block;\n}\n\n.show-imdb-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: rgba(252, 214, 56, 0.6);\n}\n\n.danger-zone-actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n}\n\n.danger-zone-actions[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: #AF4F68;\n  margin-bottom: 5px;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n  border-left: 3px solid #a4a5a0;\n  padding-left: 10px;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #AF4F68;\n  font-weight: 500;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%], .danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%] {\n  border: none;\n  background: none;\n  font-size: 0.9em;\n  margin-right: 15px;\n  font-weight: 500;\n  border-bottom: 3px solid;\n  margin-top: 10px;\n  padding-bottom: 3px;\n  transition: 0.2s;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%] {\n  color: #AF4F68;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-yes[_ngcontent-%COMP%]:hover {\n  color: #972945;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n\n.danger-zone-confirm[_ngcontent-%COMP%]   .danger-zone-confirm-cancel[_ngcontent-%COMP%]:hover {\n  color: #206f38;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvdy1kZXRhaWxzL3Nob3ctZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBREo7O0FBR0k7RUFDRSx5Q0FBQTtBQUROOztBQU1BO0VBRUUsa0JBQUE7QUFKRjs7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsY0M5QlU7RUQrQlYsa0JBQUE7QUFKSjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQU9FO0VBQ0UsY0FBQTtBQUxKOztBQU9JO0VBQ0UsY0M1Q1E7RUQ2Q1IsZ0JBQUE7QUFMTjs7QUFTRTs7RUFFRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVBKOztBQVVFO0VBQ0UsY0MvRFU7QUR1RGQ7O0FBVUk7RUFDRSxjQ2pFYztBRHlEcEI7O0FBWUU7RUFDRSxjQ3hFUztBRDhEYjs7QUFZSTtFQUNFLGNDNUVhO0FEa0VuQiIsImZpbGUiOiJzcmMvYXBwL3Nob3dzL3Nob3ctZGV0YWlscy9zaG93LWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLnNob3ctdGl0bGUge1xuICBmb250LXNpemU6IDIuM2VtO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2hvdy10aXRsZS10YWdzIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uc2hvdy1zdGF0dXMtbGluZSB7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5zaG93LWltZGItbGluayB7XG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICBhIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwIDVweCAxcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MiwgMjE0LCA1NiwgMC42KTtcbiAgICB9XG4gIH1cbn1cblxuLmRhbmdlci16b25lLWFjdGlvbnMge1xuXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcblxuICBwIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xuICAgIGNvbG9yOiAkdmFsdWUtZmFsc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG59XG5cbi5kYW5nZXItem9uZS1jb25maXJtIHtcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHVuc2VsZWN0ZWQ7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcblxuICAuZGFuZ2VyLXpvbmUtdGV4dCBwIHtcbiAgICBjb2xvcjogIzMzMzMzMztcblxuICAgIGIge1xuICAgICAgY29sb3I6ICR2YWx1ZS1mYWxzZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG5cbiAgLmRhbmdlci16b25lLWNvbmZpcm0teWVzLFxuICAuZGFuZ2VyLXpvbmUtY29uZmlybS1jYW5jZWwge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgLmRhbmdlci16b25lLWNvbmZpcm0teWVzIHtcbiAgICBjb2xvcjogJHZhbHVlLWZhbHNlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHZhbHVlLWZhbHNlLWhvdmVyO1xuICAgIH1cbiAgfVxuXG4gIC5kYW5nZXItem9uZS1jb25maXJtLWNhbmNlbCB7XG4gICAgY29sb3I6ICR2YWx1ZS10cnVlO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBjb2xvcjogJHZhbHVlLXRydWUtaG92ZXI7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-details',
                templateUrl: './show-details.component.html',
                styleUrls: ['./show-details.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _shows_service__WEBPACK_IMPORTED_MODULE_4__["ShowsService"] }, { type: _panel_panel_background_panel_background_service__WEBPACK_IMPORTED_MODULE_5__["PanelBackgroundService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "FF8+":
/*!********************************************************************!*\
  !*** ./src/app/panel/panel-background/panel-background.service.ts ***!
  \********************************************************************/
/*! exports provided: PanelBackgroundService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBackgroundService", function() { return PanelBackgroundService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class PanelBackgroundService {
    constructor() {
        this.defaultBackgroundURL = "/static/images/vestibule_default-13.jpg";
        this.backgroundURL = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.defaultBackgroundURL);
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
PanelBackgroundService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PanelBackgroundService, factory: PanelBackgroundService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelBackgroundService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "G+KE":
/*!*************************************!*\
  !*** ./src/app/find/find.module.ts ***!
  \*************************************/
/*! exports provided: FindModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindModule", function() { return FindModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _find_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-routing.module */ "TLuU");
/* harmony import */ var _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-results/find-results.component */ "kqxi");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







class FindModule {
}
FindModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FindModule });
FindModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FindModule_Factory(t) { return new (t || FindModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _find_routing_module__WEBPACK_IMPORTED_MODULE_2__["FindRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FindModule, { declarations: [_find_results_find_results_component__WEBPACK_IMPORTED_MODULE_3__["FindResultsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        _find_routing_module__WEBPACK_IMPORTED_MODULE_2__["FindRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_find_results_find_results_component__WEBPACK_IMPORTED_MODULE_3__["FindResultsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    _find_routing_module__WEBPACK_IMPORTED_MODULE_2__["FindRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ob5i":
/*!***************************************!*\
  !*** ./src/app/shows/shows.module.ts ***!
  \***************************************/
/*! exports provided: ShowsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsModule", function() { return ShowsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shows_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shows-routing.module */ "vDqY");
/* harmony import */ var _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shows-list/shows-list.component */ "jnt5");
/* harmony import */ var _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poster-strip/poster-strip.component */ "AX8S");
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./show-details/show-details.component */ "Chnw");
/* harmony import */ var _pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pipes/plural-pipe.pipe */ "YpDE");
/* harmony import */ var _show_details_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./show-details/show-details-tab/show-details-tab.component */ "XkST");
/* harmony import */ var _show_details_show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-details/show-details-tabs/show-details-tabs.component */ "26FK");
/* harmony import */ var _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-profile/show-profile.component */ "7P/u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./show-torrents/show-torrents.component */ "203w");
/* harmony import */ var _show_torrents_show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./show-torrents/show-torrents-section/show-torrents-section.component */ "zwgI");
/* harmony import */ var _shows_list_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shows-list/shows-status-group/shows-status-group.component */ "hN+i");

















class ShowsModule {
}
ShowsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowsModule });
ShowsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowsModule_Factory(t) { return new (t || ShowsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            _shows_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowsModule, { declarations: [_pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["PluralPipePipe"],
        _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_4__["ShowsListComponent"],
        _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__["PosterStripComponent"],
        _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsComponent"],
        _show_details_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_8__["ShowDetailsTabComponent"],
        _show_details_show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_9__["ShowDetailsTabsComponent"],
        _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_10__["ShowProfileComponent"],
        _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_13__["ShowTorrentsComponent"],
        _show_torrents_show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_14__["ShowTorrentsSectionComponent"],
        _shows_list_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_15__["ShowsStatusGroupComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
        _shows_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]], exports: [_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__["PosterStripComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pipes_plural_pipe_pipe__WEBPACK_IMPORTED_MODULE_7__["PluralPipePipe"],
                    _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_4__["ShowsListComponent"],
                    _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__["PosterStripComponent"],
                    _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_6__["ShowDetailsComponent"],
                    _show_details_show_details_tab_show_details_tab_component__WEBPACK_IMPORTED_MODULE_8__["ShowDetailsTabComponent"],
                    _show_details_show_details_tabs_show_details_tabs_component__WEBPACK_IMPORTED_MODULE_9__["ShowDetailsTabsComponent"],
                    _show_profile_show_profile_component__WEBPACK_IMPORTED_MODULE_10__["ShowProfileComponent"],
                    _show_torrents_show_torrents_component__WEBPACK_IMPORTED_MODULE_13__["ShowTorrentsComponent"],
                    _show_torrents_show_torrents_section_show_torrents_section_component__WEBPACK_IMPORTED_MODULE_14__["ShowTorrentsSectionComponent"],
                    _shows_list_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_15__["ShowsStatusGroupComponent"],
                ],
                exports: [
                    _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_5__["PosterStripComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                    _shows_routing_module__WEBPACK_IMPORTED_MODULE_3__["ShowsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-button/loading-button.component */ "+fDI");
/* harmony import */ var _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-torrent/show-torrent.component */ "vYL3");





class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_2__["LoadingButtonComponent"],
        _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_3__["ShowTorrentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_2__["LoadingButtonComponent"],
        _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_3__["ShowTorrentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_2__["LoadingButtonComponent"],
                    _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_3__["ShowTorrentComponent"]
                ],
                exports: [
                    _loading_button_loading_button_component__WEBPACK_IMPORTED_MODULE_2__["LoadingButtonComponent"],
                    _show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_3__["ShowTorrentComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shows/shows.service */ "9gd4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shows/poster-strip/poster-strip.component */ "AX8S");






const _c0 = function (a1) { return ["/shows", a1]; };
function DashboardComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "vestibule-poster-strip", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, show_r1.imdb_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("palette", show_r1.palette_list)("width", "100%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r1.next_episode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r1.next_episode_season_status);
} }
class DashboardComponent {
    constructor(showsService) {
        this.showsService = showsService;
    }
    ngOnInit() {
        this.showsService.listShowsByUpcomingEpisodes().subscribe(data => this.upcomingEpisodesShows = data);
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["vestibule-dashboard"]], decls: 5, vars: 1, consts: [[1, "dashboard-model-wrapper"], [1, "dashboard-model-title"], [1, "dashboard-model-entries"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "dashboard-model-entry"], [1, "show-data"], [3, "palette", "width"], [1, "show-title"], [1, "show-next-episode-line"], [1, "season-status"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Upcoming Episodes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_a_4_Template, 11, 8, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.upcomingEpisodesShows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shows_poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_4__["PosterStripComponent"]], styles: [".bullet[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n\n.dashboard-model-wrapper[_ngcontent-%COMP%] {\n  margin: 1rem 0 5rem;\n}\n\n.dashboard-model-title[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: #a4a5a0;\n}\n\n.dashboard-model-entries[_ngcontent-%COMP%] {\n  display: flex;\n  overflow-x: scroll;\n}\n\n.dashboard-model-entries[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%] {\n  width: 14rem;\n  margin-right: 1.2rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]:hover   .show-title[_ngcontent-%COMP%] {\n  transform: translate(4px, 0);\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-title[_ngcontent-%COMP%] {\n  font-size: 1.1em;\n  margin: 0.7rem 0;\n  transition: 0.3s;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  font-weight: 400;\n  color: #747470;\n  margin: 0 0 0.5rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-data[_ngcontent-%COMP%]   .show-next-episode-line[_ngcontent-%COMP%]   .season-status[_ngcontent-%COMP%] {\n  font-weight: 200;\n  display: inline-block;\n  height: 1.2rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-wrapper[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  margin-top: 0.5rem;\n  background-color: #babbb140;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  font-weight: 300;\n  color: #747470;\n  padding: 0.2rem 0.5rem;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n\n.dashboard-model-entry[_ngcontent-%COMP%]   .show-recent-activity-line[_ngcontent-%COMP%]   .season-status[_ngcontent-%COMP%] {\n  font-weight: 200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsYUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0VBQ0EsY0NFVztBREhiOztBQUlBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxhQUFBO0FBREo7O0FBS0E7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFGRjs7QUFJRTtFQUNFLDRCQUFBO0FBRko7O0FBT0k7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFMTjs7QUFRSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQzVCWTtFRDZCWixrQkFBQTtBQU5OOztBQVFNO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBTlI7O0FBU007RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQVBSOztBQVlFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFWSjs7QUFhRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3JEYztFRHNEZCxzQkFBQTtBQVhKOztBQWFJO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBWE47O0FBY0k7RUFDRSxnQkFBQTtBQVpOIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9zdHlsaW5nL3ZhcmlhYmxlc1wiO1xuXG4uYnVsbGV0IHtcbiAgbWFyZ2luOiAwIDhweDtcbn1cblxuLmRhc2hib2FyZC1tb2RlbC13cmFwcGVyIHtcbiAgbWFyZ2luOiAxcmVtIDAgNXJlbTtcbn1cblxuLmRhc2hib2FyZC1tb2RlbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDs7XG59XG5cbi5kYXNoYm9hcmQtbW9kZWwtZW50cmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4uZGFzaGJvYXJkLW1vZGVsLWVudHJ5IHtcbiAgd2lkdGg6IDE0cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcblxuICAmOmhvdmVyIC5zaG93LXRpdGxlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDApO1xuICB9XG5cbiAgLnNob3ctZGF0YSB7XG5cbiAgICAuc2hvdy10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgICAgbWFyZ2luOiAwLjdyZW0gMDtcbiAgICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgfVxuXG4gICAgLnNob3ctbmV4dC1lcGlzb2RlLWxpbmUge1xuICAgICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgICBtYXJnaW46IDAgMCAwLjVyZW07XG5cbiAgICAgIHAge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWFzb24tc3RhdHVzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEuMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2hvdy1yZWNlbnQtYWN0aXZpdHktd3JhcHBlciB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmFiYmIxNDA7XG4gIH1cblxuICAuc2hvdy1yZWNlbnQtYWN0aXZpdHktbGluZSB7XG4gICAgZm9udC1zaXplOiAwLjg1ZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC41cmVtO1xuXG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICAgIH1cblxuICAgIC5zZWFzb24tc3RhdHVzIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxuICB9XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _shows_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"] }]; }, null); })();


/***/ }),

/***/ "RXYB":
/*!*****************************************************!*\
  !*** ./src/app/authentication/token.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "9Ku7");



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
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"])); };
TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'vestibule';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "vestibule-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_panel_panel_component__WEBPACK_IMPORTED_MODULE_1__["PanelComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#main-container[_ngcontent-%COMP%] {\n  margin-left: 18rem;\n  padding-top: 2.6rem;\n  height: calc(100vh - 2.6rem);\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiAxOHJlbTtcbiAgcGFkZGluZy10b3A6IDIuNnJlbTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMi42cmVtKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TLuU":
/*!*********************************************!*\
  !*** ./src/app/find/find-routing.module.ts ***!
  \*********************************************/
/*! exports provided: FindRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRoutingModule", function() { return FindRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./find-results/find-results.component */ "kqxi");





const routes = [
    { path: 'find/results', component: _find_results_find_results_component__WEBPACK_IMPORTED_MODULE_2__["FindResultsComponent"] },
];
class FindRoutingModule {
}
FindRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FindRoutingModule });
FindRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FindRoutingModule_Factory(t) { return new (t || FindRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FindRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "V8BD":
/*!*****************************************************!*\
  !*** ./src/app/torrents/torrents-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TorrentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorrentsRoutingModule", function() { return TorrentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class TorrentsRoutingModule {
}
TorrentsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TorrentsRoutingModule });
TorrentsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TorrentsRoutingModule_Factory(t) { return new (t || TorrentsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TorrentsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorrentsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "XkST":
/*!***********************************************************************************!*\
  !*** ./src/app/shows/show-details/show-details-tab/show-details-tab.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShowDetailsTabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsTabComponent", function() { return ShowDetailsTabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class ShowDetailsTabComponent {
    constructor() {
        this.active = false;
    }
    ngOnInit() {
    }
}
ShowDetailsTabComponent.ɵfac = function ShowDetailsTabComponent_Factory(t) { return new (t || ShowDetailsTabComponent)(); };
ShowDetailsTabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowDetailsTabComponent, selectors: [["vestibule-show-details-tab"]], inputs: { title: ["tabTitle", "title"], active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[3, "hidden"]], template: function ShowDetailsTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.active);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3dzL3Nob3ctZGV0YWlscy9zaG93LWRldGFpbHMtdGFiL3Nob3ctZGV0YWlscy10YWIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowDetailsTabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-details-tab',
                templateUrl: './show-details-tab.component.html',
                styleUrls: ['./show-details-tab.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tabTitle']
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "YpDE":
/*!*******************************************!*\
  !*** ./src/app/pipes/plural-pipe.pipe.ts ***!
  \*******************************************/
/*! exports provided: PluralPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluralPipePipe", function() { return PluralPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PluralPipePipe {
    transform(number, singularText, pluralText = null) {
        let pluralWord = pluralText ? pluralText : `${singularText}s`;
        return number > 1 ? `${number} ${pluralWord}` : `${number} ${singularText}`;
    }
}
PluralPipePipe.ɵfac = function PluralPipePipe_Factory(t) { return new (t || PluralPipePipe)(); };
PluralPipePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "pluralPipe", type: PluralPipePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PluralPipePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'pluralPipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel/panel.component */ "4u/y");
/* harmony import */ var _panel_services_status_services_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel/services-status/services-status.component */ "cFr7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shows_shows_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shows/shows.module */ "Ob5i");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authentication/token.interceptor */ "RXYB");
/* harmony import */ var _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./torrents/torrents.module */ "mcJH");
/* harmony import */ var _find_find_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./find/find.module */ "G+KE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _shows_shows_module__WEBPACK_IMPORTED_MODULE_7__["ShowsModule"],
            _find_find_module__WEBPACK_IMPORTED_MODULE_12__["FindModule"],
            _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_11__["TorrentsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"],
        _panel_services_status_services_status_component__WEBPACK_IMPORTED_MODULE_5__["ServicesStatusComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _shows_shows_module__WEBPACK_IMPORTED_MODULE_7__["ShowsModule"],
        _find_find_module__WEBPACK_IMPORTED_MODULE_12__["FindModule"],
        _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_11__["TorrentsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"],
                    _panel_services_status_services_status_component__WEBPACK_IMPORTED_MODULE_5__["ServicesStatusComponent"],
                    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _shows_shows_module__WEBPACK_IMPORTED_MODULE_7__["ShowsModule"],
                    _find_find_module__WEBPACK_IMPORTED_MODULE_12__["FindModule"],
                    _torrents_torrents_module__WEBPACK_IMPORTED_MODULE_11__["TorrentsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ReactiveFormsModule"],
                ],
                providers: [
                    ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__["CookieService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _authentication_token_interceptor__WEBPACK_IMPORTED_MODULE_10__["TokenInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cFr7":
/*!********************************************************************!*\
  !*** ./src/app/panel/services-status/services-status.component.ts ***!
  \********************************************************************/
/*! exports provided: ServicesStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesStatusComponent", function() { return ServicesStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_status_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services-status.service */ "4Kh+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




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
ServicesStatusComponent.ɵfac = function ServicesStatusComponent_Factory(t) { return new (t || ServicesStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_status_service__WEBPACK_IMPORTED_MODULE_1__["ServicesStatusService"])); };
ServicesStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServicesStatusComponent, selectors: [["vestibule-services-status"]], decls: 7, vars: 12, consts: [["id", "services-status-box"], ["target", "_blank", 1, "service-wrap", "service-active", 3, "ngClass", "href"], [1, "service-status-bar"], ["src", "/static/images/plex_icon.svg", 1, "service-icon", 3, "alt"], ["src", "/static/images/transmission_icon.svg", 1, "service-icon", 3, "alt"]], template: function ServicesStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.plexStatus == null ? null : ctx.plexStatus.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx.plexStatus == null ? null : ctx.plexStatus.up, !(ctx.plexStatus == null ? null : ctx.plexStatus.up)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Plex is ", (ctx.plexStatus == null ? null : ctx.plexStatus.up) ? "Up" : "Down", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.transmissionStatus == null ? null : ctx.transmissionStatus.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up, !(ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up)));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Transmission is ", (ctx.transmissionStatus == null ? null : ctx.transmissionStatus.up) ? "Up" : "Down", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["#services-status-box[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  height: 4rem;\n  width: 14rem;\n  display: flex;\n  justify-content: center;\n  background-color: #e1e2d666;\n}\n\n.service-wrap[_ngcontent-%COMP%] {\n  padding: 0.7rem;\n  width: 3rem;\n  position: relative;\n}\n\n.service-wrap[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%] {\n  display: block;\n  height: 35px;\n  margin: 3px auto 0;\n  opacity: 0.5;\n  transition: 0.3s;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover.service-active   .service-icon[_ngcontent-%COMP%] {\n  opacity: 0.9;\n}\n\n.service-wrap[_ngcontent-%COMP%]:hover.service-active   .service-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.service-status-bar[_ngcontent-%COMP%] {\n  background-color: #7f7f7f;\n  transition: background-color 0.3s linear;\n  height: 3px;\n  width: 65%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 40;\n}\n\n.service-up[_ngcontent-%COMP%]   .service-status-bar[_ngcontent-%COMP%] {\n  background-color: #3f9359;\n}\n\n.service-down[_ngcontent-%COMP%]   .service-status-bar[_ngcontent-%COMP%] {\n  background-color: #AF4F68;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFuZWwvc2VydmljZXMtc3RhdHVzL3NlcnZpY2VzLXN0YXR1cy5jb21wb25lbnQuc2NzcyIsInNyYy9zdHlsaW5nL3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkNSZ0I7QURPcEI7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0FBRko7O0FBT0E7RUFDSSxVQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0FBSko7O0FBT0E7RUFDSSx5QkFBQTtBQUpKOztBQU9BO0VBQ0kseUJBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL3BhbmVsL3NlcnZpY2VzLXN0YXR1cy9zZXJ2aWNlcy1zdGF0dXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuI3NlcnZpY2VzLXN0YXR1cy1ib3gge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDRyZW07XG4gICAgd2lkdGg6IDE0cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRyYW5zcGFyZW50LWxpZ2h0O1xufVxuXG4uc2VydmljZS13cmFwIHtcbiAgcGFkZGluZzogMC43cmVtO1xuICB3aWR0aDogM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5zZXJ2aWNlLWljb24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXJnaW46IDNweCBhdXRvIDA7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAmOmhvdmVyLnNlcnZpY2UtYWN0aXZlIC5zZXJ2aWNlLWljb24ge1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxufVxuXG5cbi5zZXJ2aWNlLXdyYXA6aG92ZXIuc2VydmljZS1hY3RpdmUgLnNlcnZpY2UtaWNvbiB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlcnZpY2Utc3RhdHVzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdmN2Y3ZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgbGluZWFyO1xuICAgIGhlaWdodDogM3B4O1xuICAgIHdpZHRoOiA2NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG4gICAgei1pbmRleDogNDA7XG59XG5cbi5zZXJ2aWNlLXVwIC5zZXJ2aWNlLXN0YXR1cy1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjkzNTk7XG59XG5cbi5zZXJ2aWNlLWRvd24gLnNlcnZpY2Utc3RhdHVzLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGNEY2ODtcbn1cbiIsIiRtYWluLWNvbG9yOiAjZTNlNGRiO1xuJHNlY29uZGFyeS1jb2xvcjogI0M4QzlDMDtcbiR0cmFuc3BhcmVudC1saWdodDogI2UxZTJkNjY2O1xuJHRyYW5zcGFyZW50LXNlbWktbGlnaHQ6IHJnYmEoMjI1LCAyMjYsIDIxNCwgMC42NSk7XG4kdG9ycmVudC1ncmVlbjogIzUwYWQ2ZjtcbiR0b3JyZW50LWdyZWVuLWhvdmVyOiAjMmU3MjQzO1xuJHZhbHVlLXRydWUtaG92ZXI6ICMyMDZmMzg7XG4kdmFsdWUtdHJ1ZTogIzNmOTM1OTtcbiR2YWx1ZS1mYWxzZTogI0FGNEY2ODtcbiR2YWx1ZS1mYWxzZS1ob3ZlcjogIzk3Mjk0NTtcbiR2YWx1ZS1uZXV0cmFsOiAjMDA3MWJjO1xuJG1haW4tYmFjazogI2UzZTRkYjtcbiRtYWluLWJhY2stZGFyazogI2JmYmZiODtcbiRtYWluLWJhY2stZGFyay10cmFuc3BhcmVudDogcmdiYSgxOTEsIDE5MSwgMTg0LCAwLjUpO1xuJHVuc2VsZWN0ZWQ6ICNhNGE1YTA7XG4kdW5zZWxlY3RlZC1kYXJrOiAjNzQ3NDcwO1xuJHVuc2VsZWN0ZWQtdHJhbnNwYXJlbnQ6IHJnYmEoMTY0LCAxNjUsIDE2MCwgMC4yKTtcbiRza2lwOiAjZWRiZjNiO1xuJGJsYWNrOiAjMzMzO1xuJGxpZ2h0LXRleHQ6ICNkMmQzYzc7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-services-status',
                templateUrl: './services-status.component.html',
                styleUrls: ['./services-status.component.scss']
            }]
    }], function () { return [{ type: _services_status_service__WEBPACK_IMPORTED_MODULE_1__["ServicesStatusService"] }]; }, null); })();


/***/ }),

/***/ "edMa":
/*!*************************************!*\
  !*** ./src/app/torrents/torrent.ts ***!
  \*************************************/
/*! exports provided: TorrentDownloadStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorrentDownloadStatus", function() { return TorrentDownloadStatus; });
class TorrentDownloadStatus {
}
TorrentDownloadStatus.NEVER_STARTED = 'Never Started';
TorrentDownloadStatus.DOWNLOADING = 'Downloading';
TorrentDownloadStatus.READY = 'Ready';
TorrentDownloadStatus.STOPPED = 'Stopped';


/***/ }),

/***/ "hN+i":
/*!*************************************************************************************!*\
  !*** ./src/app/shows/shows-list/shows-status-group/shows-status-group.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ShowsStatusGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsStatusGroupComponent", function() { return ShowsStatusGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../poster-strip/poster-strip.component */ "AX8S");





function ShowsStatusGroupComponent_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
const _c0 = function (a1) { return ["/shows", a1]; };
function ShowsStatusGroupComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "vestibule-poster-strip", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const show_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, show_r2.imdb_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](show_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("palette", show_r2.palette_list);
} }
class ShowsStatusGroupComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShowsStatusGroupComponent.ɵfac = function ShowsStatusGroupComponent_Factory(t) { return new (t || ShowsStatusGroupComponent)(); };
ShowsStatusGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsStatusGroupComponent, selectors: [["vestibule-shows-status-group"]], inputs: { title: "title", showList: "showList" }, decls: 4, vars: 2, consts: [[1, "show-list-group"], ["class", "show-list-status", 4, "ngIf"], [1, "show-list"], [3, "routerLink", 4, "ngFor", "ngForOf"], [1, "show-list-status"], [3, "routerLink"], [1, "show"], [1, "show-title"], [3, "palette"]], template: function ShowsStatusGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowsStatusGroupComponent_p_1_Template, 2, 1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowsStatusGroupComponent_a_3_Template, 5, 5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.showList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _poster_strip_poster_strip_component__WEBPACK_IMPORTED_MODULE_3__["PosterStripComponent"]], styles: [".show-list-group[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.show-list-status[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  margin-bottom: 1rem;\n}\n\n.show-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.show[_ngcontent-%COMP%] {\n  height: 2rem;\n  margin: 0 1rem 2rem 0;\n  width: 20rem;\n}\n\n.show[_ngcontent-%COMP%]:hover   .poster-strip[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n\n.show[_ngcontent-%COMP%]:hover   .show-title[_ngcontent-%COMP%] {\n  transform: translate(8px, 0);\n}\n\n.show-title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  margin-bottom: 3px;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvd3MtbGlzdC9zaG93cy1zdGF0dXMtZ3JvdXAvc2hvd3Mtc3RhdHVzLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsY0NPVztFRE5YLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdFO0VBQ0UsV0FBQTtBQURKOztBQUlFO0VBQ0UsNEJBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvc2hvd3Mvc2hvd3MtbGlzdC9zaG93cy1zdGF0dXMtZ3JvdXAvc2hvd3Mtc3RhdHVzLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbi5zaG93LWxpc3QtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4uc2hvdy1saXN0LXN0YXR1cyB7XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnNob3ctbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnNob3cge1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBtYXJnaW46IDAgMXJlbSAycmVtIDA7XG4gICAgd2lkdGg6IDIwcmVtO1xuXG4gICY6aG92ZXIgLnBvc3Rlci1zdHJpcCB7XG4gICAgd2lkdGg6IDZyZW07XG4gIH1cblxuICAmOmhvdmVyIC5zaG93LXRpdGxle1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDhweCwgMCk7XG4gIH1cbn1cblxuLnNob3ctdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsStatusGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-shows-status-group',
                templateUrl: './shows-status-group.component.html',
                styleUrls: ['./shows-status-group.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "jnt5":
/*!**********************************************************!*\
  !*** ./src/app/shows/shows-list/shows-list.component.ts ***!
  \**********************************************************/
/*! exports provided: ShowsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsListComponent", function() { return ShowsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shows.service */ "9gd4");
/* harmony import */ var _shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shows-status-group/shows-status-group.component */ "hN+i");




class ShowStatus {
}
ShowStatus.CONTINUING = 'Continuing';
ShowStatus.ENDED = 'Ended';
ShowStatus.UPCOMING = 'Upcoming';
class ShowsListComponent {
    constructor(showsService) {
        this.showsService = showsService;
    }
    ngOnInit() {
        this.showsService.listShows().subscribe(data => {
            this.showsByStatus = this.groupShowsBy(data);
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
ShowsListComponent.ɵfac = function ShowsListComponent_Factory(t) { return new (t || ShowsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"])); };
ShowsListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowsListComponent, selectors: [["vestibule-shows-list"]], decls: 4, vars: 6, consts: [["id", "shows-status-list"], [3, "title", "showList"]], template: function ShowsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vestibule-shows-status-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "vestibule-shows-status-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "vestibule-shows-status-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Continuing")("showList", ctx.continuingShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Upcoming")("showList", ctx.upcomingShows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Ended")("showList", ctx.endedShows);
    } }, directives: [_shows_status_group_shows_status_group_component__WEBPACK_IMPORTED_MODULE_2__["ShowsStatusGroupComponent"]], styles: ["#shows-status-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1rem;\n  height: 100%;\n  overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvd3MtbGlzdC9zaG93cy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nob3dzL3Nob3dzLWxpc3Qvc2hvd3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzaG93cy1zdGF0dXMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-shows-list',
                templateUrl: './shows-list.component.html',
                styleUrls: ['./shows-list.component.scss']
            }]
    }], function () { return [{ type: _shows_service__WEBPACK_IMPORTED_MODULE_1__["ShowsService"] }]; }, null); })();


/***/ }),

/***/ "kqxi":
/*!*************************************************************!*\
  !*** ./src/app/find/find-results/find-results.component.ts ***!
  \*************************************************************/
/*! exports provided: FindResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindResultsComponent", function() { return FindResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _torrents_torrent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../torrents/torrent */ "edMa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shows/shows.service */ "9gd4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/show-torrent/show-torrent.component */ "vYL3");










function FindResultsComponent_div_4_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FindResultsComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindResultsComponent_div_4_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const result_r7 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.setPreviewShow(result_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const result_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", result_r7.cover_url, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r7.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r7.title);
} }
function FindResultsComponent_div_4_4_ng_template_0_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Type to search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FindResultsComponent_div_4_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FindResultsComponent_div_4_4_ng_template_0_p_0_Template, 2, 0, "p", 12);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_r0.value.length && !ctx_r10.loading);
} }
function FindResultsComponent_div_4_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FindResultsComponent_div_4_4_ng_template_0_Template, 1, 1, "ng-template");
} }
function FindResultsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function FindResultsComponent_div_4_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.searchMode = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FindResultsComponent_div_4_p_1_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FindResultsComponent_div_4_div_3_Template, 8, 5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FindResultsComponent_div_4_4_Template, 1, 0, undefined, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.searchResults.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.searchResults);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.searchResults.length);
} }
function FindResultsComponent_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FindResultsComponent_div_5_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.previewShowEnriched.network);
} }
function FindResultsComponent_div_5_ng_container_15_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.addAction);
} }
function FindResultsComponent_div_5_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindResultsComponent_div_5_ng_container_15_Template_p_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.subscribeToShow(ctx_r23.previewShow); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subscribe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FindResultsComponent_div_5_ng_container_15_span_3_Template, 2, 1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.addAction);
} }
const _c0 = function (a1) { return ["/shows", a1]; };
function FindResultsComponent_div_5_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subscribed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r18.previewShow.imdb_id));
} }
function FindResultsComponent_div_5_p_18_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FindResultsComponent_div_5_p_18_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.findPreviewShowTorrents(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Find Torrents");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FindResultsComponent_div_5_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.previewShowEnriched.status);
} }
function FindResultsComponent_div_5_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.previewShowEnriched.number_of_seasons, " Seasons");
} }
function FindResultsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "IMDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FindResultsComponent_div_5_div_10_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FindResultsComponent_div_5_span_11_Template, 3, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FindResultsComponent_div_5_ng_container_15_Template, 4, 1, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FindResultsComponent_div_5_ng_template_16_Template, 3, 3, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, FindResultsComponent_div_5_p_18_Template, 2, 0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FindResultsComponent_div_5_p_20_Template, 2, 1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FindResultsComponent_div_5_p_21_Template, 2, 1, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: url('", ctx_r2.previewShow.full_cover_url, "')");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.previewShow.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r2.previewShow.imdb_link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.previewShowEnriched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.previewShowEnriched == null ? null : ctx_r2.previewShowEnriched.network);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.previewShow.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.previewShow.subscribed)("ngIfElse", _r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.addLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.previewShowEnriched == null ? null : ctx_r2.previewShowEnriched.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.previewShowEnriched == null ? null : ctx_r2.previewShowEnriched.number_of_seasons);
} }
function FindResultsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vestibule-show-torrent", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const torrent_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTorrent", torrent_r27);
} }
class FindResultsComponent {
    constructor(router, fb, showsService) {
        this.router = router;
        this.fb = fb;
        this.showsService = showsService;
        this.searchResults = [];
        this.term = '';
        this.searchTerm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.searchTerm$ = this.searchTerm.asObservable();
        this.loading = false;
        this.searchMode = true;
        this.addLoading = false;
        this.addError = false;
        this.findForm = this.fb.group({
            term: ['', []]
        });
    }
    ngOnInit() {
        var _a;
        this.searchOutput = this.searchTerm$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(600)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((searchTerm) => {
            return this.showsService.searchShowByTitle(searchTerm);
        }));
        this.searchOutput.subscribe((data) => {
            this.searchResults = data.results;
            this.loading = false;
        });
        if ((_a = history.state.data) === null || _a === void 0 ? void 0 : _a.term) {
            this.findForm.controls['term'].setValue(history.state.data.term);
            this.onSearchChange(history.state.data.term);
        }
    }
    onSearchChange(searchTerm) {
        if (searchTerm.length < 1) {
            this.searchResults = [];
        }
        else {
            this.loading = true;
            this.searchTerm.next(searchTerm);
        }
    }
    setPreviewShow(show) {
        var _a;
        this.searchMode = false;
        if (((_a = this.previewShow) === null || _a === void 0 ? void 0 : _a.imdb_id) === show.imdb_id) {
            return;
        }
        this.previewShow = show;
        this.previewShowEnriched = undefined;
        this.previewShowTorrents = undefined;
        this.showsService.enrichShowInfo(show.imdb_id).subscribe(data => this.previewShowEnriched = data);
    }
    findPreviewShowTorrents() {
        this.showsService.findPreviewShowTorrents(this.previewShow.imdb_id).subscribe(data => this.previewShowTorrents = data.results.map(torrent => {
            return {
                showTitle: this.previewShow.title,
                seasonNumber: torrent.season,
                episodeNumber: torrent.episode,
                publicationTime: `${torrent.publication_time}`,
                feed: torrent.feed,
                quality: torrent.video_quality,
                sourceType: torrent.source,
                torrentTitle: torrent.raw_title,
                torrentLink: torrent.link,
                isStandaloneTorrent: true,
                downloadStatus: _torrents_torrent__WEBPACK_IMPORTED_MODULE_3__["TorrentDownloadStatus"].NEVER_STARTED,
                percentDone: 0
            };
        }));
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
FindResultsComponent.ɵfac = function FindResultsComponent_Factory(t) { return new (t || FindResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_6__["ShowsService"])); };
FindResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FindResultsComponent, selectors: [["vestibule-find-results"]], decls: 8, vars: 4, consts: [[1, "find-form", 3, "formGroup", "mouseover"], ["alt", "Find", "src", "/static/images/find_icon.svg", 1, "find-icon"], ["formControlName", "term", "placeholder", "Find", 3, "input"], ["searchInput", ""], ["class", "search-results", 3, "mouseleave", 4, "ngIf"], ["id", "preview-selected-show", 4, "ngIf"], [1, "torrents-wrapper"], [4, "ngFor", "ngForOf"], [1, "search-results", 3, "mouseleave"], ["class", "title", 4, "ngIf"], [1, "results"], ["class", "search-result-wrapper", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "title"], [1, "search-result-wrapper", 3, "click"], [1, "poster-wrapper"], [1, "data"], [1, "year"], [1, "show-title"], ["id", "preview-selected-show"], [1, "poster-wrap"], [1, "year-imdb"], ["target", "_blank", 1, "imdb-link", 3, "href"], [1, "bullet"], ["class", "loading-enriched", 4, "ngIf"], [1, "show-actions"], [4, "ngIf", "ngIfElse"], ["subscribed", ""], ["class", "action fins-torrents", 3, "click", 4, "ngIf"], [1, "enriched-data"], ["class", "tag", 4, "ngIf"], [1, "loading-enriched"], ["src", "/static/images/loading_circle.svg", "alt", "Loading"], [1, "action", "subscription", 3, "click"], ["class", "add-action", 4, "ngIf"], [1, "add-action"], [3, "routerLink"], [1, "action", "subscription"], [1, "action", "fins-torrents", 3, "click"], [1, "tag"], [3, "showTorrent"]], template: function FindResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function FindResultsComponent_Template_form_mouseover_0_listener() { return ctx.searchMode = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FindResultsComponent_Template_input_input_2_listener($event) { return ctx.onSearchChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FindResultsComponent_div_4_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FindResultsComponent_div_5_Template, 22, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FindResultsComponent_div_7_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.findForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchMode && ctx.searchResults.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.previewShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.previewShowTorrents);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_8__["ShowTorrentComponent"]], styles: ["@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.find-form[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0.5rem 0 1rem 0;\n}\n.find-form[_ngcontent-%COMP%]   .find-icon[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  display: inline-block;\n  margin-right: 1rem;\n}\n.find-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 2em;\n  margin-top: -6px;\n}\n.imdb-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 8px;\n  font-weight: 100;\n  color: #a4a5a0;\n  transition: 0.2s;\n}\n.imdb-link[_ngcontent-%COMP%]:hover {\n  color: #ccab21;\n}\n.loading-enriched[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.loading-enriched[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 0.9rem;\n  animation-name: spin;\n  animation-duration: 5000ms;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n}\n.search-results[_ngcontent-%COMP%] {\n  position: absolute;\n  transition: 0.3s;\n  border: solid 3px #333;\n  border-top: none;\n  background-color: #e3e4db;\n  border-radius: 0 0 1.5rem 1.5rem;\n  padding: 0.5rem 0.5rem 0;\n  width: 75%;\n  max-width: 80rem;\n  z-index: 10;\n}\n.search-results[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 0.8rem;\n  font-size: 0.9em;\n  color: #747470;\n}\n.search-results.blur[_ngcontent-%COMP%] {\n  filter: blur(12px);\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 0 0.5rem 0.5rem 0;\n  float: left;\n  height: 2.5rem;\n  background-color: #e3e4db;\n  border-radius: 1.25rem;\n  padding: 0 1rem 0 0.25rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .poster-wrapper[_ngcontent-%COMP%] {\n  height: 2.15rem;\n  width: 2.15rem;\n  border-radius: 50%;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: 100%;\n  opacity: 0.8;\n  background-color: rgba(128, 128, 128, 0.3);\n  margin: 0.15rem 0.5rem 0 0;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  padding-top: 0.1rem;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-weight: inherit;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  color: #747470;\n  font-size: 0.75em;\n  font-weight: 100;\n}\n.search-results[_ngcontent-%COMP%]   .results[_ngcontent-%COMP%]   .search-result-wrapper[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-title[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n#preview-selected-show[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  margin-top: 2rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .poster-wrap[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: 15rem;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  border-radius: 0.3rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  position: relative;\n  margin-left: 2rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0.5rem 0 1.5rem;\n  font-weight: 500;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  bottom: 0;\n  min-width: 20rem;\n  padding-bottom: 0.2rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .add-action[_ngcontent-%COMP%] {\n  font-weight: 100;\n  display: inline-block;\n  margin-right: 1rem;\n  padding-top: 0.1rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  border-bottom: 3px solid;\n  padding-bottom: 5px;\n  font-size: 1.1em;\n  transition: 0.2s;\n  cursor: pointer;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.subscription[_ngcontent-%COMP%] {\n  border-color: #3f9359;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.subscription[_ngcontent-%COMP%]:hover {\n  color: #3f9359;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.fins-torrents[_ngcontent-%COMP%] {\n  border-color: #0071bc;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .show-actions[_ngcontent-%COMP%]   .action.fins-torrents[_ngcontent-%COMP%]:hover {\n  color: #0071bc;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .enriched-data[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 2rem;\n}\n#preview-selected-show[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .enriched-data[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  background-color: #bfbfb8;\n  border-radius: 0.75rem;\n  padding: 0 0.5rem;\n  margin-right: 0.5rem;\n}\n.torrents-wrapper[_ngcontent-%COMP%] {\n  margin: 3rem 3rem 0 0;\n  overflow-x: scroll;\n  height: calc(100vh - 30rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmluZC9maW5kLXJlc3VsdHMvZmluZC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSTtJQUNJLHVCQUFBO0VBRE47RUFHRTtJQUNJLHlCQUFBO0VBRE47QUFDRjtBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBRkY7QUFJRTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRko7QUFLRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUhKO0FBUUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ3BCVztFRHFCWCxnQkFBQTtBQUxGO0FBT0U7RUFDRSxjQUFBO0FBTEo7QUFTQTtFQUNFLHFCQUFBO0FBTkY7QUFRRTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtBQU5KO0FBVUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFQSjtBQVNFO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDdERjO0FEK0NsQjtBQVVFO0VBQ0Usa0JBQUE7QUFSSjtBQWFJO0VBQ0UsYUFBQTtBQVhOO0FBY0k7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBWk47QUFjTTtFQUNFLGVBQUE7QUFaUjtBQWVNO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0FBYlI7QUFnQk07RUFDRSxtQkFBQTtBQWRSO0FBZ0JRO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBZFY7QUFpQlE7RUFDRSxjQ3RHUTtFRHVHUixpQkFBQTtFQUNBLGdCQUFBO0FBZlY7QUFrQlE7RUFDRSxnQkFBQTtBQWhCVjtBQXVCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7QUFzQkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0FBcEJKO0FBdUJFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQXJCSjtBQXVCSTtFQUNFLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQXJCTjtBQXdCSTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBdEJOO0FBd0JNO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF0QlI7QUF5Qk07RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXZCUjtBQXlCUTtFQUNFLHFCQzFLRztBRG1KYjtBQXlCVTtFQUNFLGNDN0tDO0FEc0piO0FBMkJRO0VBQ0UscUJDL0tNO0FEc0poQjtBQTJCVTtFQUNFLGNDbExJO0FEeUpoQjtBQStCSTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQTdCTjtBQStCTTtFQUNFLGNBQUE7RUFDQSx5QkM1TFM7RUQ2TFQsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBN0JSO0FBbUNBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBaENGIiwiZmlsZSI6InNyYy9hcHAvZmluZC9maW5kLXJlc3VsdHMvZmluZC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuLmZpbmQtZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMC41cmVtIDAgMXJlbSAwO1xuXG4gIC5maW5kLWljb24ge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIH1cblxuICBpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbiAgfVxufVxuXG5cbi5pbWRiLWxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGNvbG9yOiAkdW5zZWxlY3RlZDtcbiAgdHJhbnNpdGlvbjogMC4ycztcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDIwNCwgMTcxLCAzMyk7XG4gIH1cbn1cblxuLmxvYWRpbmctZW5yaWNoZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDAuOXJlbTtcbiAgICBhbmltYXRpb24tbmFtZTogc3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMDBtcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIH1cbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBib3JkZXI6IHNvbGlkIDNweCAjMzMzO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRkYjtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMS41cmVtIDEuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDA7XG4gICAgd2lkdGg6IDc1JTtcbiAgICBtYXgtd2lkdGg6IDgwcmVtO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gIC50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC44cmVtO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gIH1cblxuICAmLmJsdXIge1xuICAgIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgfVxuXG4gIC5yZXN1bHRzIHtcblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1yZXN1bHQtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIG1hcmdpbjogMCAwLjVyZW0gMC41cmVtIDA7XG4gICAgICBmbG9hdDogbGVmdDtcbiAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRkYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgICBwYWRkaW5nOiAwIDFyZW0gMCAwLjI1cmVtO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAucG9zdGVyLXdyYXBwZXIge1xuICAgICAgICBoZWlnaHQ6IDIuMTVyZW07XG4gICAgICAgIHdpZHRoOiAyLjE1cmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4zKTtcbiAgICAgICAgbWFyZ2luOiAwLjE1cmVtIDAuNXJlbSAwIDA7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuMXJlbTtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC55ZWFyIHtcbiAgICAgICAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgICAgICAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNob3ctdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuI3ByZXZpZXctc2VsZWN0ZWQtc2hvdyB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gIC5wb3N0ZXItd3JhcCB7XG4gICAgd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogMTVyZW07XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNyZW07XG4gIH1cblxuICAuZGF0YSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgbWFyZ2luOiAwLjVyZW0gMCAxLjVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cblxuICAgIC5zaG93LWFjdGlvbnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC4ycmVtO1xuXG4gICAgICAuYWRkLWFjdGlvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC4xcmVtO1xuICAgICAgfVxuXG4gICAgICAuYWN0aW9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgICAgIHRyYW5zaXRpb246IDAuMnM7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmLnN1YnNjcmlwdGlvbiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdmFsdWUtdHJ1ZTtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR2YWx1ZS10cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYuZmlucy10b3JyZW50cyB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkdmFsdWUtbmV1dHJhbDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6ICR2YWx1ZS1uZXV0cmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lbnJpY2hlZC1kYXRhIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xuXG4gICAgICAudGFnIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWJhY2stZGFyaztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udG9ycmVudHMtd3JhcHBlciB7XG4gIG1hcmdpbjogM3JlbSAzcmVtIDAgMDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAzMHJlbSk7XG59XG4iLCIkbWFpbi1jb2xvcjogI2UzZTRkYjtcbiRzZWNvbmRhcnktY29sb3I6ICNDOEM5QzA7XG4kdHJhbnNwYXJlbnQtbGlnaHQ6ICNlMWUyZDY2NjtcbiR0cmFuc3BhcmVudC1zZW1pLWxpZ2h0OiByZ2JhKDIyNSwgMjI2LCAyMTQsIDAuNjUpO1xuJHRvcnJlbnQtZ3JlZW46ICM1MGFkNmY7XG4kdG9ycmVudC1ncmVlbi1ob3ZlcjogIzJlNzI0MztcbiR2YWx1ZS10cnVlLWhvdmVyOiAjMjA2ZjM4O1xuJHZhbHVlLXRydWU6ICMzZjkzNTk7XG4kdmFsdWUtZmFsc2U6ICNBRjRGNjg7XG4kdmFsdWUtZmFsc2UtaG92ZXI6ICM5NzI5NDU7XG4kdmFsdWUtbmV1dHJhbDogIzAwNzFiYztcbiRtYWluLWJhY2s6ICNlM2U0ZGI7XG4kbWFpbi1iYWNrLWRhcms6ICNiZmJmYjg7XG4kbWFpbi1iYWNrLWRhcmstdHJhbnNwYXJlbnQ6IHJnYmEoMTkxLCAxOTEsIDE4NCwgMC41KTtcbiR1bnNlbGVjdGVkOiAjYTRhNWEwO1xuJHVuc2VsZWN0ZWQtZGFyazogIzc0NzQ3MDtcbiR1bnNlbGVjdGVkLXRyYW5zcGFyZW50OiByZ2JhKDE2NCwgMTY1LCAxNjAsIDAuMik7XG4kc2tpcDogI2VkYmYzYjtcbiRibGFjazogIzMzMztcbiRsaWdodC10ZXh0OiAjZDJkM2M3O1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FindResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-find-results',
                templateUrl: './find-results.component.html',
                styleUrls: ['./find-results.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _shows_shows_service__WEBPACK_IMPORTED_MODULE_6__["ShowsService"] }]; }, null); })();


/***/ }),

/***/ "mcJH":
/*!*********************************************!*\
  !*** ./src/app/torrents/torrents.module.ts ***!
  \*********************************************/
/*! exports provided: TorrentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorrentsModule", function() { return TorrentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _torrents_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./torrents-routing.module */ "V8BD");




class TorrentsModule {
}
TorrentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TorrentsModule });
TorrentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TorrentsModule_Factory(t) { return new (t || TorrentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _torrents_routing_module__WEBPACK_IMPORTED_MODULE_2__["TorrentsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TorrentsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _torrents_routing_module__WEBPACK_IMPORTED_MODULE_2__["TorrentsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorrentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _torrents_routing_module__WEBPACK_IMPORTED_MODULE_2__["TorrentsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sc8Y":
/*!**********************************************!*\
  !*** ./src/app/torrents/torrents.service.ts ***!
  \**********************************************/
/*! exports provided: TorrentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TorrentsService", function() { return TorrentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class TorrentsService {
    constructor(http) {
        this.http = http;
    }
    downloadShowTorrent(torrentID) {
        return this.http.get(`api/torrents/download/${torrentID}`);
    }
}
TorrentsService.ɵfac = function TorrentsService_Factory(t) { return new (t || TorrentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TorrentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TorrentsService, factory: TorrentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TorrentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vDqY":
/*!***********************************************!*\
  !*** ./src/app/shows/shows-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ShowsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowsRoutingModule", function() { return ShowsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shows-list/shows-list.component */ "jnt5");
/* harmony import */ var _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-details/show-details.component */ "Chnw");






const routes = [
    { path: 'shows', component: _shows_list_shows_list_component__WEBPACK_IMPORTED_MODULE_2__["ShowsListComponent"] },
    { path: 'shows/:imdb_id', component: _show_details_show_details_component__WEBPACK_IMPORTED_MODULE_3__["ShowDetailsComponent"] },
];
class ShowsRoutingModule {
}
ShowsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ShowsRoutingModule });
ShowsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ShowsRoutingModule_Factory(t) { return new (t || ShowsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ShowsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");





const routes = [
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vYL3":
/*!***************************************************************!*\
  !*** ./src/app/shared/show-torrent/show-torrent.component.ts ***!
  \***************************************************************/
/*! exports provided: ShowTorrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTorrentComponent", function() { return ShowTorrentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _torrents_torrent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../torrents/torrent */ "edMa");
/* harmony import */ var _torrents_torrents_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../torrents/torrents.service */ "sc8Y");
/* harmony import */ var _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../panel/services-status/services-status.service */ "4Kh+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ShowTorrentComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" E", ctx_r0.torrent.episodeNumber, "");
} }
function ShowTorrentComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.torrent.downloadStatus);
} }
function ShowTorrentComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("width: ", ctx_r2.torrent.percentDone, "%");
} }
function ShowTorrentComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.torrent.feed);
} }
function ShowTorrentComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.torrent.sourceType);
} }
function ShowTorrentComponent_div_19_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.torrent.quality);
} }
function ShowTorrentComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentComponent_div_19_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleMoreDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ShowTorrentComponent_div_19_div_4_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("x-mode", ctx_r5.moreDetailsMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.torrent.quality);
} }
function ShowTorrentComponent_ng_template_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r11.torrent.torrentLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ShowTorrentComponent_ng_template_20_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.torrent.torrentTitle);
} }
function ShowTorrentComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ShowTorrentComponent_ng_template_20_div_2_Template, 3, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ShowTorrentComponent_ng_template_20_div_3_Template, 2, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.torrent.torrentLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.torrent.torrentTitle);
} }
const _c0 = function (a0, a1, a2) { return { download_disabled: a0, downloading: a1, done: a2 }; };
class ShowTorrentComponent {
    constructor(torrentsService, servicesStatusService) {
        this.torrentsService = torrentsService;
        this.servicesStatusService = servicesStatusService;
        this.torrentChanged = false;
        this.moreDetailsMode = false;
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
            else if (this.torrent.downloadStatus !== _torrents_torrent__WEBPACK_IMPORTED_MODULE_1__["TorrentDownloadStatus"].NEVER_STARTED) {
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
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_1__["TorrentDownloadStatus"].STOPPED:
                this.statusIconName = 'stopped';
                this.isDone = true;
                break;
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_1__["TorrentDownloadStatus"].READY:
                this.statusIconName = 'upload';
                this.isDone = true;
                break;
            case _torrents_torrent__WEBPACK_IMPORTED_MODULE_1__["TorrentDownloadStatus"].DOWNLOADING:
                this.statusIconName = 'download';
                this.isDownloading = true;
                break;
            default:
                this.statusIconName = 'download';
        }
    }
    toggleMoreDetails() {
        this.moreDetailsMode = !this.moreDetailsMode;
    }
    downloadTorrent() {
        if (!this.canDownload) {
            return;
        }
        if (!this.torrent.isStandaloneTorrent) {
            this.torrentsService.downloadShowTorrent(this.torrent.torrentId).subscribe(data => {
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
ShowTorrentComponent.ɵfac = function ShowTorrentComponent_Factory(t) { return new (t || ShowTorrentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_torrents_torrents_service__WEBPACK_IMPORTED_MODULE_2__["TorrentsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_3__["ServicesStatusService"])); };
ShowTorrentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowTorrentComponent, selectors: [["vestibule-show-torrent"]], inputs: { showTorrent: "showTorrent" }, decls: 22, vars: 17, consts: [[1, "torrent-cont"], [1, "torrent-title-cont"], [1, "torrent-title"], [4, "ngIf"], [1, "torrent-publication-time"], [1, "torrent-details-cont"], [1, "torrent-actions-cont"], [1, "torrent-action", "action-download", 3, "click"], [1, "icon-wrap"], [3, "src"], ["class", "download-status", 4, "ngIf"], ["class", "download-progress", 4, "ngIf"], [1, "torrent-info-cont"], [1, "torrent-tags"], ["class", "tag feed-tag", 4, "ngIf"], ["class", "tag source-type-tag", 4, "ngIf"], ["class", "torrent-base-details-cont", 3, "click", 4, "ngIf", "ngIfElse"], ["moreDetails", ""], [1, "download-status"], [1, "download-progress"], [1, "bar"], [1, "tag", "feed-tag"], [1, "tag", "source-type-tag"], [1, "torrent-base-details-cont", 3, "click"], [1, "torrent-action", "action-plus"], ["src", "/static/images/plus_icon.svg"], ["class", "tag quality-tag", 4, "ngIf"], [1, "tag", "quality-tag"], [1, "torrent-more-details-cont"], ["class", "tag torrent-link", 4, "ngIf"], ["class", "tag torrent-full-name", 4, "ngIf"], [1, "tag", "torrent-link"], ["target", "_blank", 3, "href"], [1, "tag", "torrent-full-name"]], template: function ShowTorrentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ShowTorrentComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentComponent_Template_div_click_10_listener() { return ctx.downloadTorrent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ShowTorrentComponent_p_13_Template, 2, 1, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ShowTorrentComponent_div_14_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ShowTorrentComponent_div_17_Template, 2, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ShowTorrentComponent_div_18_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ShowTorrentComponent_div_19_Template, 5, 3, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ShowTorrentComponent_ng_template_20_Template, 4, 2, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.torrent.showTitle, " S", ctx.torrent.seasonNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.torrent.episodeNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.torrent.publicationTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](13, _c0, !ctx.canDownload, ctx.isDownloading, ctx.isDone));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/static/images/", ctx.statusIconName, "_icon.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDownloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.torrent.feed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.torrent.sourceType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.moreDetailsMode)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".torrent-cont[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  padding: 0.5rem 0;\n  border-bottom: 3px solid #333;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%] {\n  display: flex;\n  margin-right: 0.5rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%] {\n  min-width: 2.6rem;\n  height: 1.2rem;\n  text-align: center;\n  transition: 0.3s;\n  border-radius: 0.6rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%] {\n  padding: 0 0.3rem;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .torrent-action[_ngcontent-%COMP%]   .icon-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: 0.2s;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  cursor: pointer;\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.download_disabled[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n  background-color: #a4a5a0;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.download_disabled[_ngcontent-%COMP%]:hover {\n  background-color: #972945;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.downloading[_ngcontent-%COMP%] {\n  width: 6rem;\n  cursor: auto;\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.downloading[_ngcontent-%COMP%]:hover {\n  background-color: #50ad6f;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.done[_ngcontent-%COMP%] {\n  cursor: auto;\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download.done[_ngcontent-%COMP%]:hover {\n  background-color: #2e7243;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-status[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 0 0.6rem 0 0;\n  color: #e3e4db;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 0.3rem;\n  margin: 0.5rem 0.5rem 0 0;\n  background-color: #e3e4db;\n  border-radius: 0.15rem;\n  position: relative;\n}\n\n.torrent-actions-cont[_ngcontent-%COMP%]   .action-download[_ngcontent-%COMP%]   .download-progress[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  border-radius: inherit;\n  background-color: #2e7243;\n}\n\n.action-plus[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-color: #c8c9c0;\n  width: 2.6rem;\n  height: 1.2rem;\n  text-align: right;\n  transition: 0.3s;\n  border-radius: 0.6rem;\n  position: absolute;\n  right: -1.5rem;\n  z-index: -1;\n  padding-right: 0.25rem;\n}\n\n.action-plus[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  transition: 0.2s;\n}\n\n.x-mode[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n\n.torrent-details-cont[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0.5rem 0;\n}\n\n.torrent-title-cont[_ngcontent-%COMP%]   .torrent-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n\n.torrent-title-cont[_ngcontent-%COMP%]   .torrent-publication-time[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 1rem;\n  font-weight: 100;\n  font-size: 0.8em;\n  color: #747470;\n}\n\n.torrent-info-cont[_ngcontent-%COMP%] {\n  display: flex;\n  color: #d2d3c7;\n}\n\n.torrent-base-details-cont[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.torrent-tags[_ngcontent-%COMP%] {\n  display: flex;\n  height: 1.2rem;\n  margin-right: 0.5rem;\n}\n\n.torrent-tags[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.tag[_ngcontent-%COMP%] {\n  background-color: #d2d3c7;\n  font-size: 0.8em;\n  padding: 0 0.5rem;\n}\n\n.tag[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.6rem 0 0 0.6rem;\n}\n\n.tag[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.6rem 0.6rem 0;\n}\n\n.tag[_ngcontent-%COMP%]:only-child {\n  border-radius: 0.6rem;\n}\n\n.tag.feed-tag[_ngcontent-%COMP%] {\n  background-color: #c8c9c0;\n}\n\n.tag.quality-tag[_ngcontent-%COMP%] {\n  background-color: #29abe2;\n}\n\n.tag.source-type-tag[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n}\n\n.tag.torrent-link[_ngcontent-%COMP%] {\n  background-color: #a4a5a0;\n}\n\n.tag.torrent-full-name[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  font-weight: 100;\n  padding-top: 2px;\n  max-width: 24rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Nob3ctdG9ycmVudC9zaG93LXRvcnJlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvc3R5bGluZy92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLG9CQUFBO0FBREY7O0FBR0U7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFHSTtFQUNFLGlCQUFBO0FBRE47O0FBRU07RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7QUFBUjs7QUFLRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkM1Qlk7QUR5QmhCOztBQUtJO0VBQ0UseUJDOUJnQjtBRDJCdEI7O0FBTUk7RUFDRSxtQkFBQTtFQUNBLHlCQzFCTztBRHNCYjs7QUFNTTtFQUNFLHlCQ2xDWTtBRDhCcEI7O0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzlDVTtBRHdDaEI7O0FBUU07RUFDRSx5QkNqRFE7QUQyQ2hCOztBQVVJO0VBQ0UsWUFBQTtFQUNBLHlCQ3REZ0I7QUQ4Q3RCOztBQVVNO0VBQ0UseUJDekRjO0FEaUR0Qjs7QUFZSTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQzFETTtBRGdEWjs7QUFhSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFYTjs7QUFhTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJDL0VjO0FEb0V0Qjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQWRGOztBQWdCRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWtCQTtFQUNFLHdCQUFBO0FBZkY7O0FBa0JBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0FBZkY7O0FBbUJFO0VBQ0UsZ0JBQUE7QUFoQko7O0FBbUJFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQ2pIYztBRGdHbEI7O0FBcUJBO0VBQ0UsYUFBQTtFQUNBLGNDbkhXO0FEaUdiOztBQXFCQTtFQUNFLGtCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFsQkY7O0FBb0JFO0VBQ0UsZUFBQTtBQWxCSjs7QUFzQkE7RUFDRSx5QkNySVc7RURzSVgsZ0JBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFxQkU7RUFDRSxnQ0FBQTtBQW5CSjs7QUFzQkU7RUFDRSxnQ0FBQTtBQXBCSjs7QUF1QkU7RUFDRSxxQkFBQTtBQXJCSjs7QUF3QkU7RUFDRSx5QkFBQTtBQXRCSjs7QUF5QkU7RUFDRSx5QkFBQTtBQXZCSjs7QUEwQkU7RUFDRSx5QkFBQTtBQXhCSjs7QUEyQkU7RUFDRSx5QkN2S1M7QUQ4SWI7O0FBNEJFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3Nob3ctdG9ycmVudC9zaG93LXRvcnJlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGluZy92YXJpYWJsZXNcIjtcblxuLnRvcnJlbnQtY29udCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgcGFkZGluZzogMC41cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAkYmxhY2s7XG59XG5cbi50b3JyZW50LWFjdGlvbnMtY29udCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuXG4gIC50b3JyZW50LWFjdGlvbiB7XG4gICAgbWluLXdpZHRoOiAyLjZyZW07XG4gICAgaGVpZ2h0OiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtO1xuXG4gICAgLmljb24td3JhcCB7XG4gICAgICBwYWRkaW5nOiAwIDAuM3JlbTtcbiAgICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWN0aW9uLWRvd25sb2FkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdG9ycmVudC1ncmVlbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgfVxuXG4gICAgJi5kb3dubG9hZF9kaXNhYmxlZCB7XG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuc2VsZWN0ZWQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdmFsdWUtZmFsc2UtaG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5kb3dubG9hZGluZyB7XG4gICAgICB3aWR0aDogNnJlbTtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5kb25lIHtcbiAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0b3JyZW50LWdyZWVuLWhvdmVyO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXN0YXR1cyB7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgcGFkZGluZzogMCAwLjZyZW0gMCAwO1xuICAgICAgY29sb3I6ICRtYWluLWJhY2s7XG4gICAgfVxuXG4gICAgLmRvd25sb2FkLXByb2dyZXNzIHtcbiAgICAgIHdpZHRoOiA0cmVtO1xuICAgICAgaGVpZ2h0OiAwLjNyZW07XG4gICAgICBtYXJnaW46IDAuNXJlbSAwLjVyZW0gMCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZTRkYjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMTVyZW07XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgIC5iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRvcnJlbnQtZ3JlZW4taG92ZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmFjdGlvbi1wbHVzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOWMwO1xuICB3aWR0aDogMi42cmVtO1xuICBoZWlnaHQ6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDAuNnJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTEuNXJlbTtcbiAgei1pbmRleDogLTE7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMjVyZW07XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxufVxuXG4ueC1tb2RlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4udG9ycmVudC1kZXRhaWxzLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwLjVyZW0gMDtcbn1cblxuLnRvcnJlbnQtdGl0bGUtY29udCB7XG4gIC50b3JyZW50LXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICB9XG5cbiAgLnRvcnJlbnQtcHVibGljYXRpb24tdGltZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb2xvcjogJHVuc2VsZWN0ZWQtZGFyaztcbiAgfVxufVxuXG4udG9ycmVudC1pbmZvLWNvbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogJGxpZ2h0LXRleHQ7XG59XG5cbi50b3JyZW50LWJhc2UtZGV0YWlscy1jb250IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udG9ycmVudC10YWdzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxLjJyZW07XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG59XG5cbi50YWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtdGV4dDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMCAwLjVyZW07XG5cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogMC42cmVtIDAgMCAwLjZyZW07XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgMC42cmVtIDAuNnJlbSAwO1xuICB9XG5cbiAgJjpvbmx5LWNoaWxkIHtcbiAgICBib3JkZXItcmFkaXVzOiAwLjZyZW07XG4gIH1cblxuICAmLmZlZWQtdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOWMwO1xuICB9XG5cbiAgJi5xdWFsaXR5LXRhZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5YWJlMjtcbiAgfVxuXG4gICYuc291cmNlLXR5cGUtdGFnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTRhNWEwO1xuICB9XG5cbiAgJi50b3JyZW50LWxpbmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bnNlbGVjdGVkO1xuICB9XG5cbiAgJi50b3JyZW50LWZ1bGwtbmFtZSB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgbWF4LXdpZHRoOiAyNHJlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowTorrentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-torrent',
                templateUrl: './show-torrent.component.html',
                styleUrls: ['./show-torrent.component.scss']
            }]
    }], function () { return [{ type: _torrents_torrents_service__WEBPACK_IMPORTED_MODULE_2__["TorrentsService"] }, { type: _panel_services_status_services_status_service__WEBPACK_IMPORTED_MODULE_3__["ServicesStatusService"] }]; }, { showTorrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zwgI":
/*!**********************************************************************************************!*\
  !*** ./src/app/shows/show-torrents/show-torrents-section/show-torrents-section.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ShowTorrentsSectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowTorrentsSectionComponent", function() { return ShowTorrentsSectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/show-torrent/show-torrent.component */ "vYL3");




function ShowTorrentsSectionComponent_ng_container_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "vestibule-show-torrent", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const torrent_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showTorrent", torrent_r3);
} }
function ShowTorrentsSectionComponent_ng_container_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ShowTorrentsSectionComponent_ng_container_0_div_8_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.torrentsDetails());
} }
function ShowTorrentsSectionComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ShowTorrentsSectionComponent_ng_container_0_Template_p_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleListOpen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ShowTorrentsSectionComponent_ng_container_0_div_8_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("matching-torrents", ctx_r0.matchingTorrents);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.torrents.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.openList ? "Hide" : "Show", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openList);
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
ShowTorrentsSectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShowTorrentsSectionComponent, selectors: [["vestibule-show-torrents-section"]], inputs: { title: "title", defaultOpen: "defaultOpen", matchingTorrents: "matchingTorrents", torrents: "torrents", show: "show", season: "season", episode: "episode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "torrents-section-header"], [3, "click"], [1, "torrents-count"], [1, "list-action"], ["class", "torrents-section-list", 4, "ngIf"], [1, "torrents-section-list"], ["class", "torrent-cont", 4, "ngFor", "ngForOf"], [1, "torrent-cont"], [3, "showTorrent"]], template: function ShowTorrentsSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ShowTorrentsSectionComponent_ng_container_0_Template, 9, 6, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.torrents.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_show_torrent_show_torrent_component__WEBPACK_IMPORTED_MODULE_2__["ShowTorrentComponent"]], styles: [".torrents-section-header[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  font-weight: 100;\n  transition: 0.3s;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: #747470;\n  transition: inherit;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover {\n  color: #333;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover   .torrents-count.matching-torrents[_ngcontent-%COMP%] {\n  color: #3f9359;\n}\n.torrents-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover   .list-action[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.torrents-section-header[_ngcontent-%COMP%]   .torrents-count[_ngcontent-%COMP%] {\n  color: #a4a5a0;\n  transition: inherit;\n  display: inline-block;\n  margin-left: 0.5rem;\n}\n.torrents-section-header[_ngcontent-%COMP%]   .list-action[_ngcontent-%COMP%] {\n  transition: inherit;\n  color: #747470;\n  display: inline-block;\n  margin-left: 0.5rem;\n  opacity: 0.3;\n  font-weight: 100;\n}\n.torrents-section-list[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvd3Mvc2hvdy10b3JyZW50cy9zaG93LXRvcnJlbnRzLXNlY3Rpb24vc2hvdy10b3JyZW50cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL3N0eWxpbmcvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLGNDS2M7RURKZCxtQkFBQTtBQUZKO0FBSUk7RUFDRSxXQ0lFO0FETlI7QUFJTTtFQUNFLGNDVks7QURRYjtBQUtNO0VBQ0UsWUFBQTtBQUhSO0FBUUU7RUFDRSxjQ2JTO0VEY1QsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTko7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsY0NwQmM7RURxQmQscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVBKO0FBV0E7RUFDRSxvQkFBQTtBQVJGIiwiZmlsZSI6InNyYy9hcHAvc2hvd3Mvc2hvdy10b3JyZW50cy9zaG93LXRvcnJlbnRzLXNlY3Rpb24vc2hvdy10b3JyZW50cy1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxpbmcvdmFyaWFibGVzXCI7XG5cblxuLnRvcnJlbnRzLXNlY3Rpb24taGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIHRyYW5zaXRpb246IDAuM3M7XG5cbiAgcCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAkdW5zZWxlY3RlZC1kYXJrO1xuICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAkYmxhY2s7XG5cbiAgICAgIC50b3JyZW50cy1jb3VudC5tYXRjaGluZy10b3JyZW50cyB7XG4gICAgICAgIGNvbG9yOiAkdmFsdWUtdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtYWN0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50b3JyZW50cy1jb3VudCB7XG4gICAgY29sb3I6ICR1bnNlbGVjdGVkO1xuICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIH1cblxuICAubGlzdC1hY3Rpb24ge1xuICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgY29sb3I6ICR1bnNlbGVjdGVkLWRhcms7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgb3BhY2l0eTogMC4zO1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIH1cbn1cblxuLnRvcnJlbnRzLXNlY3Rpb24tbGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4udG9ycmVudC1jb250IHtcblxufVxuIiwiJG1haW4tY29sb3I6ICNlM2U0ZGI7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjQzhDOUMwO1xuJHRyYW5zcGFyZW50LWxpZ2h0OiAjZTFlMmQ2NjY7XG4kdHJhbnNwYXJlbnQtc2VtaS1saWdodDogcmdiYSgyMjUsIDIyNiwgMjE0LCAwLjY1KTtcbiR0b3JyZW50LWdyZWVuOiAjNTBhZDZmO1xuJHRvcnJlbnQtZ3JlZW4taG92ZXI6ICMyZTcyNDM7XG4kdmFsdWUtdHJ1ZS1ob3ZlcjogIzIwNmYzODtcbiR2YWx1ZS10cnVlOiAjM2Y5MzU5O1xuJHZhbHVlLWZhbHNlOiAjQUY0RjY4O1xuJHZhbHVlLWZhbHNlLWhvdmVyOiAjOTcyOTQ1O1xuJHZhbHVlLW5ldXRyYWw6ICMwMDcxYmM7XG4kbWFpbi1iYWNrOiAjZTNlNGRiO1xuJG1haW4tYmFjay1kYXJrOiAjYmZiZmI4O1xuJG1haW4tYmFjay1kYXJrLXRyYW5zcGFyZW50OiByZ2JhKDE5MSwgMTkxLCAxODQsIDAuNSk7XG4kdW5zZWxlY3RlZDogI2E0YTVhMDtcbiR1bnNlbGVjdGVkLWRhcms6ICM3NDc0NzA7XG4kdW5zZWxlY3RlZC10cmFuc3BhcmVudDogcmdiYSgxNjQsIDE2NSwgMTYwLCAwLjIpO1xuJHNraXA6ICNlZGJmM2I7XG4kYmxhY2s6ICMzMzM7XG4kbGlnaHQtdGV4dDogI2QyZDNjNztcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowTorrentsSectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'vestibule-show-torrents-section',
                templateUrl: './show-torrents-section.component.html',
                styleUrls: ['./show-torrents-section.component.scss']
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], defaultOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], matchingTorrents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], torrents: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], season: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], episode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map