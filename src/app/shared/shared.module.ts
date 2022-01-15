import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { InputSquidComponent } from './components/input/input.component'
import { LoaderComponent } from './components/loader/loader.component'
import { ProductComponent } from './components/product/product.component'
import { DefaultLayoutComponent } from './layouts/default/default.layout'

@NgModule({
  declarations: [DefaultLayoutComponent, InputSquidComponent, ProductComponent, LoaderComponent],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [CommonModule, DefaultLayoutComponent, InputSquidComponent, ProductComponent, LoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
