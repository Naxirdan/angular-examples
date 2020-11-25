import { Component, OnInit } from '@angular/core';
import { TestInterceptorApi } from './core/api/test-interceptor.api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-interceptors-toastr';

  constructor(private _api: TestInterceptorApi) { }

  ngOnInit():void {
    this._api.get400Api$().subscribe()
  }
}
