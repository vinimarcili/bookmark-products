import { Component } from '@angular/core'

@Component({
  selector: 'default-layout',
  templateUrl: './default.layout.html',
  styleUrls: ['./default.layout.scss'],
})
export class DefaultLayoutComponent {
  searchText = ''
  canSearch = false
  component: any

  activate(componentRef: any) {
    setTimeout(() => {
      if (componentRef?.products?.length) {
        this.component = componentRef
        this.canSearch = true
      } else {
        this.canSearch = false
        this.searchText = ''
      }
    }, 1000)
  }

  onEnter(event: any) {
    if (event.keyCode === 13) {
      this.component?.search(this.searchText)
    }
  }
}
