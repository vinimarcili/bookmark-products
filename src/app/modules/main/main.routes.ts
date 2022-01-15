import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DefaultLayoutComponent } from 'src/app/shared/layouts/default/default.layout'
import { ProductsPageComponent } from './pages/products/products.page'
import { Soon404PageComponent } from './pages/soon/soon.page'

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        component: ProductsPageComponent,
      },
      {
        path: 'soon',
        component: Soon404PageComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
