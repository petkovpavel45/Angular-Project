import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { samePassValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    tel: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: ['', [Validators.required]]
    }, {
      validators: [samePassValidator('password', 'rePassword')]
    })
  });


  registerHandler() {
    if (this.form.invalid) {return;}
    const {email, username, tel, pass: {password} = {}} = this.form.value;
    this.authService.register(email!, username!, tel!, password!)
      .subscribe(user => {
        this.router.navigate(['/fondation/recent'])
      })
  }
}