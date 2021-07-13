import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  userID: any;
  userDetail: any;

  constructor(private apiService: RestApiService, private route: ActivatedRoute) {
    this.userID = this.route.snapshot.paramMap.get("userId");
  }

  ngOnInit(): void {
    this.getUserDetail();
  }

  getUserDetail() {
    return this.apiService.getData(`users/${this.userID}`).subscribe((data) => {
      this.userDetail = data;
    });
  }

}
