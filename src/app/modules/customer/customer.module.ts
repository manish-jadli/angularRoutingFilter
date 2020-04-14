import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';

const ROUTES: Routes = [
  {
    path: '',
    component: CustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), CommonModule],
  exports: [RouterModule],
  declarations: [CustomerComponent]
})
export class CustomerModule {}
