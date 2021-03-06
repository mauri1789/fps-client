"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/catch');
require('rxjs/add/operator/debounceTime');
require('rxjs/add/operator/distinctUntilChanged');
require('rxjs/add/operator/map');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var AppService = (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.uploadLink = function (email, devicename, action) {
        var data = { username: email, devicename: devicename, action: action };
        return this.http.post("http://localhost:5010/uploadlink", data).map(function (r) { return r.json(); });
    };
    AppService.prototype.regdone = function (devicename) {
        var data = { devicename: devicename };
        return this.http.post("http://localhost:5010/reg_done", data).map(function (r) { return r.json(); });
    };
    AppService.prototype.registerUser = function (name, email, devicename, fing) {
        var data = { name: name, email: email, devicename: devicename, fingerprint: fing };
        return this.http.post("http://localhost:5010/reg_user", data).map(function (r) { return r.json(); });
    };
    AppService.prototype.checkUser = function (email, fing) {
        var data = { name: name, email: email, fingerprint: fing };
        return this.http.post("http://localhost:5010/check_user", data).map(function (r) { return r.json(); });
    };
    AppService.prototype.login = function (name, password) {
        var data = { name: name, password: password };
        return this.http.post("http://localhost:5010/login", data).map(function (r) { return r.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map