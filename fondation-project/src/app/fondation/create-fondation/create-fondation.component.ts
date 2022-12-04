import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-fondation',
  templateUrl: './create-fondation.component.html',
  styleUrls: ['./create-fondation.component.scss']
})
export class CreateFondationComponent {
  
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    location: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) { }

  createFondationHandler(form: NgForm): void {
    if (form.invalid) { return; }
    console.log(form.value);
  }
}
