import { Component, OnInit } from '@angular/core'
import localForage from 'src/app/shared/helpers/localforage.helper'
import { Product } from 'src/app/shared/interfaces/product.interface'
import { MockyService } from 'src/app/shared/services/mocky.service'

@Component({
  selector: 'products-page',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPageComponent implements OnInit {
  loading = true
  itens = [
    {
      label: 'Home',
      url: '/',
    },
  ]
  originalRequest: Array<Product> = []
  products: Array<Product> = []
  list: Array<Product> = []

  constructor(private mockyService: MockyService) {}

  async ngOnInit() {
    this.products = await this.getProducts()
    this.originalRequest = this.products
    this.list = (await localForage.getItem('products')) || []
    this.loading = false
  }

  findOnList(product: Product) {
    return !!this.list.find((item) => item.id === product.id)
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

  async toggleItem({ active, product }: { active: boolean; product: Product }) {
    if (active) {
      this.list.push(product)
    } else {
      this.list = this.list.filter((item) => item.id !== product.id)
    }
    await localForage.setItem('products', this.list)
  }

  async getProducts() {
    try {
      return await this.mockyService.getProducts()
    } catch (err) {
      console.error(err)
      return []
    }
  }
}
