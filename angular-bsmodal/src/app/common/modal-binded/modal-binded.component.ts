import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-binded',
  templateUrl: './modal-binded.component.html',
  styleUrls: ['./modal-binded.component.scss']
})
export class ModalBindedComponent implements OnInit {
  @Input() public title: string = 'Not Binded'
  @Output() public action = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  clickButton = (response: string) => this.action.emit(response)

}
