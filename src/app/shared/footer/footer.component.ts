import { Component, OnInit } from '@angular/core';
import { faTwitterSquare, faFacebookSquare, faDribbbleSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  smIcons = {
    twitter: faTwitterSquare,
    facebook: faFacebookSquare,
    dribbble: faDribbbleSquare,
    github: faGithubSquare
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
