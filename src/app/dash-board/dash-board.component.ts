import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  breadCrumbLinks: String[] = ["DashBoard", "Sri Chaitanya"];
  data: any;
  searchText: any;
  show: boolean = false;
  userdetailsShow = false;
  node_id: any;
  avatar_url: any;
  url: any = "https://itunes.apple.com/search";
  constructor(private http: HttpClient) { }


  ngOnInit() {

  }
  
  getGitHubUsers() {
        //alert(this.searchText);
        this.userdetailsShow = false;
        this.show = true;
        let urlToCall = "https://api.github.com/users";
        return this.http.get(urlToCall).subscribe(item => {
          this.data = item;
        });
      }
  ShowUserDetails(i){
        this.node_id = i.node_id;
        this.avatar_url = i.avatar_url;
        this.userdetailsShow = true;
      }
  onGoToPage2() {
        alert("")
      }

}
class git {
  constructor(login: string,
    id: Number,
    node_id: string,
    avatar_url: string,
    url: string,
    followers_url: string) {

  }
}


  // "login": "mojombo",
  //   "id": 1,
  //   "node_id": "MDQ6VXNlcjE=",
  //   "avatar_url": "https://avatars0.githubusercontent.com/u/1?v=4",
  //   "gravatar_id": "",
  //   "url": "https://api.github.com/users/mojombo",
  //   "html_url": "https://github.com/mojombo",
  //   "followers_url": "https://api.github.com/users/mojombo/followers
// }