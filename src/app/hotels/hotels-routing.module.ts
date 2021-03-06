import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels/hotels.component';

const routes: Routes = [
  {
      path: '',
      component: HotelsComponent,
      data: {
          title: 'Hotels',
          headerDisplay: "none"
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
