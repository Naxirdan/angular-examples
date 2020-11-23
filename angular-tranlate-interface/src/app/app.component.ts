import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './core/service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tranlate-interface';

  constructor(private translate: TranslateService, private _languageService: LanguageService)
  {
    this.translate.setDefaultLang('ca');
  }

  translateApp = (lang: string) => this._languageService.changeDefaultLanguage(lang)

}
