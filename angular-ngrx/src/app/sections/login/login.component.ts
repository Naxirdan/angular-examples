import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserLoginPayload } from 'src/app/core/store/user/model/user-login-payload.model';
import { Observable } from 'rxjs';
import { UserFacade } from 'src/app/core/store/user/facade/user.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  public userPayload: Observable<UserLoginPayload>

  constructor(private userFacade: UserFacade) { }

  ngOnInit(): void {
    this.userPayload = this.userFacade.getLoginPayload()
  }

  updatePayload = (payload: {property: string, value: string}) => this.userFacade.updatePayload(payload)

}
