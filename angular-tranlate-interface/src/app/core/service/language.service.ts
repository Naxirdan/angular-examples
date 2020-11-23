import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translateService: TranslateService) { }

  changeDefaultLanguage = (lang: string) => this.translateService.setDefaultLang(lang);

}
