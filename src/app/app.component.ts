import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sikayetvar';

  constructor() { }

  ngOnInit() {
    let circleLocations = [
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "-4.03%", "right": "95.69%", "top": "-0.86%", "bottom": "91.48%", "opacity": "0.1"
      },
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "-0.42%", "right": "92.08%", "top": "22.42%", "bottom": "68.2%", "opacity": "0.1"
      },
      {
        "width": "12.955729166666666vw", "height": "12.955729166666666vw",
        "left": "10.76%", "right": "75.42%", "top": "17.5%", "bottom": "66.95%", "opacity": "0.15"
      },
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "55.69%", "right": "35.97%", "top": "7.03%", "bottom": "83.59%", "opacity": "0.1"
      },
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "83.47%", "right": "8.19%", "top": "4.61%", "bottom": "86.02%", "opacity": "0.1"
      },
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "86.11%", "right": "5.56%", "top": "19.61%", "bottom": "71.02%", "opacity": "0.1"
      },
      {
        "width": "7.8125vw", "height": "7.8125vw",
        "left": "82.5%", "right": "9.17%", "top": "24.84%", "bottom": "65.78%", "opacity": "0.1"
      }
    ];

    circleLocations.forEach((element, index) => {
      let circleDiv = `<div id="circle${index}" style="position: absolute; border-radius: 50%; background: #ffffff; mix-blend-mode: normal;"></div>`;

      $(document).ready(() => {
        $("body").append(circleDiv);
        $(`#circle${index}`).css(element);
      });
    })


  }
}
