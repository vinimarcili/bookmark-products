import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainRoutingModule } from './main.routes'
import { SharedModule } from 'src/app/shared/shared.module'

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, SharedModule],
})
export class MainModule {}
