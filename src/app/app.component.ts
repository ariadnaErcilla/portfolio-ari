import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('es');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('es');

    //(<any>window).jQuery("body").smoove({
		  //offset  : '15%',
		  // moveX is overridden to -200px for ".bar" object
		  //moveX   : '100px',
		  //moveY   : '100px',
		//});
  }
}
