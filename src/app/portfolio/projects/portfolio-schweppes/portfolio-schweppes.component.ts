import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-schweppes',
  templateUrl: './portfolio-schweppes.component.html',
  styleUrls: ['./portfolio-schweppes.component.sass']
})
export class PortfolioSchweppesComponent implements OnInit {

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
