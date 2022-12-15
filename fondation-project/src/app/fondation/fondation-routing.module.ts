import { RouterModule, Routes } from "@angular/router";
import { CreateFondationComponent } from "./create-fondation/create-fondation.component";
import { EditFondationComponent } from "./edit-fondation/edit-fondation.component";
import { FondationDetailComponent } from "./fondation-detail/fondation-detail.component";
import { RecentFondationsComponent } from "./recent-fondations/recent-fondations.component";

const routes: Routes = [
  {
    path: 'recent',
    component: RecentFondationsComponent,
    title: 'Recent Fondations'
  },
  {
    path: 'new-fondation',
    component: CreateFondationComponent,
    title: 'Create Fondation'
  },
  {
    path: 'detail/:id',
    component: FondationDetailComponent,
    title: 'Detail Fondation'
  },
  {
    path: 'edit/:id',
    component: EditFondationComponent,
    title: 'Edit Fondation'
  }
];

export const FondationRoutingModule = RouterModule.forChild(routes);