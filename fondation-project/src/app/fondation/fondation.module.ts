import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecentFondationsComponent } from './recent-fondations/recent-fondations.component';
import { CreateFondationComponent } from './create-fondation/create-fondation.component';
import { FondationRoutingModule } from './fondation-routing.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { FondationDetailComponent } from './fondation-detail/fondation-detail.component';
import { EditFondationComponent } from './edit-fondation/edit-fondation.component';


@NgModule({
  declarations: [
    RecentFondationsComponent,
    CreateFondationComponent,
    FondationDetailComponent,
    EditFondationComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    FondationRoutingModule
  ],
  exports: []
})
export class FondationModule { }