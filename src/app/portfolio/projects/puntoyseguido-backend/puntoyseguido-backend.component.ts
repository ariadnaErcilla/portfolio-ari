import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puntoyseguido-backend',
  templateUrl: './puntoyseguido-backend.component.html',
  styleUrls: ['./puntoyseguido-backend.component.sass']
})
export class PuntoyseguidoBackendComponent implements OnInit {

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
