import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { samePassValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [samePassValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  registerHandler() {
    if (this.form.invalid) {return;}
    const {email, username, tel, pass: {password} = {}} = this.form.value;
    // console.log(email, username, tel, password);
    this.authService.register(email!, username!, tel!, password!)
      .subscribe(res => console.log(res))
  }
}