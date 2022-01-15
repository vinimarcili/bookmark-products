import { Component, Input } from '@angular/core'

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() itens: Array<{
    label: string
    url: string
  }> = []
}
