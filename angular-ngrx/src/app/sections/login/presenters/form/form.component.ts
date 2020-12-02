import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLoginPayload } from 'src/app/core/store/user/model/user-login-payload.model';
import { UserResult } from 'src/app/core/store/user/model/user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() public user: UserLoginPayload;
  @Output() public onUpdatePayload = new EventEmitter<{ property: string, value: string }>()

  constructor() { }

  ngOnInit(): void {
  }

  updatePayload = (property: string, value: string) => this.onUpdatePayload.emit({property: property, value: value})

}
