import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { InputSquidComponent } from './components/input/input.component'
import { DefaultLayoutComponent } from './layouts/default/default.layout'

@NgModule({
  declarations: [DefaultLayoutComponent, InputSquidComponent],
  imports: [RouterModule, CommonModule, FormsModule],
  exports: [DefaultLayoutComponent, InputSquidComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
