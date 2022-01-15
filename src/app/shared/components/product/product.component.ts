import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Product } from '../../interfaces/product.interface'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product?: Product
  @Input() toRemove = false
  @Input() active = false

  @Output() toggleItem: EventEmitter<any> = new EventEmitter()

  toggle() {
    this.active = !this.active
    this.toggleItem.emit({ active: this.active, product: this.product })
  }
}
