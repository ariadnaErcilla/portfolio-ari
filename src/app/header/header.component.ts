import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
	public id:string = 'navbar-header'

  constructor(private translate: TranslateService) { }

  changeLang (lang: string) {
    this.translate.use(lang)
  }

  onClickMenu() {
  	(<any>window).jQuery(`#${this.id}`).collapse('hide')
  }
}
