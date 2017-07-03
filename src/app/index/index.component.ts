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

}
