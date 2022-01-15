import { Component, Input } from '@angular/core'

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() size: 'small' | '' | 'big' | 'bigger' = ''
}
