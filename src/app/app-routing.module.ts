import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { redirectRoutes, routes } from './app.routes';

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...redirectRoutes])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
