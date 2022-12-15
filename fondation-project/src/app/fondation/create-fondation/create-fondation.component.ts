import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FondationService } from '../fondation.service';


@Component({
  selector: 'app-create-fondation',
  templateUrl: './create-fondation.component.html',
  styleUrls: ['./create-fondation.component.scss']
})
export class CreateFondationComponent {
  locations: string[] = ['Sofia', 'Varna', 'Plovdiv'];
  
  form = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(10)]],
    location: ['', [Validators.required]],
    img: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder,private fondationService: FondationService, private router: Router) { }

  createFondationHandler() {
    if (this.form.invalid) {return;}
    const {title, description, location, img} = this.form.value;
    this.fondationService.createFondation(title!, description!, location!, img!)
       .subscribe(() => {
        this.router.navigate(['/fondation/recent'])
       })
  }

}
