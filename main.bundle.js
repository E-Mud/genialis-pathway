webpackJsonp([1,4],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pathway; });
var Pathway = (function () {
    function Pathway(fc) {
        this.mapContent = fc;
        this.reactions = fc[1].reactions;
        this.nodes = fc[1].nodes;
    }
    return Pathway;
}());

//# sourceMappingURL=pathway.js.map

/***/ }),

/***/ 211:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 211;


/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(241);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pathway_pathway_file_reader__ = __webpack_require__(239);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBar; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppBar = (function () {
    function AppBar() {
        this.onPathwayUploaded = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.onColorToggled = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    AppBar.prototype.fileChange = function (event) {
        var _this = this;
        var fileList = event.target.files;
        if (fileList.length > 0) {
            var file = fileList[0];
            __WEBPACK_IMPORTED_MODULE_1__pathway_pathway_file_reader__["a" /* PathwayFileReader */].readPathwayFile(file).then(function (pathway) {
                _this.onPathwayUploaded.emit(pathway);
            });
        }
    };
    AppBar.prototype.uploadFile = function () {
        this.fileInput.nativeElement.click();
    };
    AppBar.prototype.switchColor = function () {
        this.onColorToggled.emit();
    };
    return AppBar;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('fileinput'),
    __metadata("design:type", Object)
], AppBar.prototype, "fileInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], AppBar.prototype, "onPathwayUploaded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], AppBar.prototype, "onColorToggled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Boolean)
], AppBar.prototype, "showColorToggler", void 0);
AppBar = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-bar',
        styles: ["\n    .app-bar {\n      background-color: #1ABC9C;\n      height: 4rem;\n      box-shadow: 0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.3);\n    }\n  "],
        template: "\n    <div class=\"app-bar padding-base-horizontal\" fxLayout=\"row\" fxLayoutAlign=\"start center\">\n      <span fxFlex></span>\n      <input [hidden]=\"true\" type=\"file\" (change)=\"fileChange($event)\" accept=\".json\" #fileinput hidden/>\n      <div class=\"icon button\" (click)=\"switchColor()\" *ngIf=\"showColorToggler\">\n        <i class=\"material-icons white-text main-text\">&#xE891;</i>\n      </div>\n      <div class=\"icon button margin-base-left\" (click)=\"uploadFile()\">\n        <i class=\"material-icons white-text main-text\">&#xE2C6;</i>\n      </div>\n    </div>\n  "
    })
], AppBar);

//# sourceMappingURL=app-bar.component.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.currentColor = 'default';
    }
    AppComponent.prototype.changePathway = function (pathway) {
        this.currentPathway = pathway;
    };
    AppComponent.prototype.toggleColor = function () {
        this.currentColor = this.currentColor === 'default' ? 'green' : 'default';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        styles: ["\n    .app-component {\n      height: 100%;\n    }\n    .app-component .no-pathway-msg {\n      font-size: 2rem;\n    }\n  "],
        template: "\n    <div class=\"app-component\" fxLayout=\"column\">\n      <app-bar (onPathwayUploaded)=\"changePathway($event)\" (onColorToggled)=\"toggleColor()\" [showColorToggler]=\"!!currentPathway\"></app-bar>\n      <div fxFlex *ngIf=\"!currentPathway\" fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"no-pathway-msg secondary-text\">\n        <span>There is no loaded pathway. Click on Upload File to load one.</span>\n      </div>\n      <div fxFlex *ngIf=\"!!currentPathway\" class=\"padding-large-top\" fxLayout=\"row\">\n        <div class=\"padding-base\" fxFlex=\"20\">\n          <p class=\"secondary-text\">Node types</p>\n          <pathway-node-stats [pathway]=\"currentPathway\"></pathway-node-stats>\n        </div>\n        <pathway-map [pathway]=\"currentPathway\" [reactionColor]=\"currentColor\" fxFlex></pathway-map>\n      </div>\n    </div>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pathway_map_pathway_map_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pathway_node_stats_pathway_node_stats_component__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_bar_app_bar_component__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__toast_toast_component__ = __webpack_require__(240);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pathway_map_pathway_map_component__["a" /* PathwayMap */],
            __WEBPACK_IMPORTED_MODULE_7__pathway_node_stats_pathway_node_stats_component__["a" /* PathwayNodeStats */],
            __WEBPACK_IMPORTED_MODULE_8__app_bar_app_bar_component__["a" /* AppBar */],
            __WEBPACK_IMPORTED_MODULE_9__toast_toast_component__["a" /* Toast */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_escher_vis__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_escher_vis___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_escher_vis__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathwayMap; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathwayMap = PathwayMap_1 = (function () {
    function PathwayMap() {
        this.showingMessage = false;
    }
    PathwayMap.prototype.pathwayHasChanged = function (changes) {
        return !!changes['pathway'];
    };
    PathwayMap.prototype.loadMap = function (changes) {
        var newData = changes['pathway'].currentValue.mapContent;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_escher_vis__["Builder"])(newData, null, null, this.mapContainer.nativeElement, PathwayMap_1.BUILDER_OPTIONS);
    };
    PathwayMap.prototype.setReactionColor = function () {
        var _this = this;
        this.escherBuilder.selection.selectAll('svg.escher-svg .reaction .segment')
            .style('stroke', function () {
            return _this.reactionColor === 'green' ? PathwayMap_1.GREEN : null;
        });
    };
    PathwayMap.prototype.getNodeName = function (nodeId) {
        var node = this.pathway.nodes[nodeId];
        var name = node.node_id;
        if (node.name) {
            name += " (" + node.name + ")";
        }
        return name;
    };
    PathwayMap.prototype.showMessage = function (segment) {
        var fromNode = this.getNodeName(segment.from_node_id);
        var toNode = this.getNodeName(segment.to_node_id);
        this.showingMessage = true;
        this.toastMessage = "From " + fromNode + " to " + toNode;
    };
    PathwayMap.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.pathwayHasChanged(changes)) {
            this.escherBuilder = this.loadMap(changes);
        }
        this.setReactionColor();
        this.escherBuilder.selection.selectAll('.reaction .segment')
            .on('click', function (segment) { return _this.showMessage(segment); });
    };
    return PathwayMap;
}());
PathwayMap.GREEN = '#2ECC71';
PathwayMap.BUILDER_OPTIONS = {
    menu: 'zoom',
    fill_screen: false,
    use_3d_transform: true,
    enable_editing: false,
    never_ask_before_quit: true,
    enable_tooltips: true
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Object)
], PathwayMap.prototype, "pathway", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Object)
], PathwayMap.prototype, "reactionColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('mapcontainer'),
    __metadata("design:type", Object)
], PathwayMap.prototype, "mapContainer", void 0);
PathwayMap = PathwayMap_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'pathway-map',
        styles: ["\n    .pathway-map {\n      height: 100%;\n    }\n    .pathway-map .escher-container {\n      background-color: transparent;\n    }\n    :host /deep/ .segment {\n      cursor: pointer;\n    }\n  "],
        template: "\n    <div class=\"pathway-map\" fxLayout=\"column\">\n      <div #mapcontainer fxFlex></div>\n      <toast *ngIf=\"showingMessage\" [message]=\"toastMessage\"></toast>\n    </div>\n  "
    })
], PathwayMap);

var PathwayMap_1;
//# sourceMappingURL=pathway-map.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pathway_pathway__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathwayNodeStats; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PathwayNodeStats = (function () {
    function PathwayNodeStats() {
    }
    PathwayNodeStats.prototype.ngOnChanges = function (changes) {
        var pathway = changes['pathway'].currentValue;
        var nodeCount = {};
        for (var nodeId in pathway.nodes) {
            var nodeType = pathway.nodes[nodeId].node_type;
            if (!nodeCount[nodeType]) {
                nodeCount[nodeType] = 1;
            }
            else {
                nodeCount[nodeType]++;
            }
        }
        this.nodeCountByType = [];
        for (var nodeType in nodeCount) {
            this.nodeCountByType.push({ type: nodeType, count: nodeCount[nodeType] });
        }
    };
    return PathwayNodeStats;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__pathway_pathway__["a" /* Pathway */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__pathway_pathway__["a" /* Pathway */]) === "function" && _a || Object)
], PathwayNodeStats.prototype, "pathway", void 0);
PathwayNodeStats = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'pathway-node-stats',
        template: "\n    <div class=\"pathway-node-stats card padding-base\">\n      <div class=\"padding-base-vertical\" fxLayout=\"row\" *ngFor=\"let nodeType of nodeCountByType\">\n        <span class=\"main-text\" fxFlex>{{nodeType.type}}</span>\n        <span class=\"main-text primary-text\">{{nodeType.count}}</span>\n      </div>\n    </div>\n  "
    })
], PathwayNodeStats);

var _a;
//# sourceMappingURL=pathway-node-stats.component.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pathway__ = __webpack_require__(128);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PathwayFileReader; });

var PathwayFileReader = (function () {
    function PathwayFileReader() {
    }
    PathwayFileReader.readPathwayFile = function (file) {
        return new Promise(function (resolve, reject) {
            var myReader = new FileReader();
            myReader.onloadend = function (e) {
                var fileContent = JSON.parse(myReader.result);
                resolve(new __WEBPACK_IMPORTED_MODULE_0__pathway__["a" /* Pathway */](fileContent));
            };
            myReader.readAsText(file);
        });
    };
    return PathwayFileReader;
}());

//# sourceMappingURL=pathway-file-reader.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toast; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Toast = (function () {
    function Toast() {
    }
    return Toast;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Object)
], Toast.prototype, "message", void 0);
Toast = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'toast',
        styles: ["\n    .toast {\n      background-color: #000000;\n      opacity: 0.75;\n      border-radius: 0.6rem;\n      position: fixed;\n      bottom: 6%;\n      left: 50%;\n    }\n  "],
        template: "\n    <div class=\"toast padding-base-vertical padding-large-horizontal\">\n      <span class=\"main-text white-text\">{{message}}</span>\n    </div>\n  "
    })
], Toast);

//# sourceMappingURL=toast.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 499:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(212);


/***/ })

},[499]);
//# sourceMappingURL=main.bundle.js.map