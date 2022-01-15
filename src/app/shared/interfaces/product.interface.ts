export interface Product {
  id: number
  sku: number
  title: string
  description: string
  availableSizes: {
    [key: number | string]: number
  }
  style: string
  price: number
  installments: number
  currencyId: string
  currencyFormat: string
  isFreeShipping: boolean
  image: string
}
