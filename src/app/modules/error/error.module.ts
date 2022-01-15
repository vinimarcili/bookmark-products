import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ErrorRoutingModule } from './error.routes'
import { NotFound404PageComponent } from './pages/404/404.page'

@NgModule({
  declarations: [NotFound404PageComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
