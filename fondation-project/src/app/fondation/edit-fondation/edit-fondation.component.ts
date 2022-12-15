import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FondationService } from '../fondation.service';

@Component({
  selector: 'app-edit-fondation',
  templateUrl: './edit-fondation.component.html',
  styleUrls: ['./edit-fondation.component.scss']
})
export class EditFondationComponent {
  fondationId = this.activatedRoute.snapshot.params?.['id'];
  constructor( 
    private fb: FormBuilder,
    private fondationService: FondationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.updateForm({...this.fondationData})
  }
  locations: string[] = ['Sofia', 'Varna', 'Plovdiv'];
  get fondationData() {
    const { title, description, location, img} = this.fondationService.fondation!;
    return {
      title,
      description,
      location,
      img
    };
  }
  form!: FormGroup;

  updateForm(formValue: any){
  this.form = this.fb.group({
    title: [formValue.title, [Validators.required, Validators.minLength(3)]],
    description: [formValue.description, [Validators.required, Validators.minLength(10)]],
    location: [formValue.location, [Validators.required]],
    img: [formValue.img, [Validators.required]],
  });
}


  editHandler() {
    if (this.form.invalid) {return;}
    const {title, description, location, img} = this.form.value;
    this.fondationService.updateFondation(this.fondationId, title!, description!, location!, img!)
      .subscribe(() => {
        this.router.navigate(['/fondation/detail/'+ this.fondationId])
      })
  }
}
