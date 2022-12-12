import { RouterModule, Routes } from "@angular/router";
import { CreateFondationComponent } from "./create-fondation/create-fondation.component";
import { EditFondationComponent } from "./edit-fondation/edit-fondation.component";
import { FondationDetailComponent } from "./fondation-detail/fondation-detail.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent
  },
  {
    path: 'new-fondation',
    component: CreateFondationComponent
  },
  {
    path: 'detail/:id',
    component: FondationDetailComponent
  },
  {
    path: 'edit/:id',
    component: EditFondationComponent
  }
];

export const FondationRoutingModule = RouterModule.forChild(routes);