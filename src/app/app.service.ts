import { Injectable } from '@angular/core';

import { Headers, Http, Response, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService{
  constructor(private http: Http){}

  uploadLink(email: String, devicename: String, action: String){
    var data = {username: email, devicename: devicename, action: action};
    return this.http.post("http://localhost:5010/uploadlink", data).map((r:Response) => r.json());
  }
  regdone(devicename: String){
    var data = {devicename: devicename};
    return this.http.post("http://localhost:5010/reg_done", data).map((r:Response) => r.json());
  }
  registerUser(name: String, email: String, devicename: String, fing: String){
    var data = {name: name, email: email, devicename: devicename, fingerprint: fing};
    return this.http.post("http://localhost:5010/reg_user", data).map((r:Response) => r.json());
  }
  checkUser(email: String, fing: String){
    var data = {name: name, email: email, fingerprint: fing};
    return this.http.post("http://localhost:5010/check_user", data).map((r:Response) => r.json());
  }
  login(name: String, password: String){
    var data = {name: name, password: password};
    return this.http.post("http://localhost:5010/login", data).map((r:Response) => r.json());
  }
}
