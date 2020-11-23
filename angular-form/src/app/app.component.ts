import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-form';
  public formPerson: FormGroup;
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = false;
    this.formPerson = this.formBuilder.group({
      name: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {

  }

  get f() {
    return this.formPerson.controls;
  }

  onSubmit() {
    this.submitted = true;
  }
  onClear() {
    this.submitted = false;
    this.formPerson.reset();
  }

}
