import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})
export class IndexComponent implements OnInit {
  public selectedLang

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.selectedLang = this.translate.currentLang
  }

  tabsNav(tabName:string) {
  	const element = document.getElementById(tabName)
  	const bodyRect = document.body.getBoundingClientRect()
  	const elemRect = element.getBoundingClientRect()
  	const positionTop:number = elemRect.top - bodyRect.top

  	window.scroll({
  		top: positionTop > 0 ? positionTop : 0,
    	behavior: 'smooth',
  	})
  }

}
