import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainRoutingModule } from './main.routes'
import { SharedModule } from 'src/app/shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, MainRoutingModule, SharedModule, HttpClientModule],
  schemas: [],
})
export class MainModule {}
