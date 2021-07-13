import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RestApiService } from '../shared/rest-api.service';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: any = [];

  editID: any;
  editIndex: any;

  deleteID: any;
  deleteIndex: any;

  editModalRef: any;
  deleteModalRef: any;

  postTitle: any;
  postBody: any;

  icons = {
    warning: faExclamationCircle
  }

  /* Modal Vars */
  @ViewChild('editModal') editModal: TemplateRef<void>;
  @ViewChild('deleteModal') deleteModal: TemplateRef<void>;

  constructor(private apiService: RestApiService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    return this.apiService.getData("posts").subscribe((data: any) => {
      let posts = data;
      for (let i = 0; i <= 5; i++) {
        this.posts[i] = posts[i];
      }

      this.posts.forEach((element: any, index: number) => {
        if (this.posts.length - 1 != index) {
          $(document).ready(() => {
            $(`#home #row${index}`).css({ "border-bottom": "1px solid rgba(0, 0, 0, 0.1)" });
          });
        }
      });
    });
  }

  editPost() {
    let body = {
      id: this.editID,
      title: this.postTitle,
      body: this.postBody,
      userId: 1
    };

    return this.apiService.putData(`posts/${this.editID}`, body).subscribe((data: any) => {
      this.posts[this.editIndex].title = data.title;
      this.posts[this.editIndex].body = data.body;
      this.editModalRef.close();
    });
  }

  deletePost() {
    return this.apiService.deleteData(`posts/${this.deleteID}`).subscribe(() => {
      this.posts.splice(this.deleteIndex, 1);
      this.posts.forEach((element: any, index: number) => {
        if (this.posts.length - 1 == index) {
          $(document).ready(() => {
            $(`#home #row${index}`).css({ "border-bottom": "none" });
          });
        }
      });

      this.deleteModalRef.close();
    });
  }

  /* Modals */
  editModalFunc(ID: any, index: any) {
    this.postTitle = this.posts[index].title;
    this.postBody = this.posts[index].body;

    this.editModalRef = this.modalService.open(this.editModal, { centered: true });
    this.editIndex = index;
    this.editID = ID;
  }

  deleteModalFunc(ID: any, index: any) {
    this.deleteModalRef = this.modalService.open(this.deleteModal, { centered: true });
    this.deleteIndex = index;
    this.deleteID = ID;
  }
}
