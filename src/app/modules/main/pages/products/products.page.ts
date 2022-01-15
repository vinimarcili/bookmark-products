import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'products-page',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPageComponent implements OnInit {
  loading = true
  async ngOnInit() {}
}
