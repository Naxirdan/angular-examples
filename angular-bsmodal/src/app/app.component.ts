import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';
import { ModalBindedComponent } from './common/modal-binded/modal-binded.component';
import { ModalComponent } from './common/modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bsmodal';

  public bsModalRefNormal = new BsModalRef();
  public bsModalRefBinded = new BsModalRef();
  public bindedSubscription = new Subscription();

  constructor(private bsModalService: BsModalService) { }

  openNormalModal = () => this.bsModalRefNormal = this.bsModalService.show(ModalComponent)
  openBindedModal = (title: string) => {
    this.bsModalRefBinded = this.bsModalService.show(ModalBindedComponent, { initialState: { title: title } })
    this.bindedSubscription = this.bsModalRefBinded.content.action.subscribe((res: string) =>{
       console.log(res)
       this.bsModalRefBinded.hide()
    })
  }
}
