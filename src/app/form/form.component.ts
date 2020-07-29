import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  constructor() {}

  userEmail = {
    email: '',
  };

  onSubmit(form) {}

  ngOnInit(): void {}
}
