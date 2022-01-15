import { render, screen } from '@testing-library/angular'
import { ProductComponent } from './product.component'
import productJson from './product.component.mock.json'
import { Product } from '../../interfaces/product.interface'
import userEvent from '@testing-library/user-event'

const getBadge = () => screen.getByTestId('badge') as HTMLElement
const getCross = () => screen.getByTestId('cross') as HTMLElement
const getFigure = () => screen.getByTestId('figure') as HTMLElement
const getTitle = () => screen.getByTestId('title') as HTMLElement
const getPrice = () => screen.getByTestId('price') as HTMLElement

describe('ProductComponent', () => {
  it('product shold be render with heart badge', async () => {
    await render(ProductComponent, { componentProperties: { product: productJson as Product } })
    expect(getBadge()?.innerHTML).toContain('fas fa-heart')
    expect(getFigure()?.innerHTML).toContain(productJson.image)
    expect(getTitle()?.innerHTML).toContain(productJson.title)
    expect(getPrice()?.innerHTML).toContain(productJson.price.toString().replace('.', ','))
  })

  it('product shold be render with a badge with an active class', async () => {
    await render(ProductComponent, { componentProperties: { product: productJson as Product, active: true } })
    expect(getBadge()).toHaveClass('active')
    expect(getFigure()?.innerHTML).toContain(productJson.image)
    expect(getTitle()?.innerHTML).toContain(productJson.title)
    expect(getPrice()?.innerHTML).toContain(productJson.price.toString().replace('.', ','))
  })

  it('product have to change active state when badge is clicked', async () => {
    await render(ProductComponent, { componentProperties: { product: productJson as Product } })
    expect(getBadge()?.classList.contains('active')).toBeFalse()
    userEvent.click(getBadge())
    expect(getBadge()).toHaveClass('active')
  })

  it('product shold be render with a cross', async () => {
    await render(ProductComponent, { componentProperties: { product: productJson as Product, toRemove: true } })
    expect(getCross())
    expect(getFigure()?.innerHTML).toContain(productJson.image)
    expect(getTitle()?.innerHTML).toContain(productJson.title)
    expect(getPrice()?.innerHTML).toContain(productJson.price.toString().replace('.', ','))
  })

  it('product shold be render with a error message', async () => {
    await render(ProductComponent)
    expect(getTitle()?.innerHTML).toContain('Produto não existente')
  })
})
