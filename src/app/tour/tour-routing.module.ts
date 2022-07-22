import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  {
      path: '',
      component: TourComponent,
      data: {
          title: 'Tour ',
          headerDisplay: "none"
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourRoutingModule { }
