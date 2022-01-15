import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DefaultLayoutComponent } from 'src/app/shared/layouts/default/default.layout'
import { ProductsPageComponent } from './pages/products/products.page'

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
