import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [GithubService],
})
export class GithubComponent {
  user:any;
  repos:any;
  username:string ='';

  constructor(private _githubService:GithubService){}

  search(){
    if(this.username.length == 0){
      this.user = null;
      this.repos = null;
      this.username = '';
    }else{
      this._githubService.updateUsername(this.username);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos.sort((a: any, b: any) => {
          if (a.stargazers_count < b.stargazers_count) {
            return 1;
          } else if (a.stargazers_count > b.stargazers_count) {
            return -1;
          } else {
            return 0;
          }
        });
      });
    }
  }
}

