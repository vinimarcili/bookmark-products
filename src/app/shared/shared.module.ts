import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component'
import { InputSquidComponent } from './components/input/input.component'
import { LoaderComponent } from './components/loader/loader.component'
import { ProductComponent } from './components/product/product.component'
import { DefaultLayoutComponent } from './layouts/default/default.layout'

@NgModule({
  declarations: [DefaultLayoutComponent, InputSquidComponent, ProductComponent, LoaderComponent, BreadcrumbComponent],
  imports: [RouterModule, CommonModule, FormsModule, HttpClientModule],
  exports: [CommonModule, DefaultLayoutComponent, InputSquidComponent, ProductComponent, LoaderComponent, BreadcrumbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
