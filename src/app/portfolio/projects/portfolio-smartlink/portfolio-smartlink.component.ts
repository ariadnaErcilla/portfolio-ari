import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-smartlink',
  templateUrl: './portfolio-smartlink.component.html',
  styleUrls: ['./portfolio-smartlink.component.sass']
})
export class PortfolioSmartlinkComponent implements OnInit {

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
