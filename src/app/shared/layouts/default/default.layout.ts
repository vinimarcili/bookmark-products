import { isPlatformServer } from '@angular/common'
import { Component, Inject, InjectionToken, PLATFORM_ID } from '@angular/core'

@Component({
  selector: 'default-layout',
  templateUrl: './default.layout.html',
  styleUrls: ['./default.layout.scss'],
})
export class DefaultLayoutComponent {
  searchText = ''
  canSearch = false
  component: any
  isServer = isPlatformServer(this.platformId)

  constructor(@Inject(PLATFORM_ID) public platformId: InjectionToken<Object>) {}

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

  clear() {
    if (this.searchText?.length) {
      this.searchText = ''
      this.component?.search(this.searchText)
    }
  }

  onEnter(event: any) {
    if (event.keyCode === 13) {
      this.component?.search(this.searchText)
    }
  }
}
