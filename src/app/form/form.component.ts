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

  onSubmit(form) {
    document.getElementById('user-email').classList.remove('email-sent');
    document.getElementById('user-email').classList.add('email-success');
  }

  ngOnInit(): void {}
}
