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
  list: Array<Product> = []

  constructor() {}

  async ngOnInit() {
    this.list = (await localForage.getItem('products')) || []
    this.loading = false
  }

  async toggleItem({ product }: { active: boolean; product: Product }) {
    this.list = this.list.filter((item) => item.id !== product.id)
    await localForage.setItem('products', this.list)
  }
}
