import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {TimeLinesComponent} from './time-lines/time-lines.component';

const routes: Routes = [
  {
    path: 'timelines',
    component: TimeLinesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
