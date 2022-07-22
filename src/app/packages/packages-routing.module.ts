import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';

const routes: Routes = [
  {
      path: '',
      component: PackagesComponent,
      data: {
          title: 'Packages ',
          headerDisplay: "none"
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
