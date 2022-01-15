import { Component, Input } from '@angular/core'
import { Product } from '../../interfaces/product.interface'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product?: Product
}
