import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { DefaultLayoutComponent } from 'src/app/shared/layouts/default/default.layout'
import { WishlistPageComponent } from './pages/wishlist/wishlist.page'

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'wishlist',
        component: WishlistPageComponent,
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
