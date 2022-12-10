import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  showEditMode = false;
  formSubmitted = false;

  counter = 1;

  get user() {
    const { email, username, tel} = this.authService.user!;
    return {
      username,
      email,
      tel
    };
  }
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm({ ...this.user});
  }

  createForm(formValue: any) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required, Validators.minLength(5)]],
      tel: ['', [Validators.required, Validators.pattern('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$')]]    
    })

  }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  // saveProfile(): void {
  //   this.formSubmitted = true;
  //   if (this.form.invalid) { return; }
  //   const { username, email, ext, tel } = this.form.value;
  //   this.authService.setProfile(username, email, ext + ' ' + tel).subscribe(() => {
  //     this.toggleEditMode();
  //   });
  // }
}