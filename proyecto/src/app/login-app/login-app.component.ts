import { Component } from '@angular/core';

@Component({
  selector: 'app-login-app',
  templateUrl: './login-app.component.html',
  styleUrls: ['./login-app.component.css']
})
export class LoginAppComponent {
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
