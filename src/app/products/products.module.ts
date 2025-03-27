import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [],
  imports: [ProductsComponent, CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
