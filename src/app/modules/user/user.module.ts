import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UsersRoutingModule } from './user.routes'
import { SharedModule } from 'src/app/shared/shared.module'
import { WishlistPageComponent } from './pages/wishlist/wishlist.page'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [WishlistPageComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule, HttpClientModule, RouterModule],
})
export class UserModule {}
