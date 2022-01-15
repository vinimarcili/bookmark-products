import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { firstValueFrom } from 'rxjs'
import { environment } from 'src/environments/environment'
import { Product } from '../interfaces/product.interface'

@Injectable({
  providedIn: 'root',
})
export class MockyService {
  url: string

  constructor(private http: HttpClient) {
    this.url = environment?.services?.mocky
  }

  async getProducts(): Promise<Array<Product>> {
    return (
      (
        await firstValueFrom<{
          products?: Array<Product>
        }>(this.http.get(`${this.url}/66063904-d43c-49ed-9329-d69ad44b885e`))
      )?.products || []
    )
  }
}
