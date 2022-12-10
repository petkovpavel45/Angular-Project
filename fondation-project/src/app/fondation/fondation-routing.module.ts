import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: 'recent',
    component: MainComponent
  },
  // {
  //   path: 'new',
  //   component: NewThemeComponent
  // },
  // {
  //   path: 'detail/:id',
  //   resolve: {
  //     theme: ThemeResolver
  //   },
  //   component: ThemeDetailComponent
  // }
];

export const FondationRoutingModule = RouterModule.forChild(routes);