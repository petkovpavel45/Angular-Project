import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { samePassValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    ext: [''],
    tel: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [samePassValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder) { }

  registerHandler() {
    console.log(this.form.value);
  }
}