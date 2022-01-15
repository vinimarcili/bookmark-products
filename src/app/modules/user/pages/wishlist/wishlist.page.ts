import { Component, OnInit } from '@angular/core'
import localForage from 'src/app/shared/helpers/localforage.helper'
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

  constructor() {}

  async ngOnInit() {
    this.products = (await localForage.getItem('products')) || []
    this.originalRequest = this.products
    this.loading = false
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
    await localForage.setItem('products', this.products)
  }
}
