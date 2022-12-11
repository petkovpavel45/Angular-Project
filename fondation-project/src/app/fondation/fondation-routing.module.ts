import { RouterModule, Routes } from "@angular/router";
import { CreateFondationComponent } from "./create-fondation/create-fondation.component";
import { FondationDetailComponent } from "./fondation-detail/fondation-detail.component";
import { MainComponent } from "./main/main.component";
import { FondationResolver } from "./resolvers/fondation.resolver";

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
    resolve: {
      fondation: FondationResolver
    },
    component: FondationDetailComponent
  }
];

export const FondationRoutingModule = RouterModule.forChild(routes);