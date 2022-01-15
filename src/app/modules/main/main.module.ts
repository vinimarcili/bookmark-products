import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MainRoutingModule } from './main.routes'
import { SharedModule } from 'src/app/shared/shared.module'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ProductsPageComponent } from './pages/products/products.page'
import { Soon404PageComponent } from './pages/soon/soon.page'

@NgModule({
  declarations: [ProductsPageComponent, Soon404PageComponent],
  imports: [CommonModule, MainRoutingModule, SharedModule, HttpClientModule, RouterModule],
})
export class MainModule {}
