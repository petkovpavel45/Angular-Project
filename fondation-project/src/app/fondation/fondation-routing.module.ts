import { RouterModule, Routes } from '@angular/router';
import { CreateFondationComponent } from './create-fondation/create-fondation.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'fondation',
    children: [
      {
        path: 'recent',
        component: MainComponent,
      },
      {
        path: 'create',
        component: CreateFondationComponent,
      },
      //   {
      //     path: 'detail/:id',
      //     resolve: {
      //       theme: ThemeResolver
      //     },
      //     component: ThemeDetailComponent
      //   }
    ],
  },
];

export const FondationRoutingModule = RouterModule.forChild(routes);
