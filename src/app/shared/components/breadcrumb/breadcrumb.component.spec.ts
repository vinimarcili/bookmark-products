import { RouterModule } from '@angular/router'
import { render, screen } from '@testing-library/angular'
import { BreadcrumbComponent } from './breadcrumb.component'

const getList = () => screen.getByTestId('breadcrumb') as HTMLElement

describe('BreadcrumbComponent', () => {
  it('loader should be render a bredcrumb', async () => {
    await render(BreadcrumbComponent, {
      imports: [RouterModule.forRoot([])],
      componentProperties: {
        itens: [
          { label: 'item1', url: '/' },
          { label: 'item2', url: '/a' },
        ],
      },
    })
    expect(getList().innerHTML).toContain('item1')
    expect(getList().innerHTML).toContain('fas fa-chevron-right')
    expect(getList().innerHTML).toContain('item2')
  })
})
