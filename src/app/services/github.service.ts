import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private userName: string = '';

  constructor(private _http: Http){}

  getUser(){
    return this._http.get('https://api.github.com/users/' + this.userName)
      .map(res => res.json())
  }

  getRepos(){
    return this._http.get('https://api.github.com/users/' + this.userName + '/repos')
      .map(res => res.json())
  }

  updateUsername(username: string){
    this.userName = username;
  }
}

