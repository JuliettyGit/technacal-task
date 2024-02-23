import { Routes } from '@angular/router';
import { ROUTE_EMPTY, ROUTE_HOME, ROUTE_WILDCARD } from './constants/routing-constants';

export const routes: Routes = [
  {
    path: ROUTE_HOME,
    loadChildren: () => import('./home-page/home-page.module').then((m) => m.HomePageModule)
  }
];

export const redirectRoutes: Routes = [
  {
    path: ROUTE_EMPTY,
    redirectTo: ROUTE_HOME,
    pathMatch: 'full',
  },
  {
    path: ROUTE_WILDCARD,
    redirectTo: ROUTE_HOME,
  },
];
