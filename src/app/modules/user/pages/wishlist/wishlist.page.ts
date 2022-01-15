import { isPlatformServer } from '@angular/common'
import { Component, Inject, InjectionToken, OnInit, PLATFORM_ID } from '@angular/core'
import { Product } from 'src/app/shared/interfaces/product.interface'

@Component({
  selector: 'wishlist-page',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPageComponent implements OnInit {
  loading = true
  itens = [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Lista de desejos',
      url: '/user/wishlist',
    },
  ]
  originalRequest: Array<Product> = []
  products: Array<Product> = []
  isServer = isPlatformServer(this.platformId)
  localForage: any

  constructor(@Inject(PLATFORM_ID) public platformId: InjectionToken<Object>) {
    if (!this.isServer) {
      this.localForage = require('src/app/shared/helpers/localforage/localforage.helper')?.default
    }
  }

  async ngOnInit() {
    if (!this.isServer) {
      this.products = (await this.localForage.getItem('products')) || []
      this.originalRequest = this.products
      this.loading = false
    }
  }

  search(text: string) {
    this.loading = true
    if (text?.length) {
      this.products = this.originalRequest.filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
    } else {
      this.products = this.originalRequest
    }
    this.loading = false
  }

  async toggleItem({ product }: { active: boolean; product: Product }) {
    this.products = this.products.filter((item) => item.id !== product.id)
    await this.localForage.setItem('products', this.products)
  }
}
