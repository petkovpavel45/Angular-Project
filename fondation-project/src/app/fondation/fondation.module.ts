import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { RecentFondationsComponent } from './recent-fondations/recent-fondations.component';
import { CreateFondationComponent } from './create-fondation/create-fondation.component';
import { FondationRoutingModule } from './fondation-routing.module';


@NgModule({
  declarations: [
    RecentFondationsComponent,
    CreateFondationComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    FondationRoutingModule
  ],
  exports: []
})
export class FondationModule { }