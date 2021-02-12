import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserLoginPayload } from 'src/app/core/store/user/model/user-login-payload.model';
import { UserResult } from 'src/app/core/store/user/model/user.model';
import { initialUserLoginPayload } from '../../../../core/store/user/model/user-login-payload.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() public user: UserLoginPayload;
  @Output() public onUpdatePayload = new EventEmitter<{ property: string, value: string }>()

  constructor() { }

  updatePayload = (property: string, value: string) => this.onUpdatePayload.emit({ property: property, value: value })

}
