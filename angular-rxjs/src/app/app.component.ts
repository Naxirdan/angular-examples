import { Component, OnInit } from '@angular/core';
import { PlaceholderFacade } from './core/store/posts/facade/placeholder.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

  constructor(private _placeholderFacade: PlaceholderFacade) { }

  ngOnInit(): void {
    this._placeholderFacade.getPosts$()
  }

}
