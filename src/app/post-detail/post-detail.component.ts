import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  postID: any;
  postDetail: any;

  icons = {
    link: faLink
  }

  constructor(private apiService: RestApiService, private route: ActivatedRoute) {
    this.postID = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit(): void {
    this.getPostDetail();
  }

  getPostDetail() {
    return this.apiService.getData(`posts/${this.postID}`).subscribe((data) => {
      this.postDetail = data;

      this.getUserName(this.postDetail.userId);
    });
  }

  getUserName(userId: number) {
    return this.apiService.getData(`users/${userId}`).subscribe((data: any) => {
      this.postDetail.username = data.username;
    });
  }

}
