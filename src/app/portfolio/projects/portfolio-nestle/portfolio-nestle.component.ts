import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-nestle',
  templateUrl: './portfolio-nestle.component.html',
  styleUrls: ['./portfolio-nestle.component.sass']
})
export class PortfolioNestleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scroll(id) {
  	const bodyRect = document.body.getBoundingClientRect()
  	const elemRect = document.getElementById(id).getBoundingClientRect()
  	const positionTop:number = elemRect.top - bodyRect.top

  	window.scroll({
  		top: positionTop > 0 ? positionTop : 0,
    	behavior: 'smooth',
  	})
  }

}
