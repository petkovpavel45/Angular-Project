import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FondationRoutingModule } from './fondation-routing.module';


@NgModule({
  declarations: [
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