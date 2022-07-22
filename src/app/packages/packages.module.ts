import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { PackagesComponent } from './packages/packages.component';


@NgModule({
  declarations: [PackagesComponent],
  imports: [
    CommonModule,
    PackagesRoutingModule
  ]
})
export class PackagesModule { }
